import React from 'react'


export const metadata = {
  title: "sweet",
  description: "coffe of yellow",
};

const Page = () => {
  return (
    <div className="mb-5">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          backgroundColor: "#000000a0",
          color: "white",
          padding: "10px",
          borderRadius: "8px",
          flexDirection: "row",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          textAlign: "center",
          fontWeight: "bold",
          fontSize: "1.2rem",
          boxShadow: "0px 0px 3px 5px #FFD600",
          animation: "rot55 0.7s linear infinite",
        }}
      >
        <img
          src="/minato/sweetMinato.jpeg"
          alt="Welcome"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "1px solid #FFD600",
          }}
        />
        <div>
          <div style={{ fontWeight: "bold", fontSize: "1.2rem" }}>港</div>
          <div style={{ color: "white", fontSize: "0.95rem" }}>
            ありがとうありがとう! <hr />
            「青は、永遠の希望の色。」
            <br /> (Ao wa, eien no kibō no iro.) <br />
            “Mavi, sonsuz umudun rengidir.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page