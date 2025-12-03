import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Badge from "react-bootstrap/Badge";

function AdminStats({ totalProductos, productosSinStock, totalUsuarios }) {
  return (
    <Row className="mb-4 g-3">
      <Col md={4}>
        <Card className="shadow-sm h-100">
          <Card.Body>
            <Card.Title className="fw-semibold">Productos totales</Card.Title>
            <Card.Text className="fs-3 fw-bold text-primary">
              {totalProductos}
            </Card.Text>
            <Badge bg="light" text="dark">
              Datos de ejemplo
            </Badge>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="shadow-sm h-100">
          <Card.Body>
            <Card.Title className="fw-semibold">Sin stock</Card.Title>
            <Card.Text className="fs-3 fw-bold text-warning">
              {productosSinStock}
            </Card.Text>
            <Badge bg="warning">Revisar</Badge>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card className="shadow-sm h-100">
          <Card.Body>
            <Card.Title className="fw-semibold">Usuarios registrados</Card.Title>
            <Card.Text className="fs-3 fw-bold text-info">
              {totalUsuarios}
            </Card.Text>
            <Badge bg="info">Activos</Badge>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
}

export default AdminStats;
