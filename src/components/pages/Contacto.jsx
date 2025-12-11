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
    <div className="inicio-wrapper">
      <Container className="inicio-container py-5 contacto-container">
        {/* HERO */}
        <header className="text-center mb-4">
          
          <p className="inicio-hero-subtitle contacto-subtitle">
            Soporte real para gamers reales. Si tenés una duda con tu compra, tu
            envío o tu cuenta, escribinos y te damos una mano.
          </p>

          <div className="d-flex justify-content-center contacto-badges flex-wrap mt-3">
            <Badge bg="dark" className="contacto-badge-pill">
              Consultas generales
            </Badge>
            <Badge bg="dark" className="contacto-badge-pill">
              Soporte técnico
            </Badge>
            <Badge bg="dark" className="contacto-badge-pill">
              Ventas online
            </Badge>
            <Badge bg="dark" className="contacto-badge-pill">
              Post-compra
            </Badge>
          </div>
        </header>

        <Row className="g-4 align-items-stretch mt-3">
          {/* FORMULARIO */}
          <Col xs={12} lg={6}>
            <Card className="contacto-card h-100">
              <Card.Body>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="contacto-dot" />
                  <div>
                    <h5 className="m-0 fw-bold">Enviá tu consulta</h5>
                    <small className="text-muted">
                      Respondemos dentro de las próximas 24 horas hábiles.
                    </small>
                  </div>
                </div>

                <Form onSubmit={handleSubmit(onSubmit)} noValidate>
                  {/* Nombre */}
                  <Form.Group className="mb-3">
                    <Form.Label className="contacto-label">
                      Nombre y apellido
                    </Form.Label>
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
                      <div className="contacto-error">
                        {errors.nombreCompleto.message}
                      </div>
                    )}
                  </Form.Group>

                  {/* Email */}
                  <Form.Group className="mb-3">
                    <Form.Label className="contacto-label">Email</Form.Label>
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
                      <div className="contacto-error">
                        {errors.email.message}
                      </div>
                    )}
                  </Form.Group>

                  {/* Teléfono */}
                  <Form.Group className="mb-3">
                    <Form.Label className="contacto-label">Teléfono</Form.Label>
                    <Form.Control
                      type="tel"
                      placeholder="Ej: 381 1234567"
                      className="contacto-input"
                      {...register("telefono", {
                        required: "El número de teléfono es obligatorio",
                        pattern: {
                          value: /^[0-9\s\-()+]{7,20}$/,
                          message: "Teléfono inválido",
                        },
                      })}
                    />
                    {errors.telefono && (
                      <div className="contacto-error">
                        {errors.telefono.message}
                      </div>
                    )}
                  </Form.Group>

                  {/* Consulta */}
                  <Form.Group className="mb-3">
                    <Form.Label className="contacto-label">Consulta</Form.Label>
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
                      <div className="contacto-error">
                        {errors.consulta.message}
                      </div>
                    )}
                  </Form.Group>

                  <div className="d-flex justify-content-end mt-3">
                    <Button
                      type="submit"
                      className="contacto-btn"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Enviando..." : "Enviar consulta"}
                    </Button>
                  </div>
                </Form>
              </Card.Body>
            </Card>
          </Col>

          {/* MAPA + INFO */}
          <Col xs={12} lg={6}>
            <Card className="contacto-card contacto-card-secundaria h-100">
              <Card.Body>
                <div className="d-flex align-items-center gap-2 mb-3">
                  <span className="contacto-dot contacto-dot-alt" />
                  <div>
                    <h5 className="m-0 fw-bold">Encontranos</h5>
                    <small className="text-muted">
                      También podés visitarnos o escribirnos por redes.
                    </small>
                  </div>
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
                    <i className="bi bi-geo-alt-fill contacto-info-icon"></i>
                    <div>
                      <div className="contacto-info-label">Dirección</div>
                      <div className="contacto-info-text">
                        Gral. José María Paz 576, Tucumán
                      </div>
                    </div>
                  </div>

                  <div className="contacto-info-sep" />

                  <div className="contacto-info-item">
                    <i className="bi bi-envelope-at-fill contacto-info-icon"></i>
                    <div>
                      <div className="contacto-info-label">Email</div>
                      <div className="contacto-info-text">
                        viciar.soporte@gmail.com
                      </div>
                    </div>
                  </div>

                  <div className="contacto-info-sep" />

                  <div className="contacto-info-item">
                    <i className="bi bi-clock-fill contacto-info-icon"></i>
                    <div>
                      <div className="contacto-info-label">Horarios</div>
                      <div className="contacto-info-text">
                        Lun a Sáb • 10:00 a 20:00
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 d-flex gap-2 flex-wrap">
                  <Button variant="outline-dark" size="sm" className="contacto-social-btn">
                    <i className="bi bi-instagram me-1" /> Instagram
                  </Button>
                  <Button variant="outline-dark" size="sm" className="contacto-social-btn">
                    <i className="bi bi-whatsapp me-1" /> WhatsApp
                  </Button>
                  <Button variant="outline-dark" size="sm" className="contacto-social-btn">
                    <i className="bi bi-discord me-1" /> Discord
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
