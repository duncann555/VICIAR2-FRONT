import { useMemo } from "react";
import { Container, Row, Col, Card, Button, Carousel } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// CARRUSEL PRINCIPAL
import banner1 from "../../assets/banner1.jpg";
import banner2 from "../../assets/banner2.jpg";
import banner3 from "../../assets/banner3.jpg";
import banner4 from "../../assets/banner4.jpg";
import banner5 from "../../assets/banner5.jpg";
import banner6 from "../../assets/banner6.jpg";

// CARRUSEL OFERTAS
import oferta1 from "../../assets/oferta1.jpg";
import oferta2 from "../../assets/oferta2.jpg";
import oferta3 from "../../assets/oferta3.avif";
import oferta4 from "../../assets/oferta4.webp";


// ===================================
// CATEGORÍAS
// ===================================
const categoriasMock = [
  { id: 1, nombre: "Nintendo" },
  { id: 2, nombre: "PlayStation" },
  { id: 3, nombre: "XBOX" },
  { id: 4, nombre: "SEGA" },
  { id: 5, nombre: "PC" },
];

const IMG = (text) =>
  `https://placehold.co/800x800/png?text=${encodeURIComponent(text)}`;

// ===================================
// PRODUCTOS MOCK COMPLETOS
// ===================================
const productosMock = [
  {
    id: 1,
    nombreProducto: "The Legend of Zelda: Tears of the Kingdom",
    precio: 115000,
    imagen: IMG("Nintendo - Zelda TOTK"),
    categoria: "Nintendo",
    ventas: 120,
    oferta: true,
  },
  {
    id: 2,
    nombreProducto: "Super Mario Odyssey",
    precio: 89000,
    imagen: IMG("Nintendo - Super Mario Odyssey"),
    categoria: "Nintendo",
    ventas: 90,
    oferta: false,
  },
  {
    id: 3,
    nombreProducto: "Resident Evil 2 (PS1)",
    precio: 65000,
    imagen: IMG("PlayStation - RE2 (PS1)"),
    categoria: "PlayStation",
    ventas: 60,
    oferta: true,
  },
  {
    id: 4,
    nombreProducto: "God of War II (PS2)",
    precio: 78000,
    imagen: IMG("PlayStation - GOW II (PS2)"),
    categoria: "PlayStation",
    ventas: 75,
    oferta: false,
  },
  {
    id: 5,
    nombreProducto: "The Last of Us (PS3)",
    precio: 90000,
    imagen: IMG("PlayStation - TLOU (PS3)"),
    categoria: "PlayStation",
    ventas: 110,
    oferta: false,
  },
  {
    id: 6,
    nombreProducto: "God of War (PS4)",
    precio: 115000,
    imagen: IMG("PlayStation - GOW (PS4)"),
    categoria: "PlayStation",
    ventas: 130,
    oferta: true,
  },
  {
    id: 7,
    nombreProducto: "PlayStation 5 Slim 1TB",
    precio: 1350000,
    imagen: IMG("PlayStation - PS5 Slim 1TB"),
    categoria: "PlayStation",
    ventas: 200,
    oferta: false,
  },
  {
    id: 8,
    nombreProducto: "Xbox Series X 1TB",
    precio: 1290000,
    imagen: IMG("XBOX - Series X 1TB"),
    categoria: "XBOX",
    ventas: 160,
    oferta: false,
  },
  {
    id: 9,
    nombreProducto: "Halo Infinite",
    precio: 98000,
    imagen: IMG("XBOX - Halo Infinite"),
    categoria: "XBOX",
    ventas: 70,
    oferta: true,
  },
  {
    id: 10,
    nombreProducto: "SEGA Genesis Mini",
    precio: 190000,
    imagen: IMG("SEGA - Genesis Mini"),
    categoria: "SEGA",
    ventas: 50,
    oferta: true,
  },
  {
    id: 11,
    nombreProducto: "PC Gamer Ryzen 7 + RTX 4060 Ti",
    precio: 2200000,
    imagen: IMG("PC - Ryzen 7 + RTX 4060 Ti"),
    categoria: "PC",
    ventas: 140,
    oferta: false,
  },
];

// ===================================
// BannerCategoria
// ===================================
function BannerCategoria({ texto, tipo }) {
  return (
    <div className={`categoria-banner contenedorCat ${tipo || ""}`}>
      <h2 className="tituloCat">{texto}</h2>
    </div>
  );
}

