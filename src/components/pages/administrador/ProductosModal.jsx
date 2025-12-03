import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function ProductoModal({
  show,
  modoProducto,
  productoForm,
  handleChangeProducto,
  cerrarModalProducto,
  handleGuardarProducto,
}) {
  return (
    <Modal show={show} onHide={cerrarModalProducto} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {modoProducto === "crear" ? "Agregar producto" : "Editar producto"}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre del producto</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={productoForm.nombre}
              onChange={handleChangeProducto}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Categoría</Form.Label>
            <Form.Select
              name="categoria"
              value={productoForm.categoria}
              onChange={handleChangeProducto}
            >
              <option value="">Seleccioná una categoría</option>
              <option value="Juegos de PC">Juegos de PC</option>
              <option value="Juegos de PlayStation">Juegos de PlayStation</option>
              <option value="Juegos de Xbox">Juegos de Xbox</option>
              <option value="Consolas">Consolas</option>
              <option value="Accesorios">Accesorios</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Stock</Form.Label>
            <Form.Control
              type="number"
              min="0"
              name="stock"
              value={productoForm.stock}
              onChange={handleChangeProducto}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Precio</Form.Label>
            <Form.Control
              type="number"
              min="0"
              name="precio"
              value={productoForm.precio}
              onChange={handleChangeProducto}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Descripción</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              name="descripcion"
              value={productoForm.descripcion}
              onChange={handleChangeProducto}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Fecha de último control</Form.Label>
            <Form.Control
              type="date"
              name="fechaControl"
              value={productoForm.fechaControl}
              onChange={handleChangeProducto}
            />
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarModalProducto}>
          Cancelar
        </Button>
        <Button className="btn-admin-primary" onClick={handleGuardarProducto}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default ProductoModal;
