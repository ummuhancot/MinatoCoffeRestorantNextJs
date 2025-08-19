"use client"; //burayı yazmazsak React-Bootstrap bileşenleri çalışmaz, çünkü bu bileşenler istemci tarafında etkileşimli özellikler içerir.
//run time error verir, bu yüzden "use client" ifadesi zorunludur.
/* 
Sunucu tarafı (Server Component): Daha hızlı, daha az JavaScript gönderir.
İstemci tarafı (Client Component): Etkileşimli, tarayıcıya özel kodlar için gereklidir. 
*/
/*
NOTLAR:
- "use client" ifadesi, bu dosyanın istemci tarafında (tarayıcıda) çalışacağını belirtir.
- Next.js'de varsayılan olarak bileşenler sunucu tarafında render edilir.
- Eğer React durum yönetimi, etkileşimli UI veya tarayıcıya özel API'ler kullanacaksan "use client" eklenmelidir.
- Bu dosyada React-Bootstrap gibi etkileşimli bileşenler kullanıldığı için "use client" zorunludur.
- Sunucu tarafı bileşenlerde etkileşimli özellikler çalışmaz; bu yüzden istemci bileşeni olarak işaretlenir.
*/
import { PiBowlSteam } from "react-icons/pi";

import Link from 'next/link';
import React from 'react'
import { Container,  Navbar, Badge } from 'react-bootstrap';
import MainMenuFooter from "./main-menu-footer";
import min from "@/../public/minato/minologo.jpg";
import Image from "next/image";
import UserMenu from "./user-menu";


const Header = () => {
  return (
    <Navbar expand="lg" collapseOnSelect data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="/" as={Link} className="d-flex align-items-center ">
          <Image
            src={min}
            alt="minato"
            width="150"
            height="200"
            className="d-inline-block align-top me-5 "
            style={{ borderRadius: "50%" }}
          />
          <Badge
            bg="warning"
            text="dark"
            className="me-2 py-1 px-2 d-flex align-items-center sarı productsHeader"
            style={{ fontWeight: "bold", fontSize: "2rem" }}
          >
            AO 青
          </Badge>
          <Badge
            bg="dark"
            className="d-flex align-items-center  "
            style={{ borderRadius: "8px", padding: "4px" }}
          >
            <PiBowlSteam color="#ffeb3b" size={30} />
          </Badge>
        </Navbar.Brand>
        <Navbar.Toggle
          className="bg-warning-subtle "
          style={{ borderRadius: "8px", padding: "4px", color: "#eca516ff" }}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse
          className="collapse arning-subtle"
          id="basic-navbar-nav"
        >
          <MainMenuFooter />
        <UserMenu/>

        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header