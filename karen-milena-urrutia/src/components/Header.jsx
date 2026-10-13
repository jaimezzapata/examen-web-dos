
import { Link, NavLink } from "react-router-dom";

function Header() {
  return (
    <header className="site-header">
      <div className="header-inner">
        <Link to="/" className="brand">
          <span className="brand-icon" aria-hidden="true">▤</span>
          <span>Librería Archivo</span>
        </Link>

        <nav className="main-nav" aria-label="Navegación principal">
          <NavLink to="/" end>
            Inicio
          </NavLink>
          <NavLink to="/catalogo">
            Catálogo
          </NavLink>
          <NavLink to="/contacto">
            Contacto
          </NavLink>
        </nav>
      </div>
    </header>
  );
}

export default Header;
