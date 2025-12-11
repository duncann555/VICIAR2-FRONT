import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import { NavLink } from "react-router-dom";
import "../../styles/menu.css";
import LOGO from "../../assets/LOGO.png";

import { useState } from "react";
import Login from "../pages/Login.jsx";

function Menu() {
  const [showLogin, setShowLogin] = useState(false);

  const getNavLinkClass = ({ isActive }) =>
    `nav-link nav-item-lower ${isActive ? "active-lower" : ""}`;

  return (
    <>
      {/* NAVBAR SUPERIOR */}
      <Navbar expand="lg" className="navbar-modern shadow-sm" sticky="top">
        <Container>
          <div className="row w-100 align-items-center">
            {/* IZQUIERDA — LOGO */}
            <div className="col-3 d-flex align-items-center">
              <Navbar.Brand as={NavLink} to="/" className="navbar-logo me-3">
                <img src={LOGO} alt="Logo" className="img-navbar" />
              </Navbar.Brand>
            </div>

            {/* CENTRO — BUSCADOR */}
            <div className="col-6 d-none d-md-flex justify-content-center">
              <Form className="search-wrapper">
                <i className="bi bi-search search-icon"></i>

                <div className="search-floating">
                  <input
                    type="text"
                    className="search-input"
                    placeholder="Buscar por producto y categoria "
                  />
                  <span className="search-label">Buscar productos</span>
                </div>
              </Form>
            </div>

            {/* DERECHA — CARRITO + LOGIN */}
            <div className="col-3 d-flex justify-content-end align-items-center">
              <button
                className="btn-login-modern"
                onClick={() => setShowLogin(true)}
              >
                <i className="bi bi-person"></i>
                <span className="d-none d-lg-inline ms-1">Ingresar</span>
              </button>

              <NavLink to="/carrito" className="nav-icon-button ms-3">
                <i className="bi bi-cart3"></i>
              </NavLink>
            </div>
          </div>
        </Container>
      </Navbar>

      {/* NAVBAR INFERIOR (links) */}
      <div className="lower-navbar">
        <Container className="d-flex gap-4 justify-content-center">
          <NavLink to="/" className={getNavLinkClass}>
            Inicio
          </NavLink>
          <NavLink to="/productos" className={getNavLinkClass}>
            Productos
          </NavLink>
          <NavLink to="/contacto" className={getNavLinkClass}>
            Consultanos
          </NavLink>
        </Container>
      </div>

      {/* MODAL LOGIN */}
      <Login show={showLogin} onClose={() => setShowLogin(false)} />
    </>
  );
}

export default Menu;
