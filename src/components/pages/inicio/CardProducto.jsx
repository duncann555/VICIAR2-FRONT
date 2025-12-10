// src/components/pages/inicio/CardProducto.jsx
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";

function CardProducto({ producto }) {
  const { nombreProducto, precio, imagen, categoria } = producto;

  const formatearPrecio = (valor) =>
    valor.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  return (
    <Col xs={12} sm={6} md={4} lg={3} className="mb-4">
      <Card className="producto-card h-100">
        {/* Imagen */}
        <div className="producto-img-wrapper">
          <Card.Img
            variant="top"
            src={imagen}
            alt={nombreProducto}
            className="producto-img"
          />
          <span className="producto-categoria-badge">{categoria}</span>
        </div>

        {/* Cuerpo */}
        <Card.Body className="d-flex flex-column">
          <Card.Title className="producto-titulo">
            {nombreProducto}
          </Card.Title>

          <div className="mt-2 mb-3">
            <span className="producto-precio">
              {formatearPrecio(precio)}
            </span>
          </div>

          <div className="mt-auto">
            <Button
              className="w-100 producto-btn"
              type="button"
              // más adelante acá podés navegar al detalle
              onClick={() => {}}
            >
              Ver detalle
            </Button>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default CardProducto;
