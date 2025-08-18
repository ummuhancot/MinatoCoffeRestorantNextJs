import React from 'react'


export const metadata = {
  title: "milk",
  description: "coffe of AO 青",
};

const Page = () => {
  return (
    <div>
      <div
        className="mb-5"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "16px",
          backgroundColor: "#000000a0",
          color: "white",
          padding: "20px",
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
          src="/minato/milkMinato.jpeg"
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
          <div style={{fontSize: "0.95rem" }}>
            ありがとうありがとう! <hr />
            「青い海は、静けさの中に力を隠している。」
            <br />
            (Aoi umi wa, shizukesa no naka ni chikara o kakushite iru.) <br />
            “Mavi deniz, sessizliğin içinde gücünü saklar.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page