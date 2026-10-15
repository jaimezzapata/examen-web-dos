import { Outlet } from 'react-router-dom';
import { Home, Grid3x3, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Footer from './Footer';

function Layout() {
  const enlaces = [
    { ruta: '/', etiqueta: 'Inicio', Icono: Home },
    { ruta: '/catalogo', etiqueta: 'Catálogo', Icono: Grid3x3 },
    { ruta: '/contacto', etiqueta: 'Contacto', Icono: Mail },
  ];

  return (
    <>
      <Navbar enlaces={enlaces} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer
        nombre="Librería Archivo"
        descripcion="Catálogo bibliográfico de diseño"
        mensaje="Colección abierta para consulta"
      />
    </>
  );
}

export default Layout;
