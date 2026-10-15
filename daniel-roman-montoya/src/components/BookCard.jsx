import {
  Star,
  BookMarked,
  Calendar,
  Book,
  Landmark,
  Sliders,
  LayoutGrid,
  Moon,
  Type,
  Box,
} from 'lucide-react';
import { createElement } from 'react';

const iconosLibro = {
  landmark: Landmark,
  sliders: Sliders,
  'layout-grid': LayoutGrid,
  moon: Moon,
  type: Type,
  box: Box,
};

function obtenerClaseCategoria(categoria) {
  switch (categoria) {
    case 'Arquitectura': return 'badge-arquitectura';
    case 'Diseño Industrial': return 'badge-industrial';
    case 'Diseño Gráfico': return 'badge-grafico';
    case 'Estética': return 'badge-estetica';
    case 'Tipografía': return 'badge-tipografia';
    default: return 'badge-industrial';
  }
}

function obtenerIconoLucide(nombreIcono) {
  return iconosLibro[nombreIcono] || Book;
}

function BookCard({ libro }) {
  const claseBadge = obtenerClaseCategoria(libro.categoria);

  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            {createElement(obtenerIconoLucide(libro.icono), { size: 18 })}
          </div>
          <span className="card-rating-badge">
            <Star size={13} fill="#f59e0b" color="#f59e0b" />
            <span>{libro.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className="badge-category" style={{ marginBottom: '12px' }}>
          <span className={`badge ${claseBadge}`}>{libro.categoria}</span>
        </span>
        <h3 className="card-title">{libro.titulo}</h3>
        <p className="card-author">Por {libro.autor} ({libro.anio})</p>
        <p className="card-summary">{libro.resumen}</p>

        <div className="card-details-box">
          <span>Editorial: <strong>{libro.editorial}</strong></span>
          <span>ISBN: <code>{libro.isbn}</code></span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <BookMarked size={14} />
          <span>{libro.paginas} páginas</span>
        </span>
        <span className="card-meta" style={{ color: 'var(--text-muted)' }}>
          <Calendar size={14} />
          <span>Edición {libro.anio}</span>
        </span>
      </div>
    </article>
  );
}

export default BookCard;
