import '../../styles/footer.css';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <footer className='container-fluid footer-bg-color text-white'>
            <div className="row border border-light">
                <div className="col-12 col-md-4 d-flex flex-column border border-light">
                    <h4>Categorias</h4>
                    <Link to={"/contacto"}>Contacto</Link>
                    <Link>Quienes Somos</Link>
                    <Link>Trabaja con nosotros</Link>
                    <Link>Preguntas frecuentes</Link>
                    <Link>Terminos y condiciones</Link>
                </div>
                <div className="col-12 col-md-4 border border-light">
                    <h4>Contactanos</h4>
                    <p className='text-white'><i className="bi bi-whatsapp"></i>+54 34566734560</p>
                </div>
                <div className="col-12 col-md-4 border border-light">1234</div>
            </div>
            <p className='text-center'>&copy; Copyright ViciAR 2025 Todos los derechos reservados</p>
        </footer>
    );
};

export default Footer;