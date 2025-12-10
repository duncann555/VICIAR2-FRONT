import { useNavigate } from "react-router-dom";
import "../../styles/Error404.css";
import error404 from "../../assets/error404.gif"; // cambiá el nombre según tu archivo

export default function Error404() {
  const navigate = useNavigate();

  const irAlInicio = () => navigate("/", { replace: true });
  const irAtras = () => navigate(-1);

  return (
    <section className="error404-wrapper">
      <div className="error404-card">
        <div className="error404-gif-wrapper">
          <img
            src={error404}
            alt="Joystick roto - Error 404"
            className="error404-gif"
          />
        </div>

        <p className="error404-code">404</p>

        <h1 className="error404-title">Página no encontrada</h1>

        <p className="error404-text">
          El enlace puede estar roto, el contenido ya no existe o la dirección
          se escribió mal. 
        </p>
        <p>Volvé al inicio o regresá a la pantalla anterior para
          seguir</p>

        <div className="error404-actions">
          <button className="error404-btn primary" onClick={irAlInicio}>
            Volver al inicio
          </button>
          <button className="error404-btn secondary" onClick={irAtras}>
            Volver atrás
          </button>
        </div>
      </div>
    </section>
  );
}
