"use client";

import Link from "next/link";
import React, { useState } from "react";
import { Container, Nav, Navbar, Offcanvas, Button } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";

const DashboardMenu = ({ children }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Navbar expand="lg" className="bg-warning mb-3">
      <Container fluid>
        {/* Marka */}
        <Navbar.Brand
          as={Link}
          href="/dashboard"
          className="productsHeader"
          style={{ fontSize: "50px" }}
        >
          AO 青
        </Navbar.Brand>

        {/* Toggle butonu */}
        <Button variant="outline-dark" onClick={handleShow} className="swiper">
          Menü
        </Button>

        {/* Offcanvas */}
        <Offcanvas show={show} onHide={handleClose} placement="end">
          <Offcanvas.Header closeButton>
            <Offcanvas.Title className="swiper">MENU</Offcanvas.Title>
          </Offcanvas.Header>

          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 swiper">
              {menuItems.map((item) => (
                <Nav.Link
                  key={item.id}
                  as={Link}
                  href={item.url}
                  onClick={handleClose} // Menü tıklayınca kapat
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            {children}
          </Offcanvas.Body>
        </Offcanvas>
      </Container>
    </Navbar>
  );
};

export default DashboardMenu;
