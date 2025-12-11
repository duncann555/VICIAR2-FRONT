import "../../styles/footer.css";
import { Link } from "react-router-dom";
import LOGO from "../../assets/LOGO.png";

const Footer = () => {
  return (
    <footer className="footer-container mt-auto pt-4 pb-3">

      {/* Top Line */}
      <div className="footer-top-line"></div>

      <div className="container footer-content py-3">

        {/* LOGO + INFO */}
        <div className="col-12 col-md-4 mb-4 mb-md-0 footer-section">
          <img src={LOGO} alt="Viciar logo" className="footer-logo mb-2" />
          <p className="text-muted small">
            La tienda gamer que te entiende.  
            Hardware • Consolas • Juegos • Accesorios
          </p>
        </div>

        {/* SECCIONES */}
        <div className="col-12 col-md-4 mb-4 mb-md-0 footer-section">
          <h5 className="footer-title">Secciones</h5>

          <Link to="/nosotros" className="footer-link">Nosotros</Link>
          <Link to="/contacto" className="footer-link">Contacto</Link>
          <Link to="/galeria" className="footer-link">Galería</Link>
          <Link to="/preguntas-frecuentes" className="footer-link">Preguntas Frecuentes</Link>
          <Link to="/terminos" className="footer-link">Términos & Condiciones</Link>
        </div>

        {/* CONTACTO + REDES */}
        <div className="col-12 col-md-4 footer-section">
          <h5 className="footer-title">Contacto</h5>

          <p className="footer-contact">
            <i className="bi bi-whatsapp me-2 text-orange"></i> +54 3456 6734560
          </p>
          <p className="footer-contact">
            <i className="bi bi-envelope-fill me-2 text-orange"></i> viciar@gmail.com
          </p>
          <p className="footer-contact mb-3">
            <i className="bi bi-geo-alt-fill me-2 text-orange"></i> SMT – YB
          </p>

          <h6 className="footer-title mt-3">Seguinos</h6>
          <div className="footer-socials">
            <a href="#"><i className="bi bi-instagram"></i></a>
            <a href="#"><i className="bi bi-facebook"></i></a>
            <a href="#"><i className="bi bi-tiktok"></i></a>
            <a href="#"><i className="bi bi-youtube"></i></a>
          </div>
        </div>
      </div>

      {/* COPYRIGHT */}
      <div className="footer-bottom text-center mt-3 small">
        © {new Date().getFullYear()} Viciar · Todos los derechos reservados
      </div>
    </footer>
  );
};

export default Footer;
