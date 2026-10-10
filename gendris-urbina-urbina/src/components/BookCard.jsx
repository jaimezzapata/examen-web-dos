import Icono from "./Icono";

export default function BookCard({
  titulo,
  autor,
  categoria,
  icono,
  anio,
  paginas,
  calificacion,
  editorial,
  isbn,
  resumen,
}) {
  return (
    <article className="book-card">
      <div className="book-card__header">
        <div className="book-card__icon">
          <Icono nombre={icono || "book-open"} className="icon-sm" />
        </div>
        <div>
          <span className="book-card__category">{categoria}</span>
          <h3>{titulo}</h3>
        </div>
      </div>

      <p className="book-card__meta">
        <strong>Autor:</strong> {autor}
      </p>
      <p className="book-card__meta">
        <strong>Editorial:</strong> {editorial}
      </p>
      <p className="book-card__meta">
        <strong>Año:</strong> {anio} · <strong>Páginas:</strong> {paginas}
      </p>
      <p className="book-card__meta">
        <strong>Calificación:</strong> {calificacion} / 5
      </p>
      <p className="book-card__meta">
        <strong>ISBN:</strong> {isbn}
      </p>
      <p className="book-card__summary">{resumen}</p>
    </article>
  );
}