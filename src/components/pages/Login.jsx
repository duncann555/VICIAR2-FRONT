import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "../../styles/menu.css";
import logoS2 from "../../assets/logoS2.png";

import { useEffect, useState } from "react";
import ModalLogin from "./Login";
import Button from "react-bootstrap/Button";

function Menu() {
  const [showLogin, setShowLogin] = useState(false);
  const [usuario, setUsuario] = useState(null);

  // Cargar usuario de localStorage al iniciar
  useEffect(() => {
    const data = localStorage.getItem("usuario");
    if (data) setUsuario(JSON.parse(data));
  }, []);

  // Cerrar sesión
  const handleLogout = () => {
    localStorage.removeItem("usuario");
    setUsuario(null);
  };

  const getNavLinkClass = ({ isActive }) =>
    `nav-link opcion-nav fw-bold ${isActive ? "active" : ""}`;

  const handleSearchSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <>
      <Navbar expand="lg" className="navbar-bg-color py-lg-3 py-md-2" sticky="top">
        <Container className="position-relative">
          {/* Logo */}
          <Navbar.Brand as={NavLink} to="/" className="pb-2">
            <img src={logoS2} alt="Logo" className="img-navbar" />
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />

          <Navbar.Collapse id="basic-navbar-nav">
            {/* Buscador */}
            <div className="d-flex flex-grow-1 justify-content-center my-2 my-lg-0">
              <form
                className="d-flex flex-grow-1 flex-lg-row ms-lg-auto me-lg-4"
                onSubmit={handleSearchSubmit}
              >
                <input
                  type="search"
                  placeholder="Buscar productos..."
                  className="form-control me-lg-2 barra-busqueda barra-small"
                  aria-label="Buscar"
                />
              </form>
            </div>

            {/* Navegación */}
            <Nav className="ms-auto text-center align-items-lg-center">
              <NavLink to="/" className={getNavLinkClass}>
                Inicio
              </NavLink>

              {/* SOLO ADMINISTRADOR VE ESTO */}
              {usuario?.rol === "Administrador" && (
                <NavLink to="/admin" className={getNavLinkClass}>
                  Admin
                </NavLink>
              )}

              <NavLink to="/nosotros" className={getNavLinkClass}>
                Nosotros
              </NavLink>

              <NavLink to="/contacto" className={getNavLinkClass}>
                Contacto
              </NavLink>

              <NavLink to="/galeria" className={getNavLinkClass}>
                Galería
              </NavLink>

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

              {/* 🔥 SI NO ESTÁ LOGUEADO → Mostrar botón "Ingresar" */}
              {!usuario && (
                <button
                  type="button"
                  className="nav-link opcion-nav fw-bold border-0 bg-transparent d-flex align-items-center justify-content-center"
                  style={{ cursor: "pointer" }}
                  onClick={() => setShowLogin(true)}
                >
                  <i className="bi bi-person-circle icono-user me-1"></i>
                  <span className="d-none d-lg-inline">Ingresar</span>
                </button>
              )}

              {/* 🔥 SI ESTÁ LOGUEADO → Mostrar usuario + botón salir */}
              {usuario && (
                <div className="d-flex align-items-center ms-3">
                  <span className="fw-bold me-2">{usuario.nombre}</span>

                  <Button
                    variant="outline-light"
                    size="sm"
                    onClick={handleLogout}
                  >
                    Cerrar sesión
                  </Button>
                </div>
              )}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MODAL LOGIN */}
      <ModalLogin
        show={showLogin}
        handleClose={() => setShowLogin(false)}
        onLoginSuccess={(usuarioLogueado) => {
          setUsuario(usuarioLogueado);
          setShowLogin(false);
        }}
      />

    </>
  );
}

export default Menu;
