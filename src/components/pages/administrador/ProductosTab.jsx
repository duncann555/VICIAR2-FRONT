import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Card from "react-bootstrap/Card";
import Table from "react-bootstrap/Table";
import Badge from "react-bootstrap/Badge";

function ProductosTab({
  productos,
  abrirModalProductoCrear,
  abrirModalProductoEditar,
  handleEliminarProducto,
  obtenerColorBadgeStock,
  formatearPrecio,
}) {
  return (
    <>
      <Row className="align-items-center mb-3 g-2">
        <Col md={4}>
          <Button
            className="btn-admin-primary w-100"
            onClick={abrirModalProductoCrear}
          >
            + Agregar producto
          </Button>
        </Col>

        <Col md={8}>
          <InputGroup>
            <Form.Control
              type="text"
              placeholder="Buscar producto por nombre o categoría..."
            />
            <Button className="btn-admin-primary">Buscar</Button>
          </InputGroup>
        </Col>
      </Row>

      <Card className="admin-table-card">
        <Card.Body>
          <Card.Title>Listado de productos</Card.Title>
          <Table responsive striped hover className="mt-3">
            <thead>
              <tr>
                <th>#</th>
                <th>Nombre</th>
                <th>Categoría</th>
                <th>Stock</th>
                <th>Descripción</th>
                <th>Último control</th>
                <th>Precio</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {productos.map((prod) => (
                <tr key={prod.id}>
                  <td>{prod.id}</td>
                  <td>{prod.nombre}</td>
                  <td>{prod.categoria}</td>
                  <td>
                    <Badge bg={obtenerColorBadgeStock(prod.stock)}>
                      {prod.stock}
                    </Badge>
                  </td>
                  <td>{prod.descripcion}</td>
                  <td>{prod.ultimoControl}</td>
                  <td>{formatearPrecio(prod.precio)}</td>
                  <td>
                    <Button
                      variant="outline-primary"
                      size="sm"
                      className="me-2"
                      onClick={() => abrirModalProductoEditar(prod)}
                    >
                      Editar
                    </Button>

                    <Button
                      variant="outline-danger"
                      size="sm"
                      onClick={() => handleEliminarProducto(prod.id)}
                    >
                      Eliminar
                    </Button>
                  </td>
                </tr>
              ))}

              {productos.length === 0 && (
                <tr>
                  <td colSpan={8} className="text-center text-muted">
                    No hay productos cargados.
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Card.Body>
      </Card>
    </>
  );
}

export default ProductosTab;
