import { Link } from 'react-router-dom'
import { libros } from '../data/libros'
import HeroBanner from '../components/HeroBanner'
import MetricaCard from '../components/MetricaCard'
import LibroCard from '../components/LibroCard'
import Icono from '../components/Icono'

function Inicio() {
  const totalLibros = libros.length
  const categoriasUnicas = new Set(libros.map((libro) => libro.categoria)).size
  const promedio = (
    libros.reduce((acc, libro) => acc + libro.calificacion, 0) / totalLibros
  ).toFixed(1)
  const totalPaginas = libros.reduce((acc, libro) => acc + libro.paginas, 0)

  const metricas = [
    { etiqueta: 'Libros Indexados', valor: totalLibros, icono: 'book', fondo: '#eef2ff', color: '#4f46e5' },
    { etiqueta: 'Categorías Temáticas', valor: categoriasUnicas, icono: 'tag', fondo: '#e0f2fe', color: '#0284c7' },
    { etiqueta: 'Calificación Promedio', valor: promedio, icono: 'star', fondo: '#fef3c7', color: '#d97706' },
    { etiqueta: 'Páginas Totales', valor: totalPaginas.toLocaleString(), icono: 'file-text', fondo: '#ecfdf5', color: '#059669' },
  ]

  const destacados = libros.filter((libro) => libro.destacado)

  return (
    <>
      <HeroBanner
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <div className="section-header">
          <h2 className="section-title">
            <Icono nombre="bar-chart-3" />
            <span>Resumen del Repositorio</span>
          </h2>
        </div>
        <div className="stats-grid">
          {metricas.map((metrica) => (
            <MetricaCard
              key={metrica.etiqueta}
              etiqueta={metrica.etiqueta}
              valor={metrica.valor}
              icono={metrica.icono}
              fondo={metrica.fondo}
              color={metrica.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Icono nombre="star" />
            <span>Obras Destacadas</span>
          </h2>
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <Icono nombre="arrow-right" className="icon-sm" />
          </Link>
        </div>
        <div className="cards-grid">
          {destacados.map((libro) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  )
}

export default Inicio
