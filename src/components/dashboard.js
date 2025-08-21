"use client";

import Link from "next/link";
import React from "react";
import { Container, Nav, Navbar, Offcanvas } from "react-bootstrap";
import menuItems from "@/helpers/data/dashboard-menu.json";

const DashboardMenu = ({ children }) => {
  return (
    <Navbar expand="lg" className="bg-warning mb-3">
      <Container fluid>
        <Navbar.Brand
          as={Link}
          href="/dashboard"
          className="productsHeader"
          style={{ fontSize: "50px" }}
        >
          AO 青
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="dashboard-menu" />
        <Navbar.Offcanvas
          id="dashboard-menu"
          aria-labelledby="dashboard-menu-label"
          placement="end"
        >
          <Offcanvas.Header closeButton className="swiper">
            <Offcanvas.Title id="dashboard-menu-label">MENU</Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3 swiper">
              {menuItems.map((item) => (
                <Nav.Link
                  as={Link}
                  href={item.url}
                  key={item.id}
                  prefetch={item.prefetch}
                  className="menu"
                >
                  {item.title}
                </Nav.Link>
              ))}
            </Nav>
            {children}
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default DashboardMenu;
