import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../../styles/menu.css";
import logoS2 from "../../assets/logoS2.png";

import { useState } from "react";
import Login from "../pages/Login.jsx";

function Menu() {
  const [showLogin, setShowLogin] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    `nav-link opcion-nav fw-bold ${isActive ? "active" : ""}`;

  return (
    <>
      <Navbar
        expand="lg"
        className="navbar-bg-color py-lg-3 py-md-2"
        sticky="top"
      >
        <Container className="position-relative">
          {/* Logo */}
          <Navbar.Brand as={NavLink} to="/" className="pb-2">
            <img src={logoS2} alt="Logo" className="img-navbar" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* 👉 **Buscador removido** */}

            {/* Navegación */}
            <Nav className="ms-auto text-center align-items-lg-center">
              <NavLink to="/" className={getNavLinkClass}>
                Inicio
              </NavLink>

              <NavLink to="/productos" className={getNavLinkClass}>
                Productos
              </NavLink>

              <NavLink to="/nosotros" className={getNavLinkClass}>
                Nosotros
              </NavLink>

              <NavLink to="/contacto" className={getNavLinkClass}>
                Contacto
              </NavLink>

              {/* Carrito */}
              <NavLink
                to="/carrito"
                className={({ isActive }) =>
                  `nav-link opcion-nav fw-bold d-none d-lg-inline ${
                    isActive ? "active" : ""
                  }`
                }
              >
                <i className="bi bi-cart3"></i>
              </NavLink>
              <NavLink to="/admin" className={getNavLinkClass}>
                Administrador
              </NavLink>

              {/* Login */}
              <button
                type="button"
                className="nav-link opcion-nav fw-bold border-0 bg-transparent d-flex align-items-center justify-content-center"
                style={{ cursor: "pointer" }}
                onClick={() => setShowLogin(true)}
              >
                <i className="bi bi-person-circle icono-user me-1"></i>
                <span className="d-none d-lg-inline">Ingresar</span>
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MODAL LOGIN */}
      <Login show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default Menu;
