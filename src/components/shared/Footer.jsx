import "../../styles/footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="container-fluid footer-bg-color text-white mt-auto pt-3 pb-2">
      <div className="row px-3 px-md-5">
        {/* Secciones */}
        <div className="col-12 col-md-4 d-flex flex-column mt-2">
          <h5 className="mb-2">Secciones</h5>
          <Link
            to="/nosotros"
            className="text-white text-decoration-none mt-1 underline-hover"
          >
            Nosotros
          </Link>

          <Link
            to="/contacto"
            className="text-white text-decoration-none mt-3 underline-hover"
          >
            Contacto
          </Link>
          <Link
            to="/galeria"
            className="text-white text-decoration-none mt-3 underline-hover"
          >
            Galería de imágenes
          </Link>
          <Link
            to="/preguntas-frecuentes"
            className="text-white text-decoration-none mt-3 underline-hover"
          >
            Preguntas frecuentes
          </Link>
          <Link
            to="/terminos"
            className="text-white text-decoration-none mt-3 underline-hover"
          >
            Términos y condiciones
          </Link>
        </div>

        {/* Contacto */}
        <div className="col-12 col-md-4 mt-2">
          <h5 className="mb-2">Contactanos</h5>
          <p className="text-white mt-2 mb-1">
            <i className="bi bi-whatsapp me-2"></i>
            +54 3456 6734560
          </p>
          <p className="text-white mb-1">
            <i className="bi bi-envelope-arrow-up-fill me-2"></i>
            vici_ar@gmail.com
          </p>
          <p className="text-white mb-0">
            <i className="bi bi-geo-alt-fill me-2"></i>
            Sucursales en: SMT - YB
          </p>
        </div>

        {/* Redes */}
        <div className="col-12 col-md-4 mt-2">
          <h5 className="mb-2">Sigamos conectados</h5>
          <p className="text-nowrap mb-2">
            Seguinos en nuestras redes sociales
          </p>
          <div className="d-flex redes ms-0 ms-md-4 mb-2">
            <a href="#" className="text-white me-4">
              <i className="bi bi-instagram fs-2"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="bi bi-facebook fs-2"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="bi bi-tiktok fs-2"></i>
            </a>
            <a href="#" className="text-white me-4">
              <i className="bi bi-youtube fs-2"></i>
            </a>
          </div>
        </div>
      </div>

      <p className="text-center mt-3 mb-0 fw-semibold small">
        &copy; ViciAR {new Date().getFullYear()} · Todos los derechos reservados
      </p>
    </footer>
  );
};

export default Footer;
