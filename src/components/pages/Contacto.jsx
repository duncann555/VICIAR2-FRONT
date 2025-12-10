import { Container, Row, Col, Form, Button, Card, Badge } from "react-bootstrap";
import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import "../../styles/contacto.css";

const Contacto = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: "onTouched",
  });

  const onSubmit = (data) => {
    Swal.fire({
      title: "¡Consulta enviada con éxito!",
      text: "Gracias por escribirnos. Te respondemos lo antes posible.",
      icon: "success",
      confirmButtonText: "Aceptar",
      confirmButtonColor: "#111827",
    });

    reset();
  };

  return (
    <div className="contacto-wrapper">
      <Container className="contacto-container py-4">
        {/* HERO */}
        <header className="text-center mb-4">
          <h1 className="fw-bold contacto-title">
            Contacto <span className="texto-resaltado">ViciAR</span>
          </h1>
          <p className="contacto-subtitle">
            Soporte real para gamers reales. Si tenés una duda, acá estamos.
          </p>

          <div className="d-flex justify-content-center gap-2 flex-wrap mt-2">
            <Badge bg="dark">Consultas</Badge>
            <Badge bg="dark">Soporte</Badge>
            <Badge bg="dark">Ventas</Badge>
            <Badge bg="dark">Post-compra</Badge>
          </div>
        </header>

        <Row className="g-4">
          {/* FORM */}
          <Col xs={12} md={6}>
            <Card className="contacto-card">
              <Card.Body>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="contacto-dot" />
                  <h5 className="m-0 fw-bold">Enviá tu consulta</h5>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)}>
                  {/* Nombre */}
                  <Form.Group className="mb-3">
                    <Form.Label>Nombre y apellido</Form.Label>
                    <Form.Control
                      type="text"
                      placeholder="Ej: Juan Pérez"
                      className="contacto-input"
                      {...register("nombreCompleto", {
                        required: "El nombre completo es obligatorio.",
                        minLength: { value: 5, message: "Mínimo 5 caracteres" },
                        maxLength: { value: 50, message: "Máximo 50 caracteres" },
                      })}
                    />
                    {errors.nombreCompleto && (
                      <span className="text-danger small">
                        {errors.nombreCompleto.message}
                      </span>
                    )}
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label>Email</Form.Label>
                    <Form.Control
                      type="email"
                      placeholder="Ej: juan_perez@gmail.com"
                      className="contacto-input"
                      {...register("email", {
                        required: "El email es obligatorio",
                        pattern: {
                          value:
                            /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
                          message: "Email inválido",
                        },
                      })}
                    />
                    {errors.email && (
                      <span className="text-danger small">
                        {errors.email.message}
                      </span>
                    )}
                  </Form.Group>

                  {/* Teléfono */}
                  <Form.Group className="mb-3">
                    <Form.Label>Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ej: 381-1115469"
                      className="contacto-input"
                      {...register("telefono", {
                        required: "El número de teléfono es obligatorio",
                        pattern: {
                          value: /^[0-9]{2,4}\s?[0-9]{4}-?[0-9]{4}$/,
                          message: "Teléfono inválido",
                        },
                      })}
                    />
                    {errors.telefono && (
                      <span className="text-danger small">
                        {errors.telefono.message}
                      </span>
                    )}
                  </Form.Group>

                  {/* Consulta */}
                  <Form.Group className="mb-3">
                    <Form.Label>Consulta</Form.Label>
                    <Form.Control
                      as="textarea"
                      rows={4}
                      placeholder="Contanos en qué te podemos ayudar..."
                      className="contacto-textarea"
                      {...register("consulta", {
                        required: "Este campo es obligatorio",
                        minLength: {
                          value: 10,
                          message: "La consulta debe tener al menos 10 caracteres",
                        },
                        maxLength: {
                          value: 500,
                          message: "Máximo 500 caracteres",
                        },
                      })}
                    />
                    {errors.consulta && (
                      <Form.Text className="text-danger">
                        {errors.consulta.message}
                      </Form.Text>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-end">
                    <Button
                      type="submit"
                      className="contacto-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* MAP + INFO */}
          <Col xs={12} md={6}>
            <Card className="contacto-card">
              <Card.Body>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="contacto-dot" />
                  <h5 className="m-0 fw-bold">Encontranos</h5>
                </div>

                <div className="contacto-mapa-wrapper mb-3">
                  <iframe
                    className="contacto-mapa"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.1059174722677!2d-65.20974192459575!3d-26.83658327669253!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94225d3ad7f30f1d%3A0xf8606cd659b8e3e4!2sRollingCode%20School!5e0!3m2!1ses-419!2sar!4v1745540374558!5m2!1ses-419!2sar"
                    height="320"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Mapa ViciAR"
                  />
                </div>

                <div className="contacto-info">
                  <div className="contacto-info-item">
                    <i className="bi bi-geo-fill"></i>
                    <div>
                      <div className="contacto-info-label">Dirección</div>
                      <div className="contacto-info-text">
                        Gral. Jose Maria Paz 576
                      </div>
                    </div>
                  </div>

                  <div className="contacto-info-sep" />

                  <div className="contacto-info-item">
                    <i className="bi bi-envelope-at-fill"></i>
                    <div>
                      <div className="contacto-info-label">Email</div>
                      <div className="contacto-info-text">
                        vici_AR@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="contacto-info-sep" />

                  <div className="contacto-info-item">
                    <i className="bi bi-clock-fill"></i>
                    <div>
                      <div className="contacto-info-label">Horarios</div>
                      <div className="contacto-info-text">
                        Lun a Sáb • 10:00 a 20:00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 d-flex gap-2 flex-wrap">
                  <Button variant="outline-dark" size="sm">
                    <i className="bi bi-instagram me-1"></i> Instagram
                  </Button>
                  <Button variant="outline-dark" size="sm">
                    <i className="bi bi-whatsapp me-1"></i> WhatsApp
                  </Button>
                  <Button variant="outline-dark" size="sm">
                    <i className="bi bi-discord me-1"></i> Discord
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contacto;
