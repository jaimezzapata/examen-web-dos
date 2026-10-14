import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const enlaces = [
  { ruta: "/", texto: "Inicio", icono: "home" },
  { ruta: "/catalogo", texto: "Catálogo", icono: "grid" },
  { ruta: "/contacto", texto: "Contacto", icono: "mail" },
];

function Layout() {
  return (
    <div className="flex min-h-screen flex-col font-sans">
      <Navbar enlaces={enlaces} />
      <main className="mx-auto w-full max-w-6xl flex-1 px-6 pb-20 pt-28">
        <Outlet />
      </main>
      <Footer
        marca="Librería Archivo"
        descripcion="Catálogo bibliográfico de diseño"
        nota="Colección abierta para consulta"
      />
    </div>
  );
}

export default Layout;
