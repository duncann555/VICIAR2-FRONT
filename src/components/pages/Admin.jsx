import Container from "react-bootstrap/Container";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import { useState } from "react";
import Swal from "sweetalert2";
import UsuarioModal from "./administrador/UsuarioModal";
import AdminStats from "./administrador/AdminStats";
import ProductosTab from "./administrador/ProductosTab";
import UsuariosTab from "./administrador/UsuariosTab";
import ProductoModal from "./administrador/ProductosModal";
import "../../styles/admin.css";

function Admin() {
  const productosIniciales = [
    {
      id: 1,
      nombre: "PS5 Slim",
      categoria: "Consolas",
      stock: 25,
      descripcion: "Descripción corta del producto.",
      ultimoControl: "2025-11-30",
      precio: 800000,
    },
    {
      id: 2,
      nombre: "Red Dead Redemption 2",
      categoria: "Juego PC",
      stock: 0,
      descripcion: "Otro producto de prueba.",
      ultimoControl: "2025-11-15",
      precio: 30000,
    },
  ];

  const usuariosIniciales = [
    {
      id: 1,
      nombre: "Sebastian",
      email: "sebaflomen@gmail.com",
      rol: "admin",
      estado: "Activo",
    },
    {
      id: 2,
      nombre: "Matias",
      email: "matias555@gmail.com",
      rol: "usuario",
      estado: "Pendiente",
    },
  ];

  const [productos, setProductos] = useState(productosIniciales);
  const [usuarios, setUsuarios] = useState(usuariosIniciales);

  const [mostrarProductoModal, setMostrarProductoModal] = useState(false);
  const [mostrarUsuarioModal, setMostrarUsuarioModal] = useState(false);

  const [modoProducto, setModoProducto] = useState("crear");
  const [modoUsuario, setModoUsuario] = useState("crear");

  const [productoSeleccionadoId, setProductoSeleccionadoId] = useState(null);
  const [usuarioSeleccionadoId, setUsuarioSeleccionadoId] = useState(null);

  const [productoForm, setProductoForm] = useState({
    nombre: "",
    categoria: "",
    stock: 0,
    descripcion: "",
    fechaControl: "",
    precio: 0,
  });

  const [usuarioForm, setUsuarioForm] = useState({
    nombre: "",
    email: "",
    rol: "",
    estado: "Activo",
  });

  const totalProductos = productos.length;
  const productosSinStock = productos.filter((p) => p.stock === 0).length;
  const totalUsuarios = usuarios.length;

  const handleChangeProducto = (e) => {
    const { name, value } = e.target;
    setProductoForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleChangeUsuario = (e) => {
    const { name, value } = e.target;
    setUsuarioForm((prev) => ({ ...prev, [name]: value }));
  };

  const abrirModalProductoCrear = () => {
    setModoProducto("crear");
    setProductoSeleccionadoId(null);
    setProductoForm({
      nombre: "",
      categoria: "",
      stock: 0,
      descripcion: "",
      fechaControl: "",
      precio: 0,
    });
    setMostrarProductoModal(true);
  };

  const abrirModalProductoEditar = (producto) => {
    setModoProducto("editar");
    setProductoSeleccionadoId(producto.id);
    setProductoForm({
      nombre: producto.nombre,
      categoria: producto.categoria,
      stock: producto.stock,
      descripcion: producto.descripcion,
      fechaControl: producto.ultimoControl,
      precio: producto.precio,
    });
    setMostrarProductoModal(true);
  };

  const cerrarModalProducto = () => setMostrarProductoModal(false);

  const abrirModalUsuarioEditar = (usuario) => {
    setModoUsuario("editar");
    setUsuarioSeleccionadoId(usuario.id);
    setUsuarioForm({
      nombre: usuario.nombre,
      email: usuario.email,
      rol: usuario.rol,
      estado: usuario.estado,
    });
    setMostrarUsuarioModal(true);
  };

  const cerrarModalUsuario = () => setMostrarUsuarioModal(false);

  const handleGuardarProducto = () => {
    const productoParaGuardar = {
      nombre: productoForm.nombre,
      categoria: productoForm.categoria,
      stock: Number(productoForm.stock),
      descripcion: productoForm.descripcion,
      ultimoControl: productoForm.fechaControl,
      precio: Number(productoForm.precio),
    };

    if (modoProducto === "crear") {
      const nuevoId =
        productos.length > 0 ? Math.max(...productos.map((p) => p.id)) + 1 : 1;

      setProductos([...productos, { id: nuevoId, ...productoParaGuardar }]);
    } else {
      setProductos(
        productos.map((p) =>
          p.id === productoSeleccionadoId ? { ...p, ...productoParaGuardar } : p
        )
      );
    }

    cerrarModalProducto();

    Swal.fire({
      icon: "success",
      title:
        modoProducto === "crear"
          ? "Producto creado correctamente"
          : "Producto actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleGuardarUsuario = () => {
    const usuarioParaGuardar = {
      nombre: usuarioForm.nombre,
      email: usuarioForm.email,
      rol: usuarioForm.rol,
      estado: usuarioForm.estado,
    };

    if (modoUsuario === "crear") {
      const nuevoId =
        usuarios.length > 0 ? Math.max(...usuarios.map((u) => u.id)) + 1 : 1;

      setUsuarios([...usuarios, { id: nuevoId, ...usuarioParaGuardar }]);
    } else {
      setUsuarios(
        usuarios.map((u) =>
          u.id === usuarioSeleccionadoId ? { ...u, ...usuarioParaGuardar } : u
        )
      );
    }

    cerrarModalUsuario();

    Swal.fire({
      icon: "success",
      title:
        modoUsuario === "crear"
          ? "Usuario creado correctamente"
          : "Usuario actualizado",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const handleEliminarProducto = (id) => {
    Swal.fire({
      title: "¿Estás seguro?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        setProductos(productos.filter((p) => p.id !== id));

        Swal.fire({
          icon: "success",
          title: "Producto eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleEliminarUsuario = (id) => {
    Swal.fire({
      title: "¿Eliminar usuario?",
      text: "Esta acción no se puede deshacer.",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Sí, eliminar",
      cancelButtonText: "Cancelar",
    }).then((res) => {
      if (res.isConfirmed) {
        setUsuarios(usuarios.filter((u) => u.id !== id));

        Swal.fire({
          icon: "success",
          title: "Usuario eliminado",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const handleSuspenderUsuario = (id) => {
    setUsuarios((prev) =>
      prev.map((u) =>
        u.id === id
          ? { ...u, estado: u.estado === "Activo" ? "Suspendido" : "Activo" }
          : u
      )
    );
  };

  const obtenerColorBadgeStock = (stock) => {
    if (stock === 0) return "danger";
    if (stock <= 5) return "warning";
    return "success";
  };

  const formatearPrecio = (precio) =>
    precio.toLocaleString("es-AR", { style: "currency", currency: "ARS" });

  return (
    <Container fluid className="py-4">
      <AdminStats
        totalProductos={totalProductos}
        productosSinStock={productosSinStock}
        totalUsuarios={totalUsuarios}
      />

      <Tabs defaultActiveKey="productos" className="admin-tabs mb-3">
        <Tab eventKey="productos" title="Productos">
          <ProductosTab
            productos={productos}
            abrirModalProductoCrear={abrirModalProductoCrear}
            abrirModalProductoEditar={abrirModalProductoEditar}
            handleEliminarProducto={handleEliminarProducto}
            obtenerColorBadgeStock={obtenerColorBadgeStock}
            formatearPrecio={formatearPrecio}
          />
        </Tab>

        <Tab eventKey="usuarios" title="Usuarios">
          <UsuariosTab
            usuarios={usuarios}
            abrirModalUsuarioEditar={abrirModalUsuarioEditar}
            handleEliminarUsuario={handleEliminarUsuario}
            handleSuspenderUsuario={handleSuspenderUsuario}
          />
        </Tab>
      </Tabs>

      <ProductoModal
        show={mostrarProductoModal}
        modoProducto={modoProducto}
        productoForm={productoForm}
        handleChangeProducto={handleChangeProducto}
        cerrarModalProducto={cerrarModalProducto}
        handleGuardarProducto={handleGuardarProducto}
      />

      <UsuarioModal
        show={mostrarUsuarioModal}
        modoUsuario={modoUsuario}
        usuarioForm={usuarioForm}
        handleChangeUsuario={handleChangeUsuario}
        cerrarModalUsuario={cerrarModalUsuario}
        handleGuardarUsuario={handleGuardarUsuario}
      />
    </Container>
  );
}

export default Admin;
