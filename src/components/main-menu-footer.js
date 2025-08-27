"use client";
import React from 'react'
import { Nav } from 'react-bootstrap'
import metuItems from "@/helpers/data/main-menu.json";
import Link from 'next/link';
import { Linker } from './linker';

const MainMenuFooter= (props) => {
  return (
    <Nav className="me-auto" {...props}>
      {metuItems.map((item) => (
        <Linker
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",            borderRadius: "8px",
            backgroundColor: "rgba(206, 246, 247, 0.6)",
            padding: "16px 32px",
            color: "black",
            position: "relative",
            zIndex: 1,
            fontSize: "15px",
            maxWidth: "90%",
            boxShadow: "0 4px 20px rgba(140, 113, 61, 0.28)",
            fontWeight: "600",
            margin: "2px ",
            textTransform: "uppercase",
            textDecoration: "none",
            border: "2px solid rgba(0, 0, 0, 0.1)",
            transition: "background-color 0.3s ease, transform 0.3s ease",
            fontFamily: "Rock Salt",
          }}
          href={item.url}
          key={item.id}
          prefettch={item.prefettch}
          as={Link}
        >
          {item.title}
        </Linker>
      ))}
    </Nav>
  );
}

export default MainMenuFooter