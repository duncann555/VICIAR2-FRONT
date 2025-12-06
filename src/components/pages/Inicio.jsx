import CarruselPrincipal from "./inicio/CarruselPrincipal.jsx";
import CardProducto from "./inicio/CardProducto.jsx";
import { Container, Row } from "react-bootstrap";

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
      id: 1,
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
  ];

  return (
    <div>
      <CarruselPrincipal />
      <Container>
        <div className="mb-5">
          <h1 className="py-3 text-center fw-bolder text-primary-emphasis">Bienvenidos a ViciAR</h1>
          <h5 className="fw-medium">
            Donde no vendemos simples juegos. Vendemos las 3 de la mañana con
            amigos, la adrenalina del último boss y esa sensación de gloria
            absoluta. Tu próxima obsesión está a un clic de distancia.
          </h5>
        </div>
        <Row className="mb-4">
          <div
            className="bg-dark text-white py-2 px-5 shadow w-50 contenedorCat"
          >
            <h2 className="m-0 fw-bold tituloCat" >
              Ofertas
            </h2>
          </div>
        </Row>
        <Row>
          {productos.length > 0 ? (
            productos.map((prod) => (
              <CardProducto key={prod.id} producto={prod} />
            ))
          ) : (
            <div className="col-12 text-center py-5">
              <h4 className="text-muted">
                No hay productos disponibles por el momento.
              </h4>
            </div>
          )}
        </Row>
      </Container>
    </div>
  );
};

export default Inicio;
