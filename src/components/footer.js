"use client";
import React from "react";
import {  PiInstagramLogo } from "react-icons/pi";
import { PiFacebookLogo } from "react-icons/pi";
import { PiTelegramLogo } from "react-icons/pi";
import { PiWhatsappLogo } from "react-icons/pi";
import MainMenuFooter from "./main-menu-footer";


const Footer = () => {
  return (
    <footer
      className="p-5 mt-5"
      style={{
        color: "#ffeb3b",
        padding: "20px ",
        textAlign: "center",
      }}
    >
      <MainMenuFooter className="d-flex justify-content-center " />
      <span
        className="instagram-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#ffeb3b",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 10px 20px rgba(221, 0, 255, 0.72)",
        }}
        onClick={() =>
          window.open("https://instagram.com/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#E1306C")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffeb3b")}
      >
        <PiInstagramLogo size={32} />
      </span>
      <span
        className="facebook-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#ffeb3b",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 15px 20px rgba(4, 0, 255, 0.72)",
        }}
        onClick={() =>
          window.open("https://facebook.com/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#1877F3")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffeb3b")}
      >
        <PiFacebookLogo size={32} />
      </span>
      <span
        className="telegram-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#ffeb3b",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 15px 20px rgba(0, 200, 255, 0.72)",
        }}
        onClick={() =>
          window.open("https://t.me/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#229ED9")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffeb3b")}
      >
        <PiTelegramLogo size={32} />
      </span>
      <span
        className="whatsapp-link"
        style={{
          display: "inline-block",
          marginRight: "8px",
          transition: "color 0.2s",
          color: "#ffeb3b",
          cursor: "pointer",
          borderRadius: "8px",
          boxShadow: "0 10px 20px rgba(0, 255, 47, 0.72)",
        }}
        onClick={() =>
          window.open("https://wa.me/", "_blank", "noopener,noreferrer")
        }
        onMouseEnter={(e) => (e.currentTarget.style.color = "#25D366")}
        onMouseLeave={(e) => (e.currentTarget.style.color = "#ffeb3b")}
      >
        <PiWhatsappLogo size={30} />
      </span>
      &copy; {new Date().getFullYear()} AO [青]. bizi takip edebilirsiniz.
    </footer>
  );
};

export default Footer;
