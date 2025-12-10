import CarruselPrincipal from "./inicio/CarruselPrincipal.jsx";
import CardProducto from "./inicio/CardProducto.jsx";
import CarruselOfertas from "./inicio/CarruselOfertas.jsx";
import { Col, Container, Row } from "react-bootstrap";
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

  const cat1 = categorias[0];
  const productosSeccion1 = productos.filter(
    (p) => p.categoria === cat1.nombre
  );

  const cat2 = categorias[1];
  const productosSeccion2 = productos.filter(
    (p) => p.categoria === cat2.nombre
  );

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
            No vendemos simples juegos: vendemos las 3 de la mañana con amigos
            y esa sensación de gloria absoluta.
            <br />
            Tu próxima obsesión está a un clic de distancia.
          </h5>
        </header>

        {/* SECCIÓN 1 */}
        <section className="inicio-section mb-5">
          <Row className="mb-4">
            <Col xs={12}>
              <div className="categoria-banner contenedorCat categoria-nintendo">
        <h2 className="m-0 fw-bold tituloCat">{cat1.nombre}</h2>
      </div>
            </Col>
          </Row>

          <Row>
            {productosSeccion1.length > 0 ? (
              productosSeccion1.map((prod) => (
                <CardProducto key={prod.id} producto={prod} />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No hay stock en {cat1.nombre}</h4>
              </div>
            )}
          </Row>
        </section>

        {/* CARRUSEL OFERTAS */}
        <section className="inicio-section ofertas-section py-5">
          <CarruselOfertas />
        </section>

        {/* SECCIÓN 2 */}
        <section className="inicio-section mb-5">
          <Row className="mb-4">
            <Col xs={12}>
              <div className="categoria-banner contenedorCat categoria-consolas">
        <h2 className="m-0 fw-bold tituloCat">{cat2.nombre}</h2>
      </div>
            </Col>
          </Row>

          <Row>
            {productosSeccion2.length > 0 ? (
              productosSeccion2.map((prod) => (
                <CardProducto key={prod.id} producto={prod} />
              ))
            ) : (
              <div className="col-12 text-center py-5">
                <h4 className="text-muted">No hay stock en {cat2.nombre}</h4>
              </div>
            )}
          </Row>
        </section>
      </Container>
    </div>
  );
};

export default Inicio;
