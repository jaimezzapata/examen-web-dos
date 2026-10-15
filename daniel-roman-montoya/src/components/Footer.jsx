function Footer({ nombre, descripcion, mensaje }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span><strong>{nombre}</strong> &bull; {descripcion}</span>
        <span>{mensaje}</span>
      </div>
    </footer>
  );
}

export default Footer;