// ===================================
// CardProducto
// ===================================
function CardProducto({ producto }) {
  const navigate = useNavigate();
  const { id, nombreProducto, precio, imagen, categoria, oferta } = producto;

  const formatearPrecio = (v) =>
    v.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  return (
    <Card className="producto-card h-100">
      <div className="producto-img-wrapper">
        {/* BADGE DE OFERTA */}
        {oferta && <span className="badge-oferta">OFERTA</span>}

        <Card.Img src={imagen} alt={nombreProducto} className="producto-img" />
        <span className="producto-categoria-badge">{categoria}</span>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title>{nombreProducto}</Card.Title>

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

// ===================================
// CarruselPrincipal
// ===================================
function CarruselPrincipal() {
  return (
    <div className="carousel-wrapper">
      <Carousel fade indicators className="main-carousel">
        <Carousel.Item>
          <img className="carousel-img" src={banner1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner3} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner4} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner5} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner6} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


// ===================================
// CarruselOfertas
// ===================================
function CarruselOfertas() {
  return (
    <div className="carousel-wrapper-ofertas">
      <Carousel interval={3000} className="main-carousel-ofertas">
        <Carousel.Item>
          <img className="carousel-img-ofertas" src={oferta1} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img-ofertas" src={oferta2} />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img-ofertas" src={oferta3} />
        </Carousel.Item>
                <Carousel.Item>
          <img className="carousel-img-ofertas" src={oferta4} />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


// ===================================
// COMPONENTE PRINCIPAL
// ===================================
export default function Inicio() {
  const productos = productosMock;
  const categorias = categoriasMock;

  const tipoPorCategoria = {
    Nintendo: "categoria-nintendo",
    PlayStation: "categoria-playstation",
    XBOX: "categoria-xbox",
    SEGA: "categoria-sega",
    PC: "categoria-pc",
  };

  const masVendidoPorCategoria = useMemo(() => {
    const map = {};
    categorias.forEach((c) => {
      const lista = productos.filter((p) => p.categoria === c.nombre);
      if (lista.length > 0) {
        map[c.nombre] = [...lista].sort((a, b) => b.ventas - a.ventas)[0];
      }
    });
    return map;
  }, [categorias, productos]);

  const productosOferta = productos.filter((p) => p.oferta);

  return (
    <div className="inicio-wrapper">
      <CarruselPrincipal />

      <Container className="inicio-container py-4">
        <header className="text-center mb-5">
          <h1 className="fw-bold inicio-hero-title">
            Bienvenidos a <span className="texto-resaltado">ViciAR</span>
          </h1>
          <h5 className="inicio-hero-subtitle mt-3">
            El lugar donde los gamers vienen por juegos...
            <br />y se quedan por la experiencia.
          </h5>
        </header>

        {/* ====================================== */}
        {/* MÁS VENDIDOS POR CATEGORÍA */}
        {/* ====================================== */}
        {categorias.map((cat) => {
          const prodTop = masVendidoPorCategoria[cat.nombre];
          const tipo = tipoPorCategoria[cat.nombre] || "";

          return (
            <section key={cat.id} className="mb-5">
              <div className="mb-4 d-flex justify-content-center">
                <BannerCategoria
                  texto={`Más vendido de ${cat.nombre}`}
                  tipo={tipo}
                />
              </div>

              <Row className="g-4">
                {prodTop ? (
                  <Col xs={12} sm={6} md={4} lg={3}>
                    <CardProducto producto={prodTop} />
                  </Col>
                ) : (
                  <Col xs={12}>
                    <h6 className="text-muted">
                      Todavía no hay productos en {cat.nombre}.
                    </h6>
                  </Col>
                )}
              </Row>
            </section>
          );
        })}
      </Container>

      {/* OFERTAS */}
      <div className="mb-4">
        <CarruselOfertas />
      </div>
      
      {/* BENEFICIOS */}
      <section className="beneficios-wrapper">
        <Container>
          <Row className="beneficios-row">
            <Col xs={12} md={4} className="beneficio-item">
              <i className="bi bi-credit-card-2-back beneficio-icono"></i>
              <div>
                <h6 className="beneficio-titulo">Hasta 24 cuotas</h6>
                <p className="beneficio-texto">
                  abonando con tarjetas de crédito
                </p>
              </div>
            </Col>

            <Col xs={12} md={4} className="beneficio-item">
              <i className="bi bi-truck beneficio-icono"></i>
              <div>
                <h6 className="beneficio-titulo">Envíos a todo el país</h6>
                <p className="beneficio-texto">a través de OCA</p>
              </div>
            </Col>

            <Col xs={12} md={4} className="beneficio-item">
              <i className="bi bi-shield-check beneficio-icono"></i>
              <div>
                <h6 className="beneficio-titulo">Garantía oficial</h6>
                <p className="beneficio-texto">
                  hasta 36 meses en todos los productos
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      <Container className="inicio-container py-4">
        {/* ====================================== */}
        {/* OFERTAS */}
        {/* ====================================== */}
        <section className="mb-5">
          <div className="mb-4 d-flex justify-content-center">
            <BannerCategoria texto="Ofertas" />
          </div>

          <Row className="g-4">
            {productosOferta.map((prod) => (
              <Col xs={12} sm={6} md={4} lg={3} key={prod.id}>
                <CardProducto producto={prod} />
              </Col>
            ))}
          </Row>
        </section>
      </Container>
    </div>
  );
}
