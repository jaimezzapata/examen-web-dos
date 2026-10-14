function Footer({ marca, descripcion, lema }) {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <span>
          <strong>{marca}</strong> &bull; {descripcion}
        </span>
        <span>{lema}</span>
      </div>
    </footer>
  )
}

export default Footer
