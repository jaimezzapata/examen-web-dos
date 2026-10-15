import { Link, NavLink } from 'react-router-dom';
import { BookOpen } from 'lucide-react';

function Navbar({ enlaces }) {
  return (
    <header className="site-header">
      <div className="container nav-bar">
        <Link to="/" className="brand">
          <div className="brand-badge">
            <BookOpen size={20} />
          </div>
          <span>Librería Archivo</span>
        </Link>
        <nav>
          <ul className="nav-links">
            {enlaces.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink
                  to={enlace.ruta}
                  end={enlace.ruta === '/'}
                  className={({ isActive }) => isActive ? 'active' : ''}
                >
                  <enlace.Icono size={14} />
                  <span>{enlace.etiqueta}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
