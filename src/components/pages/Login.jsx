import { useState } from "react";
import "../../styles/login.css";

export default function ModalLogin({ show, onClose }) {
  if (!show) return null;

  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");
  const [remember, setRemember] = useState(false);
  const [error, setError] = useState("");
  const [shake, setShake] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (!user || !pass) {
      setError("Completa todos los campos.");
      triggerShake();
      return;
    }

    if (user !== "admin" || pass !== "1234") {
      setError("Usuario o contraseña incorrectos.");
      triggerShake();
      return;
    }

    setError("");
    alert("Login exitoso ✔");
    onClose();
  };

  const triggerShake = () => {
    setShake(true);
    setTimeout(() => setShake(false), 500);
  };

  return (
    <div className="ml-overlay" onClick={onClose}>
      <div
        className={`ml-modal ${shake ? "shake" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* CERRAR */}
        <button className="ml-close" onClick={onClose}>
          ✕
        </button>

        {/* CHIP MARCA */}
        <div className="ml-chip">ViciAR</div>

        {/* TITULOS */}
        <h2 className="ml-title">
          Iniciar sesión <span className="texto-resaltado">gamer</span>
        </h2>
        <p className="ml-subtitle">
          Entrá a tu cuenta y seguí viciando tranquilo 🎮
        </p>

        {/* FORM */}
        <form onSubmit={handleLogin} noValidate>
          <div className="ml-field-group">
            <label className="ml-label">Usuario</label>
            <input
              type="text"
              className="ml-input big"
              placeholder="Tu usuario"
              value={user}
              onChange={(e) => setUser(e.target.value)}
            />
          </div>

          <div className="ml-field-group">
            <label className="ml-label">Contraseña</label>
            <input
              type="password"
              className="ml-input big"
              placeholder="Tu contraseña"
              value={pass}
              onChange={(e) => setPass(e.target.value)}
            />
          </div>

          <div className="ml-remember-row">
            <label className="ml-remember">
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
              />
              Recordarme en este equipo
            </label>

            <button
              type="button"
              className="ml-forgot-btn"
              onClick={() => alert("Función de recuperar contraseña pendiente")}
            >
              ¿Olvidaste tu contraseña?
            </button>
          </div>

          {error && <p className="ml-error">{error}</p>}

          <div className="ml-btn-row">
            <button type="submit" className="ml-btn-primary">
              Ingresar
            </button>
          </div>
        </form>

        {/* DIVISOR */}
        <div className="ml-divider">
          <span>o ingresá con tus redes</span>
        </div>

        {/* SOCIAL */}
        <button className="ml-social google">
          <i className="bi bi-google" />
          Continuar con Google
        </button>

        <button className="ml-social facebook">
          <i className="bi bi-facebook" />
          Continuar con Facebook
        </button>

        {/* REGISTRO */}
        <p className="ml-register">
          ¿No tenés cuenta? <a href="/register">Registrate acá</a>
        </p>
      </div>
    </div>
  );
}
