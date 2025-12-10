// src/components/pages/Nosotros.jsx
import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import "../../styles/nosotros.css";

// Imagen placeholder local
import PaulaG from "../../assets/pc.png";

const PLACEHOLDER_IMG = PaulaG;

// ✅ Cambiá estos dos por tus links reales si querés
const SEBA_GITHUB = "https://github.com/tu-usuario";
const SEBA_LINKEDIN = "https://www.linkedin.com/in/tu-usuario/";

// Mock del equipo (versión simple)
const miembrosDelEquipo = [
  {
    id: 1,
    nombre: "Seba Flomenbaun",
    imagen: PaulaG, // poné tu imagen cuando quieras
    github: SEBA_GITHUB,
    linkedin: SEBA_LINKEDIN,
  },
];

// ==================================
// CardMiembro interno
// ==================================
function CardMiembro({ nombre, imagen, github, linkedin }) {
  const [error, setError] = useState(false);

  return (
    <Col md={6} lg={4} className="mb-3">
      <Card className="h-100 card-miembro">
        <div className="d-flex justify-content-center align-content-center">
          <img
            src={error ? PLACEHOLDER_IMG : imagen}
            alt={nombre}
            className="card-img-miembro"
            onError={() => setError(true)}
            loading="lazy"
          />
        </div>

        <Card.Body className="card-header w-100">
          <Card.Title className="text-center card-nombre">
            {nombre}
          </Card.Title>

          <div className="card-redes">
            {github && (
              <a href={github} target="_blank" rel="noopener noreferrer">
                <Button className="btn-red">
                  <i className="bi bi-github"></i>
                </Button>
              </a>
            )}

            {linkedin && (
              <a href={linkedin} target="_blank" rel="noopener noreferrer">
                <Button className="btn-red">
                  <i className="bi bi-linkedin"></i>
                </Button>
              </a>
            )}
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

// ==================================
// Página Nosotros
// ==================================
const Nosotros = () => {
  return (
    <Container className="border rounded-4 my-3 contenedor-nosotros">
      <div className="text-center pt-3">
        <h1 className="fw-bold">Conocé a nuestro equipo</h1>
        <p className="fs-5 fw-semibold">
          ¡Bienvenido a ViciAR! Conocé a los desarrolladores de este proyecto.
        </p>
      </div>

      <Row className="py-3 d-flex justify-content-center ms-0">
        {miembrosDelEquipo.map((miembro) => (
          <CardMiembro
            key={miembro.id}
            nombre={miembro.nombre}
            imagen={miembro.imagen}
            github={miembro.github}
            linkedin={miembro.linkedin}
          />
        ))}
      </Row>
    </Container>
  );
};

export default Nosotros;
