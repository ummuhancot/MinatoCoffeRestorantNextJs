import Slider from '@/components/slider-carousel';
import React from 'react'

const Page = () => {
  return (
    // slider-carousel kısmını buraya koydum
    <div>
      <Slider />

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
        }}
      >
        <img
          src="/minato/sweetMinato.jpeg"
          alt="Welcome"
          style={{
            width: "100px",
            height: "100px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #FFD600",
          }}
        />
        <div
          className="welcome"
          style={{
            marginTop: "30px",
            marginBottom: "30px",
            minHeight: "100%",
            backgroundColor: "#000000a0",
            color: "white",
            padding: "10px",
            borderRadius: "8px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1.2rem",
            boxShadow: "0px 0px 3px 5px #FFD600",
            animation: "rot55 0.7s linear infinite",
          }}
        >
          <div
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "black" }}
          >
            港
          </div>
          <div style={{  fontSize:"0.95rem" }}>
            ありがとうありがとう!
            <hr />
            「青い空は、どんな嵐の後もまた広がる。」
            <br /> (Aoi sora wa, donna arashi no ato mo mata hirogaru.)
            <br />
            “Mavi gökyüzü, hangi fırtına geçerse geçsin yeniden açılır.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page
