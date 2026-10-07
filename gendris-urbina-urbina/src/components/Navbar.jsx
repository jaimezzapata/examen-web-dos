import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="navbar">
      <h2>Librería Archivo</h2>
      <ul>
        <li><Link to="/">Inicio</Link></li>
        <li><Link to="/catalogo">Catálogo</Link></li>
        <li><Link to="/contacto">Contacto</Link></li>
      </ul>
    </nav>
  );
}

