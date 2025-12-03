import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function UsuarioModal({
  show,
  modoUsuario,
  usuarioForm,
  handleChangeUsuario,
  cerrarModalUsuario,
  handleGuardarUsuario,
}) {
  return (
    <Modal show={show} onHide={cerrarModalUsuario} centered>
      <Modal.Header closeButton>
        <Modal.Title>
          {modoUsuario === "crear" ? "Agregar usuario" : "Editar usuario"}
        </Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <Form>
          <Form.Group className="mb-3">
            <Form.Label>Nombre completo</Form.Label>
            <Form.Control
              type="text"
              name="nombre"
              value={usuarioForm.nombre}
              onChange={handleChangeUsuario}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={usuarioForm.email}
              onChange={handleChangeUsuario}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Rol</Form.Label>
            <Form.Select
              name="rol"
              value={usuarioForm.rol}
              onChange={handleChangeUsuario}
            >
              <option value="">Seleccionar rol</option>
              <option value="admin">Administrador</option>
              <option value="usuario">Usuario</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Estado</Form.Label>
            <Form.Select
              name="estado"
              value={usuarioForm.estado}
              onChange={handleChangeUsuario}
            >
              <option value="Activo">Activo</option>
              <option value="Pendiente">Pendiente</option>
              <option value="Suspendido">Suspendido</option>
            </Form.Select>
          </Form.Group>
        </Form>
      </Modal.Body>

      <Modal.Footer>
        <Button variant="secondary" onClick={cerrarModalUsuario}>
          Cancelar
        </Button>
        <Button className="btn-admin-primary" onClick={handleGuardarUsuario}>
          Guardar
        </Button>
      </Modal.Footer>
    </Modal>
  );
}

export default UsuarioModal;
