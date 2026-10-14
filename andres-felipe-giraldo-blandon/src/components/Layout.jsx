import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'

const enlaces = [
  { to: '/', texto: 'Inicio', icono: 'home' },
  { to: '/catalogo', texto: 'Catálogo', icono: 'grid' },
  { to: '/contacto', texto: 'Contacto', icono: 'mail' },
]

function Layout() {
  return (
    <>
      <Navbar marca="Librería Archivo" enlaces={enlaces} />
      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>
      <Footer
        marca="Librería Archivo"
        descripcion="Catálogo bibliográfico de diseño"
        lema="Colección abierta para consulta"
      />
    </>
  )
}

export default Layout
