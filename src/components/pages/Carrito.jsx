// =======================================================
//  CARRITO COMPLETO FUNCIONANDO CON LOCALSTORAGE
// =======================================================

import { useState, useEffect } from "react";
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

// =======================================================
//  DATA INICIAL (Solo si no hay localStorage)
// =======================================================

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

// =======================================================
//  HELPERS LOCALSTORAGE
// =======================================================

const leerLS = (clave, def) => {
  const data = localStorage.getItem(clave);
  return data ? JSON.parse(data) : def;
};

const guardarLS = (clave, data) => {
  localStorage.setItem(clave, JSON.stringify(data));
};

// =======================================================
//  COMPONENTE PRINCIPAL CARRITO
// =======================================================

const Carrito = () => {
  // 1) Cargar carrito desde LS (o usar itemsIniciales)
  const [items, setItems] = useState(() =>
    leerLS("ls_carrito", itemsIniciales)
  );

  // Cada vez que cambia "items", se guarda en LS
  useEffect(() => {
    guardarLS("ls_carrito", items);
  }, [items]);

  // =====================================================
  //  FORMATEADOR DE PRECIOS
  // =====================================================

  const formatearPrecio = (valor) =>
    valor.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  // =====================================================
  //  FUNCIONES DE CANTIDAD
  // =====================================================

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

  // =====================================================
  //  ELIMINAR ITEM
  // =====================================================

  const eliminarItem = (id) => {
    setItems((prev) => prev.filter((item) => item.id !== id));
  };

  // =====================================================
  //  TOTALES
  // =====================================================

  const totalProductos = items.reduce((acc, item) => acc + item.cantidad, 0);

  const total = items.reduce(
    (acc, item) => acc + item.cantidad * item.precio,
    0
  );

  const handleVolver = () => window.history.back();

  // =====================================================
  //  RENDER
  // =====================================================

  return (
    <section className="carrito-wrapper">
      <Container className="carrito-container">
        {/* ENCABEZADO */}
        <Row className="align-items-center mb-4">
          <Col xs="auto">
            <button type="button" className="carrito-back-btn" onClick={handleVolver}>
              <i className="bi bi-chevron-left"></i>
              <span>Mi carrito</span>
            </button>
          </Col>
        </Row>

        <Row className="gy-4">
          {/* COLUMNA IZQUIERDA */}
          <Col xs={12} md={8}>
            <Card className="carrito-items-card">
              <Card.Body>
                {items.length === 0 ? (
                  <p className="text-center text-muted mb-0">
                    Tu carrito está vacío.
                  </p>
                ) : (
                  items.map((item) => (
                    <div key={item.id} className="carrito-item-row">
                      <div className="carrito-item-img-wrapper">
                        <img
                          src={item.imagen}
                          alt={item.nombre}
                          className="carrito-item-img"
                        />
                      </div>

                      <div className="carrito-item-info">
                        <h6 className="carrito-item-name">{item.nombre}</h6>

                        <div className="d-flex align-items-center gap-2 mt-2">
                          <Button
                            variant="outline-danger"
                            size="sm"
                            className="carrito-trash-btn"
                            onClick={() => eliminarItem(item.id)}
                          >
                            <i className="bi bi-trash3"></i>
                          </Button>

                          <InputGroup size="sm" className="carrito-qty-group">
                            <Button
                              variant="outline-secondary"
                              className="carrito-qty-btn"
                              onClick={() => decrementarCantidad(item.id)}
                            >
                              −
                            </Button>

                            <Form.Control
                              value={item.cantidad}
                              readOnly
                              className="text-center"
                            />

                            <Button
                              variant="outline-secondary"
                              className="carrito-qty-btn"
                              onClick={() => incrementarCantidad(item.id)}
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
                  ))
                )}
              </Card.Body>
            </Card>
          </Col>

          {/* COLUMNA DERECHA RESUMEN */}
          <Col xs={12} md={4}>
            <Card className="carrito-summary-card">
              <Card.Body>
                <h5 className="mb-3">Resumen</h5>

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

                <Button type="button" className="w-100 carrito-primary-btn mb-2">
                  Iniciar compra
                </Button>

                <Button type="button" className="w-100 carrito-secondary-btn">
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
