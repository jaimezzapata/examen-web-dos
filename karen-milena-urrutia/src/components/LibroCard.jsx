
function LibroCard({ libro }) {
  return (
    <article className="book-card">
      <div className="book-card-top">
        <span className="book-icon" aria-hidden="true">
          {libro.icono === "landmark" && "⌂"}
          {libro.icono === "sliders" && "☷"}
          {libro.icono === "layout-grid" && "▦"}
          {libro.icono === "moon" && "☾"}
          {libro.icono === "type" && "T"}
          {libro.icono === "box" && "□"}
        </span>

        <span className="book-rating">
          ★ {libro.calificacion.toFixed(1)}
        </span>
      </div>

      <span className="book-category">{libro.categoria}</span>

      <h3>{libro.titulo}</h3>
      <p className="book-author">
        {libro.autor} · {libro.anio}
      </p>

      <p className="book-summary">{libro.resumen}</p>

      <div className="book-details">
        <p><strong>Editorial:</strong> {libro.editorial}</p>
        <p><strong>ISBN:</strong> {libro.isbn}</p>
        <p><strong>Páginas:</strong> {libro.paginas}</p>
      </div>
    </article>
  );
}

export default LibroCard;
