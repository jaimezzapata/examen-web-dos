import Icono from './Icono'

const CLASES_CATEGORIA = {
  Arquitectura: 'badge-arquitectura',
  'Diseño Industrial': 'badge-industrial',
  'Diseño Gráfico': 'badge-grafico',
  Estética: 'badge-estetica',
  Tipografía: 'badge-tipografia',
}

function LibroCard({ libro }) {
  const claseBadge = CLASES_CATEGORIA[libro.categoria] || 'badge-industrial'

  return (
    <article className="book-card">
      <div>
        <div className="card-top">
          <div className="card-icon-container">
            <Icono nombre={libro.icono} />
          </div>
          <span className="card-rating-badge">
            <Icono nombre="star" className="icon-sm" />
            <span>{libro.calificacion.toFixed(1)}</span>
          </span>
        </div>

        <span className={`badge ${claseBadge}`} style={{ marginBottom: '12px' }}>
          {libro.categoria}
        </span>
        <h3 className="card-title">{libro.titulo}</h3>
        <p className="card-author">
          Por {libro.autor} ({libro.anio})
        </p>
        <p className="card-summary">{libro.resumen}</p>

        <div className="card-details-box">
          <span>
            Editorial: <strong>{libro.editorial}</strong>
          </span>
          <span>
            ISBN: <code>{libro.isbn}</code>
          </span>
        </div>
      </div>

      <div className="card-footer">
        <span className="card-meta">
          <Icono nombre="book-marked" className="icon-sm" />
          <span>{libro.paginas} páginas</span>
        </span>
        <span className="card-meta" style={{ color: 'var(--text-muted)' }}>
          <Icono nombre="calendar" className="icon-sm" />
          <span>Edición {libro.anio}</span>
        </span>
      </div>
    </article>
  )
}

export default LibroCard
