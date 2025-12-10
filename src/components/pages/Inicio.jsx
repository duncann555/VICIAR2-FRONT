import { useState } from "react";
import CarruselPrincipal from "./inicio/CarruselPrincipal.jsx";
import CardProducto from "./inicio/CardProducto.jsx";
import CarruselOfertas from "./inicio/CarruselOfertas.jsx";
import { Col, Container, Row, Form } from "react-bootstrap";
import "react-multi-carousel/lib/styles.css";

const Inicio = () => {
  const productos = [
    {
      id: 1,
      nombreProducto: "Juego Nintendo Switch 2 Cronos: The New Dawn NSW2",
      precio: 104500,
      imagen:
        "https://nintenduo.com/wp-content/uploads/2025/09/Cronos-analisis-Nintenduo.webp",
      categoria: "Juegos Nintendo",
    },
    {
      id: 2,
      nombreProducto:
        "Consola Nintendo Switch 2 (USA) + Pro Controller 2 - Combo",
      precio: 1247400,
      imagen:
        "https://nextgames.com.ar/img/Public/1040/11964-producto-whatsapp-image-2025-07-30-at-12-22-34-pm.jpeg",
      categoria: "Consolas",
    },
    {
      id: 3,
      nombreProducto: "Juego Nintendo Switch 2 Cronos: The New Dawn NSW2",
      precio: 104500,
      imagen:
        "https://nintenduo.com/wp-content/uploads/2025/09/Cronos-analisis-Nintenduo.webp",
      categoria: "Juegos Nintendo",
    },
    {
      id: 4,
      nombreProducto:
        "Consola Nintendo Switch 2 (USA) + Pro Controller 2 - Combo",
      precio: 1247400,
      imagen:
        "https://nextgames.com.ar/img/Public/1040/11964-producto-whatsapp-image-2025-07-30-at-12-22-34-pm.jpeg",
      categoria: "Consolas",
    },
    {
      id: 5,
      nombreProducto: "Juego Nintendo Switch 2 Cronos: The New Dawn NSW2",
      precio: 104500,
      imagen:
        "https://nintenduo.com/wp-content/uploads/2025/09/Cronos-analisis-Nintenduo.webp",
      categoria: "Juegos Nintendo",
    },
    {
      id: 6,
      nombreProducto:
        "Consola Nintendo Switch 2 (USA) + Pro Controller 2 - Combo",
      precio: 1247400,
      imagen:
        "https://nextgames.com.ar/img/Public/1040/11964-producto-whatsapp-image-2025-07-30-at-12-22-34-pm.jpeg",
      categoria: "Consolas",
    },
    {
      id: 7,
      nombreProducto: "Juego Nintendo Switch 2 Cronos: The New Dawn NSW2",
      precio: 104500,
      imagen:
        "https://nintenduo.com/wp-content/uploads/2025/09/Cronos-analisis-Nintenduo.webp",
      categoria: "Juegos Nintendo",
    },
    {
      id: 8,
      nombreProducto:
        "Consola Nintendo Switch 2 (USA) + Pro Controller 2 - Combo",
      precio: 1247400,
      imagen:
        "https://nextgames.com.ar/img/Public/1040/11964-producto-whatsapp-image-2025-07-30-at-12-22-34-pm.jpeg",
      categoria: "Consolas",
    },
  ];

  const categorias = [
    { id: 1, nombre: "Juegos Nintendo" },
    { id: 2, nombre: "Consolas" },
  ];

  const [categoriaFiltro, setCategoriaFiltro] = useState("todas");

  const productosSeccionNintendo = productos.filter(
    (p) => p.categoria === "Juegos Nintendo"
  );
  const productosSeccionConsolas = productos.filter(
    (p) => p.categoria === "Consolas"
  );

  const productosFiltrados = productos.filter((p) => {
    if (categoriaFiltro === "todas") return true;
    return p.categoria === categoriaFiltro;
  });

  const obtenerClaseCategoria = () => {
    if (categoriaFiltro === "Juegos Nintendo") return "categoria-nintendo";
    if (categoriaFiltro === "Consolas") return "categoria-consolas";
    return "";
  };

  const tituloCategoria =
    categoriaFiltro === "todas" ? "Todos los productos" : categoriaFiltro;

  return (
    <div className="inicio-wrapper">
      <CarruselPrincipal />

      <Container className="inicio-container">
        {/* HERO */}
        <header className="inicio-hero text-center mb-5">
          <h1 className="inicio-hero-title">
            Bienvenidos a <span className="texto-resaltado">ViciAR</span>
          </h1>
          <h5 className="inicio-hero-subtitle">
            No vendemos simples juegos: vendemos las 3 de la mañana con amigos y
            esa sensación de gloria absoluta.
            <br />
            Tu próxima obsesión está a un clic de distancia.
          </h5>
        </header>

        {/* FILTRO POR CATEGORÍA */}
        <section className="inicio-section mb-4">
          <Row className="align-items-end g-3">
            <Col xs={12} md={6}>
              <Form.Label className="fw-semibold mb-1">
                Filtrar por categoría
              </Form.Label>
              <Form.Select
                value={categoriaFiltro}
                onChange={(e) => setCategoriaFiltro(e.target.value)}
              >
                <option value="todas">Todas las categorías</option>
                {categorias.map((cat) => (
                  <option key={cat.id} value={cat.nombre}>
                    {cat.nombre}
                  </option>
                ))}
              </Form.Select>
            </Col>
          </Row>
        </section>

        {categoriaFiltro === "todas" ? (
          <>
            {/* VISTA COMPLETA: JUEGOS NINTENDO + OFERTAS + CONSOLAS */}

            {/* SECCIÓN JUEGOS NINTENDO */}
            <section className="inicio-section mb-5">
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="categoria-banner contenedorCat categoria-nintendo">
                    <h2 className="m-0 fw-bold tituloCat">Juegos Nintendo</h2>
                  </div>
                </Col>
              </Row>

              <Row>
                {productosSeccionNintendo.length > 0 ? (
                  productosSeccionNintendo.map((prod) => (
                    <CardProducto key={prod.id} producto={prod} />
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h4 className="text-muted">
                      No hay stock en Juegos Nintendo
                    </h4>
                  </div>
                )}
              </Row>
            </section>

            {/* CARRUSEL OFERTAS */}
            <section className="inicio-section ofertas-section py-4">
              <CarruselOfertas />
            </section>

            {/* SECCIÓN CONSOLAS */}
            <section className="inicio-section mb-5">
              <Row className="mb-4">
                <Col xs={12}>
                  <div className="categoria-banner contenedorCat categoria-consolas">
                    <h2 className="m-0 fw-bold tituloCat">Consolas</h2>
                  </div>
                </Col>
              </Row>

              <Row>
                {productosSeccionConsolas.length > 0 ? (
                  productosSeccionConsolas.map((prod) => (
                    <CardProducto key={prod.id} producto={prod} />
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h4 className="text-muted">No hay stock en Consolas</h4>
                  </div>
                )}
              </Row>
            </section>
          </>
        ) : (
          <>
            {/* VISTA FILTRADA POR UNA SOLA CATEGORÍA */}

            {/* BANNER DINÁMICO */}
            <section className="inicio-section mb-4">
              <Row>
                <Col xs={12}>
                  <div
                    className={`categoria-banner contenedorCat ${obtenerClaseCategoria()}`}
                  >
                    <h2 className="m-0 fw-bold tituloCat">{tituloCategoria}</h2>
                  </div>
                </Col>
              </Row>
            </section>

            {/* CARRUSEL OFERTAS */}
            <section className="inicio-section ofertas-section py-4">
              <CarruselOfertas />
            </section>

            {/* LISTA DE PRODUCTOS FILTRADOS */}
            <section className="inicio-section mb-5">
              <Row>
                {productosFiltrados.length > 0 ? (
                  productosFiltrados.map((prod) => (
                    <CardProducto key={prod.id} producto={prod} />
                  ))
                ) : (
                  <div className="col-12 text-center py-5">
                    <h4 className="text-muted">
                      No hay productos en la categoría seleccionada
                    </h4>
                  </div>
                )}
              </Row>
            </section>
          </>
        )}
      </Container>
    </div>
  );
};

export default Inicio;
