// src/components/pages/carrito/Carrito.jsx
import { useMemo, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Form,
  InputGroup,
  Row,
} from "react-bootstrap";

import "../../styles/carrito.css";

// ===============================
//  DATA MOCK INICIAL
// ===============================
const itemsIniciales = [
  {
    id: 1,
    nombre: "Combo Logitech Teclado + Mouse MK120 USB",
    precio: 18500,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_914928-MLA100087512227_122025-O.webp",
    cantidad: 1,
  },
  {
    id: 2,
    nombre: "Joystick inalámbrico PS5 DualSense",
    precio: 65000,
    imagen:
      "https://http2.mlstatic.com/D_NQ_NP_2X_862147-MLA47791597592_102021-F.webp",
    cantidad: 1,
  },
];

// ===============================
//  ITEM INTERNO
// ===============================
function CarritoItem({
  item,
  onIncrementar,
  onDecrementar,
  onEliminar,
  formatearPrecio,
}) {
  return (
    <div className="carrito-item-row">
      <div className="carrito-item-img-wrapper">
        <img
          src={item.imagen}
          alt={item.nombre}
          className="carrito-item-img"
          loading="lazy"
        />
      </div>

      <div className="carrito-item-info">
        <h6 className="carrito-item-name">{item.nombre}</h6>

        <div className="d-flex align-items-center gap-2 mt-2">
          <Button
            variant="outline-danger"
            size="sm"
            className="carrito-trash-btn"
            onClick={() => onEliminar(item.id)}
            aria-label="Eliminar producto"
            title="Eliminar"
          >
            <i className="bi bi-trash3"></i>
          </Button>

          <InputGroup size="sm" className="carrito-qty-group ">
            <Button
              variant="outline-secondary"
              className="carrito-qty-btn me-2"
              onClick={() => onDecrementar(item.id)}
              aria-label="Disminuir cantidad"
              title="Disminuir"
            >
              −
            </Button>

            <Form.Control
              value={item.cantidad}
              readOnly
              className="text-center"
              aria-label="Cantidad"
            />

            <Button
              variant="outline-secondary"
              className="carrito-qty-btn ms-2"
              onClick={() => onIncrementar(item.id)}
              aria-label="Aumentar cantidad"
              title="Aumentar"
            >
              +
            </Button>
          </InputGroup>
        </div>
      </div>

      <div className="carrito-item-price">
        {formatearPrecio(item.precio * item.cantidad)}
      </div>
    </div>
  );
}

// ===============================
//  COMPONENTE PRINCIPAL
// ===============================
const Carrito = () => {
  const [items, setItems] = useState(itemsIniciales);

  const formatearPrecio = (valor) =>
    valor.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  const incrementarCantidad = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, cantidad: item.cantidad + 1 } : item
      )
    );
  };

  const decrementarCantidad = (id) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, cantidad: Math.max(1, item.cantidad - 1) }
          : item
      )
    );
  };

  const eliminarItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  const vaciarCarrito = () => setItems([]);

  const totalProductos = useMemo(
    () => items.reduce((acc, item) => acc + item.cantidad, 0),
    [items]
  );

  const total = useMemo(
    () => items.reduce((acc, item) => acc + item.cantidad * item.precio, 0),
    [items]
  );

  const handleVolver = () => window.history.back();

  return (
    <section className="carrito-wrapper">
      <Container className="carrito-container py-4">
        <Row className="align-items-center mb-3">
          <Col xs="auto">
            <button
              type="button"
              className="carrito-back-btn"
              onClick={handleVolver}
            >
              <i className="bi bi-chevron-left"></i>
              <span>Volver</span>
            </button>
          </Col>
        </Row>

        <header className="text-center text-md-start mb-4">
          <h1 className="carrito-hero-title">
            Mi <span className="carrito-texto-resaltado">carrito</span>
          </h1>
          <p className="carrito-hero-subtitle mb-0">
            Revisá tus productos y cerrá la compra como un campeón.
          </p>
        </header>

        <Row className="gy-4">
          <Col xs={12} md={8}>
            <Card className="carrito-items-card">
              <Card.Body>
                {items.length === 0 ? (
                  <div className="text-center py-4">
                    <p className="text-muted mb-3">Tu carrito está vacío.</p>
                    <Button
                      type="button"
                      className="carrito-secondary-btn"
                      onClick={handleVolver}
                    >
                      Ver productos
                    </Button>
                  </div>
                ) : (
                  <>
                    {items.map((item) => (
                      <CarritoItem
                        key={item.id}
                        item={item}
                        onIncrementar={incrementarCantidad}
                        onDecrementar={decrementarCantidad}
                        onEliminar={eliminarItem}
                        formatearPrecio={formatearPrecio}
                      />
                    ))}

                    <div className="d-flex justify-content-end mt-3">
                      <Button
                        variant="outline-secondary"
                        size="sm"
                        className="carrito-empty-btn"
                        onClick={vaciarCarrito}
                      >
                        Vaciar carrito
                      </Button>
                    </div>
                  </>
                )}
              </Card.Body>
            </Card>
          </Col>

          <Col xs={12} md={4}>
            <Card className="carrito-summary-card">
              <Card.Body>
                <h5 className="mb-3 carrito-summary-title">Resumen</h5>

                <div className="d-flex justify-content-between mb-1">
                  <span>
                    {totalProductos} producto{totalProductos !== 1 && "s"}
                  </span>
                  <span>{formatearPrecio(total)}</span>
                </div>

                <p className="carrito-summary-note">
                  Si tenés un cupón, podrás ingresarlo en el último paso.
                </p>

                <hr />

                <div className="d-flex justify-content-between align-items-center mb-2">
                  <span className="fw-semibold">Total</span>
                  <span className="carrito-summary-total">
                    {formatearPrecio(total)}
                  </span>
                </div>

                <p className="carrito-summary-footnote mb-3">
                  *Precio abonando con depósito o transferencia.
                </p>

                <Button
                  type="button"
                  className="w-100 carrito-primary-btn mb-2"
                  disabled={items.length === 0}
                >
                  Iniciar compra
                </Button>

                <Button
                  type="button"
                  className="w-100 carrito-secondary-btn"
                  onClick={handleVolver}
                >
                  Ver más productos
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Carrito;
