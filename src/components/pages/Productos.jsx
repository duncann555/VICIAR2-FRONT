import { useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// =================================
// CATEGORÍAS
// =================================
const categoriasMock = [
  { id: 1, nombre: "Nintendo" },
  { id: 2, nombre: "PlayStation" },
  { id: 3, nombre: "XBOX" },
  { id: 4, nombre: "SEGA" },
  { id: 5, nombre: "PC" },
];

const IMG = (text) =>
  `https://placehold.co/800x800/png?text=${encodeURIComponent(text)}`;

// =================================
// PRODUCTOS
// =================================
const productosMock = [
  {
    id: 1,
    nombreProducto: "The Legend of Zelda: TOTK",
    precio: 115000,
    imagen: IMG("Zelda"),
    categoria: "Nintendo",
  },
  {
    id: 2,
    nombreProducto: "Super Mario Odyssey",
    precio: 89000,
    imagen: IMG("Mario"),
    categoria: "Nintendo",
  },

  {
    id: 3,
    nombreProducto: "Resident Evil 2 (PS1)",
    precio: 65000,
    imagen: IMG("RE2"),
    categoria: "PlayStation",
  },
  {
    id: 4,
    nombreProducto: "God of War II (PS2)",
    precio: 78000,
    imagen: IMG("GOW2"),
    categoria: "PlayStation",
  },
  {
    id: 5,
    nombreProducto: "The Last of Us (PS3)",
    precio: 90000,
    imagen: IMG("TLOU"),
    categoria: "PlayStation",
  },
  {
    id: 6,
    nombreProducto: "God of War (PS4)",
    precio: 115000,
    imagen: IMG("GOW PS4"),
    categoria: "PlayStation",
  },
  {
    id: 7,
    nombreProducto: "PlayStation 5 Slim 1TB",
    precio: 1350000,
    imagen: IMG("PS5"),
    categoria: "PlayStation",
  },

  {
    id: 8,
    nombreProducto: "Xbox Series X 1TB",
    precio: 1290000,
    imagen: IMG("Series X"),
    categoria: "XBOX",
  },
  {
    id: 9,
    nombreProducto: "Halo Infinite",
    precio: 98000,
    imagen: IMG("Halo"),
    categoria: "XBOX",
  },

  {
    id: 10,
    nombreProducto: "SEGA Genesis Mini",
    precio: 190000,
    imagen: IMG("SEGA"),
    categoria: "SEGA",
  },

  {
    id: 11,
    nombreProducto: "PC Gamer Ryzen 7 + RTX 4060 Ti",
    precio: 2200000,
    imagen: IMG("PC Gamer"),
    categoria: "PC",
  },
];

// =================================
// UI - Banner categoría
// =================================
function BannerCategoria({ texto, tipo }) {
  return (
    <div className={`categoria-banner contenedorCat ${tipo || ""}`}>
      <h2 className="tituloCat">{texto}</h2>
    </div>
  );
}

// =================================
// UI - Card producto
// =================================
function CardProducto({ producto }) {
  const navigate = useNavigate();
  const { id, nombreProducto, precio, imagen, categoria } = producto;

  const formatearPrecio = (v) =>
    v.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  return (
    <Card className="producto-card h-100">
      <div className="producto-img-wrapper">
        <Card.Img src={imagen} alt={nombreProducto} className="producto-img" />
        <span className="producto-categoria-badge">{categoria}</span>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="producto-titulo">{nombreProducto}</Card.Title>

        <span className="producto-precio mb-3">{formatearPrecio(precio)}</span>

        <Button
          className="w-100 producto-btn mt-auto"
          onClick={() => navigate(`/producto/${id}`)}
        >
          Ver detalle
        </Button>
      </Card.Body>
    </Card>
  );
}

// =================================
// COMPONENTE PRINCIPAL
// =================================
export default function Productos() {
  const [categoriaActiva, setCategoriaActiva] = useState("todas");

  const productos =
    categoriaActiva === "todas"
      ? productosMock
      : productosMock.filter((p) => p.categoria === categoriaActiva);

  const tipoPorCategoria = {
    Nintendo: "categoria-nintendo",
    PlayStation: "categoria-playstation",
    XBOX: "categoria-xbox",
    SEGA: "categoria-sega",
    PC: "categoria-pc",
  };

  return (
    <div className="inicio-wrapper py-4">
      <Container className="inicio-container py-4">
        {/* TITULO */}

        <Row>
          {/* =========================== */}
          {/* SIDEBAR IZQUIERDO          */}
          {/* =========================== */}
          <Col xs={12} md={3} className="mb-4">
            <div className="sidebar-categorias">
              <h5 className="mb-3 fw-bold">Categorías</h5>

              <ul className="lista-categorias">
                <li
                  className={`item-categoria ${
                    categoriaActiva === "todas" ? "activa" : ""
                  }`}
                  onClick={() => setCategoriaActiva("todas")}
                >
                  🔸 Todas
                </li>

                {categoriasMock.map((cat) => (
                  <li
                    key={cat.id}
                    className={`item-categoria ${
                      categoriaActiva === cat.nombre ? "activa" : ""
                    }`}
                    onClick={() => setCategoriaActiva(cat.nombre)}
                  >
                    ▸ {cat.nombre}
                  </li>
                ))}
              </ul>
            </div>
          </Col>

          {/* =========================== */}
          {/* LISTA DE PRODUCTOS          */}
          {/* =========================== */}
          <Col xs={12} md={9}>
            {categoriaActiva !== "todas" && (
              <div className="mb-4">
                <BannerCategoria
                  texto={categoriaActiva}
                  tipo={tipoPorCategoria[categoriaActiva]}
                />
              </div>
            )}

            <Row className="g-4">
              {productos.map((prod) => (
                <Col xs={12} sm={6} md={4} lg={3} key={prod.id}>
                  <CardProducto producto={prod} />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
