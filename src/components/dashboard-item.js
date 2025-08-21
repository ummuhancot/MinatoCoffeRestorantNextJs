"use client";
import { useState, useEffect } from "react";
import catHours from "@/helpers/data/cat-hours.json";

export default function DashboardItem() {
  const [customerName, setCustomerName] = useState("");
  const [customers, setCustomers] = useState([]);
  const [showDropdown, setShowDropdown] = useState(false);
  const [error, setError] = useState("");

  // Başlangıçta localStorage'dan yükle
  useEffect(() => {
    const saved = localStorage.getItem("customers");
    if (saved) setCustomers(JSON.parse(saved));
  }, []);

  // Süreyi her saniye azalt ve localStorage'a kaydet
  useEffect(() => {
    const timer = setInterval(() => {
      setCustomers((prev) => {
        const updated = prev.map((c) =>
          c.remainingTime > 0 ? { ...c, remainingTime: c.remainingTime - 1 } : c
        );
        localStorage.setItem("customers", JSON.stringify(updated));
        return updated;
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const selectSession = (session) => {
    if (!customerName.trim()) {
      setError("Lütfen müşteri ismi giriniz!");
      return;
    }

    const totalSeconds = session.minutes
      ? session.minutes * 60
      : session.hours * 3600;

    const newCustomer = {
      id: Date.now(),
      name: customerName,
      session,
      remainingTime: totalSeconds,
    };

    const updated = [...customers, newCustomer];
    setCustomers(updated);
    localStorage.setItem("customers", JSON.stringify(updated));
    setCustomerName("");
    setError("");
    setShowDropdown(false);
  };

  const removeCustomer = (id) => {
    const updated = customers.filter((c) => c.id !== id);
    setCustomers(updated);
    localStorage.setItem("customers", JSON.stringify(updated));
  };

  const formatTime = (seconds) => {
    const h = Math.floor(seconds / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = seconds % 60;
    return `${h.toString().padStart(2, "0")}:${m
      .toString()
      .padStart(2, "0")}:${s.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className="cat-mino"
      style={{
        maxWidth: "700px",
        margin: "40px auto",
        padding: "20px",
        borderRadius: "15px",
        boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
        backgroundColor: "#fff",
      }}
    >
      <h2
        className="swiper"
        style={{ textAlign: "center", marginBottom: "20px", color: "#f39c12" }}
      >
        Kedi Seansları
      </h2>

      <div style={{ marginBottom: "10px", textAlign: "center" }}>
        <input
          type="text"
          placeholder="Müşteri ismi"
          value={customerName}
          onChange={(e) => {
            setCustomerName(e.target.value);
            if (e.target.value.trim()) setError("");
          }}
          style={{
            padding: "10px",
            width: "80%",
            borderRadius: "8px",
            border: error ? "1px solid red" : "1px solid #ccc",
            fontSize: "16px",
          }}
        />
        {error && (
          <p style={{ color: "red", marginTop: "5px", fontSize: "14px" }}>
            {error}
          </p>
        )}
      </div>

      <div
        style={{
          textAlign: "center",
          marginBottom: "15px",
          position: "relative",
        }}
      >
        <button
          className="swiper"
          onClick={() => setShowDropdown(!showDropdown)}
          style={{
            padding: "10px 20px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#f39c12",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
          }}
        >
          Seans Seç
        </button>

        {showDropdown && (
          <div
            style={{
              position: "absolute",
              top: "50px",
              left: "50%",
              transform: "translateX(-50%)",
              backgroundColor: "#fff",
              border: "1px solid #ddd",
              borderRadius: "8px",
              boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
              width: "220px",
              zIndex: 100,
            }}
          >
            {catHours.map((session) => (
              <div
                key={session.id}
                onClick={() => selectSession(session)}
                style={{
                  padding: "10px",
                  cursor: "pointer",
                  borderBottom: "1px solid #eee",
                  textAlign: "center",
                }}
              >
                {session.minutes
                  ? `${session.minutes} Dakika - $${session.price}`
                  : `${session.hours} Saat - $${session.price}`}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="swiper" style={{ marginTop: "25px" }}>
        <h3 style={{ color: "#f39c12", marginBottom: "15px" }}>
          Aktif Seanslar
        </h3>
        {customers.length === 0 && <p>Henüz müşteri eklenmedi.</p>}
        {customers.map((c) => (
          <div
            key={c.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 15px",
              marginBottom: "10px",
              borderRadius: "10px",
              border: "1px solid #f39c12",
              backgroundColor: "#fffaf0",
            }}
          >
            <div>
              <p>
                <strong>{c.name}</strong> (
                {c.session.minutes
                  ? `${c.session.minutes} dk`
                  : `${c.session.hours} saat`}{" "}
                - ${c.session.price})
              </p>
            </div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <div style={{ fontWeight: "bold", fontSize: "16px" }}>
                {c.remainingTime > 0 ? (
                  formatTime(c.remainingTime)
                ) : (
                  <span style={{ color: "red" }}>Seans Bitti!</span>
                )}
              </div>
              <button
                onClick={() => removeCustomer(c.id)}
                style={{
                  padding: "5px 10px",
                  borderRadius: "6px",
                  border: "none",
                  backgroundColor: "black",
                  color: "#fff",
                  fontSize: "14px",
                  cursor: "pointer",
                }}
              >
                Sil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
