import React, { useState } from "react";
import { Button, Card, InputGroup, Form } from "react-bootstrap";
import "../../../styles/carrito.css";

const ItemProducto = ({ nombre, precio, imagen }) => {
  const [contador, setContador] = useState(1);

  const incrementarContador = () => {
    setContador((prev) => prev + 1);
  };

  const decrementarContador = () => {
    setContador((prev) => (prev > 1 ? prev - 1 : 1));
  };

  return (
    <div className="mt-3">
      <Card className="carrito-item-card border-0 bg-body-secondary">
        <div className="d-flex flex-column flex-lg-row align-items-stretch">
          <div className="d-flex justify-content-center align-items-center p-2">
            <Card.Img src={imagen} className="img-producto-carrito" />
          </div>

          <Card.Body className="d-flex flex-column">
            <div className="d-flex justify-content-between align-items-start mb-1">
              <Card.Title className="carrito-item-title">
                {nombre}
              </Card.Title>
              <p className="mb-0 text-black fs-5 ms-2 fw-semibold">
                ${precio}
              </p>
            </div>

            <div className="mt-2">
              <p className="mb-1">Cantidad</p>
              <InputGroup className="mb-2 carrito-cantidad-group">
                <Button
                  type="button"
                  className="btn-navegacion"
                  onClick={decrementarContador}
                >
                  <i className="bi bi-dash-lg"></i>
                </Button>
                <Form.Control
                  value={contador}
                  readOnly
                  type="number"
                  min="1"
                  className="text-center"
                />
                <Button
                  type="button"
                  className="btn-navegacion"
                  onClick={incrementarContador}
                >
                  <i className="bi bi-plus-lg"></i>
                </Button>
              </InputGroup>
            </div>

            <div className="d-flex justify-content-end mt-1">
              <Button
                type="button"
                className="btn btn-danger btn-eliminar"
              >
                <i className="bi bi-trash3"></i>
              </Button>
            </div>
          </Card.Body>
        </div>
      </Card>
    </div>
  );
};

export default ItemProducto;
