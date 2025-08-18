import { wait } from '@/helpers/functions';
import React from 'react'

export const metadata = {

  title:"classic",
  description: "coffe of AO 青",

}


const page = async () => {
//burda function kısmının wait ini carıp calıştırdım
  await wait(1000)

  return (
    <div className="mt-5 mb-5 d-flex flex-column align-items-center justify-content-center text-center color-white">
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
          src="/minato/MinatoWelcome.jpeg"
          alt="Welcome"
          style={{
            width: "150px",
            height: "150px",
            borderRadius: "50%",
            objectFit: "cover",
            border: "2px solid #FFD600",
          }}
        />
        <div>
          <div
            style={{ fontWeight: "bold", fontSize: "1.2rem", color: "white" }}
          >
            港
          </div>
          <div style={{ color: "#666", fontSize: "0.95rem", color: "white" }}>
            ありがとうありがとう! <hr />
            「青い海は、静けさの中に力を隠している。」<br/> (Aoi umi wa, shizukesa no
            naka ni chikara o kakushite iru.) <br/> “Mavi deniz, sessizliğin içinde
            gücünü saklar.”
          </div>
        </div>
      </div>
    </div>
  );
}

export default page