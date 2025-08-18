import React from 'react';


export const metadata = {
  title: "cold",
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
          src="/minato/Welcome.png"
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
          <div style={{ color: "white", fontSize: "0.95rem" ,
          padding:"10px"
          }}>
            ありがとうありがとう!
            <hr />
            「青い空を見上げれば、心もまた自由になる。」 
            <br/>(Aoi sora o miagereba,
            kokoro mo mata jiyū ni naru.) <br/>“Mavi gökyüzüne baktığında, kalbin
            de özgürleşir.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page