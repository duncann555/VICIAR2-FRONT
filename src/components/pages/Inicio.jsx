import { useMemo, useState } from "react";
import {
  Container,
  Row,
  Col,
  Form,
  Card,
  Button,
  Carousel,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";

// IMÁGENES CARRUSEL PRINCIPAL
import banner1 from "../../assets/banner1.png";
import banner2 from "../../assets/banner2.png";
import banner3 from "../../assets/banner3.png";

// IMÁGENES CARRUSEL OFERTAS
import oferta1 from "../../assets/oferta1.png";
import oferta2 from "../../assets/oferta2.png";
import oferta3 from "../../assets/oferta3.png";

// ===============================
//  CATEGORÍAS FINALES (TU LISTA)
// ===============================
const categoriasMock = [
  { id: 1, nombre: "Nintendo" },
  { id: 2, nombre: "PlayStation" },
  { id: 3, nombre: "XBOX" },
  { id: 4, nombre: "SEGA" },
  { id: 5, nombre: "PC" },
];

const IMG = (text) =>
  `https://placehold.co/800x800/png?text=${encodeURIComponent(text)}`;

// ===============================
//  PRODUCTOS MOCK
// ===============================
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

// ===============================
//  BannerCategoria (interno)
// ===============================
function BannerCategoria({ texto, tipo }) {
  return (
    <div className={`categoria-banner contenedorCat ${tipo || ""}`}>
      <h2 className="tituloCat">{texto}</h2>
    </div>
  );
}

// ===============================
//  CardProducto (interno)
// ===============================
const FALLBACK_IMG = IMG("ViciAR");

function CardProducto({ producto }) {
  const navigate = useNavigate();
  const { id, nombreProducto, precio, imagen, categoria } = producto;

  const formatearPrecio = (v) =>
    v.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const handleImgError = (e) => {
    e.currentTarget.src = FALLBACK_IMG;
  };

  return (
    <Card className="producto-card h-100">
      <div className="producto-img-wrapper">
        <Card.Img
          src={imagen}
          alt={nombreProducto}
          className="producto-img"
          onError={handleImgError}
        />
        <span className="producto-categoria-badge">{categoria}</span>
      </div>

      <Card.Body className="d-flex flex-column">
        <Card.Title className="producto-titulo">{nombreProducto}</Card.Title>

        <div className="mt-2 mb-3">
          <span className="producto-precio">{formatearPrecio(precio)}</span>
        </div>

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

// ===============================
//  CarruselPrincipal (interno)
// ===============================
function CarruselPrincipal() {
  return (
    <div className="carousel-wrapper">
      <Carousel fade indicators className="main-carousel">
        <Carousel.Item>
          <img className="carousel-img" src={banner1} alt="banner 1" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner2} alt="banner 2" />
        </Carousel.Item>
        <Carousel.Item>
          <img className="carousel-img" src={banner3} alt="banner 3" />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}


// ===============================
//  CarruselOfertas (interno)
// ===============================
function CarruselOfertas() {
  return (
    <Carousel interval={3000}>
      <Carousel.Item>
        <img className="imagen-ofertas" src={oferta1} alt="oferta 1" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="imagen-ofertas" src={oferta2} alt="oferta 2" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="imagen-ofertas" src={oferta3} alt="oferta 3" />
      </Carousel.Item>
    </Carousel>
  );
}

// ===============================
//  COMPONENTE PRINCIPAL: Inicio
// ===============================
export default function Inicio() {
  const [categoriaFiltro, setCategoriaFiltro] = useState("todas");
  const [busqueda, setBusqueda] = useState("");

  const productos = productosMock;
  const categorias = categoriasMock;

  // ---------------------------
  // Banner color por categoría
  // ---------------------------
  const tipoPorCategoria = {
    Nintendo: "categoria-nintendo",
    PlayStation: "categoria-playstation",
    XBOX: "categoria-xbox",
    SEGA: "categoria-sega",
    PC: "categoria-pc",
  };

  // ---------------------------
  // Más vendido por categoría
  // ---------------------------
  const masVendidoPorCategoria = useMemo(() => {
    const map = {};

    categorias.forEach((c) => {
      const lista = productos.filter((p) => p.categoria === c.nombre);

      if (lista.length > 0) {
        const top = [...lista].sort(
          (a, b) => (b.ventas ?? 0) - (a.ventas ?? 0)
        )[0];

        map[c.nombre] = top;
      }
    });

    return map;
  }, [categorias, productos]);

  // ---------------------------
  // Ofertas
  // ---------------------------
  const productosOferta = useMemo(
    () => productos.filter((p) => p.oferta),
    [productos]
  );

  // ---------------------------
  // Filtrado por nombre + categoría
  // - nombreProducto
  // - y además permite buscar por texto de categoría
  // ---------------------------
  const termino = busqueda.trim().toLowerCase();

  const productosFiltrados = useMemo(() => {
    return productos.filter((p) => {
      const matchCat =
        categoriaFiltro === "todas" || p.categoria === categoriaFiltro;

      if (!termino) return matchCat;

      const matchText =
        p.nombreProducto.toLowerCase().includes(termino) ||
        p.categoria.toLowerCase().includes(termino);

      return matchCat && matchText;
    });
  }, [productos, categoriaFiltro, termino]);

  // ---------------------------
  // Modo Home vs Modo Resultados
  // ---------------------------
  const hayFiltros =
    categoriaFiltro !== "todas" || busqueda.trim() !== "";

  const tituloResultados =
    categoriaFiltro === "todas"
      ? "Resultados de búsqueda"
      : `Resultados en ${categoriaFiltro}`;

  const tipoBannerResultados =
    categoriaFiltro === "todas" ? "" : tipoPorCategoria[categoriaFiltro] || "";

  const limpiarFiltros = () => {
    setCategoriaFiltro("todas");
    setBusqueda("");
  };

  return (
    <div className="inicio-wrapper">
      {/* CARRUSEL PRINCIPAL */}
      <CarruselPrincipal />

      <Container className="inicio-container py-4">
        {/* HERO */}
        <header className="text-center mb-5">
          <h1 className="fw-bold inicio-hero-title">
            Bienvenidos a <span className="texto-resaltado">ViciAR</span>
          </h1>
          <h5 className="inicio-hero-subtitle mt-3">
            El lugar donde los gamers vienen por juegos...
            <br />y se quedan por la experiencia.
          </h5>
        </header>

        {/* BUSCADOR + FILTRO CATEGORÍA */}
        <Row className="align-items-center g-3 mb-4">
          <Col xs={12} md={7} lg={8}>
            <div className="position-relative">
              <i className="bi bi-search buscador-icono"></i>
              <Form.Control
                placeholder="Buscar por nombre o categoría..."
                value={busqueda}
                onChange={(e) => setBusqueda(e.target.value)}
                className="ps-5 buscador-input"
              />
            </div>
          </Col>

          <Col xs={12} md={5} lg={4}>
            <div className="filtro-categoria-wrapper">
              <Form.Select
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
                className="filtro-categoria"
              >
                <option value="todas">Todas</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.nombre}>
                    {cat.nombre}
                  </option>
                ))}
              </Form.Select>
              <i className="bi bi-chevron-down filtro-categoria-flecha"></i>
            </div>
          </Col>

          {hayFiltros && (
            <Col xs={12}>
              <div className="d-flex justify-content-end">
                <Button
                  variant="outline-secondary"
                  size="sm"
                  onClick={limpiarFiltros}
                >
                  Limpiar filtros
                </Button>
              </div>
            </Col>
          )}
        </Row>

        {/* ============================== */}
        {/* MODO RESULTADOS (cuando filtra)*/}
        {/* ============================== */}
        {hayFiltros ? (
          <>
            <div className="mb-4 d-flex justify-content-start">
              <BannerCategoria texto={tituloResultados} tipo={tipoBannerResultados} />
            </div>

            <Row className="g-4 mb-5">
              {productosFiltrados.length > 0 ? (
                productosFiltrados.map((prod) => (
                  <Col xs={12} sm={6} md={4} lg={3} key={prod.id}>
                    <CardProducto producto={prod} />
                  </Col>
                ))
              ) : (
                <Col xs={12} className="text-center py-5">
                  <h5 className="text-muted">No hay resultados con esos filtros.</h5>
                </Col>
              )}
            </Row>
          </>
        ) : (
          <>
            {/* ============================== */}
            {/* HOME CURADO                     */}
            {/* ============================== */}

            {/* MÁS VENDIDOS POR CATEGORÍA */}
            {categorias.map((cat) => {
              const prodTop = masVendidoPorCategoria[cat.nombre];
              const tipo = tipoPorCategoria[cat.nombre] || "";

              return (
                <section key={cat.id} className="mb-5">
                  <div className="mb-4 d-flex justify-content-center">
                    <BannerCategoria texto={`Más vendido de ${cat.nombre}`} tipo={tipo} />
                  </div>

                  <Row className="g-4">
                    {prodTop ? (
                      <Col xs={12} sm={6} md={4} lg={3}>
                        <CardProducto producto={prodTop} />
                      </Col>
                    ) : (
                      <Col xs={12}>
                        <div className="text-start py-3">
                          <h6 className="text-muted m-0">
                            Todavía no hay productos en {cat.nombre}.
                          </h6>
                        </div>
                      </Col>
                    )}
                  </Row>
                </section>
              );
            })}

            {/* OFERTAS */}
            <section className="mb-5">
              <div className="mb-4 d-flex justify-content-center">
                <BannerCategoria texto="Ofertas" />
              </div>

              <div className="mb-4">
                <CarruselOfertas />
              </div>

              <Row className="g-4">
                {productosOferta.length > 0 ? (
                  productosOferta.map((prod) => (
                    <Col xs={12} sm={6} md={4} lg={3} key={prod.id}>
                      <CardProducto producto={prod} />
                    </Col>
                  ))
                ) : (
                  <Col xs={12}>
                    <div className="text-start py-3">
                      <h6 className="text-muted m-0">No hay ofertas activas.</h6>
                    </div>
                  </Col>
                )}
              </Row>
            </section>
          </>
        )}
      </Container>
    </div>
  );
}
