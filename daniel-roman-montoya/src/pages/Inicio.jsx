import { Link } from 'react-router-dom';
import { BarChart3, Star, ArrowRight, Book, Tag, FileText } from 'lucide-react';
import { datos } from '../data/libros';
import HeroBanner from '../components/HeroBanner';
import StatCard from '../components/StatCard';
import BookCard from '../components/BookCard';

function Inicio() {
  const totalLibros = datos.length;
  const categoriasUnicas = new Set(datos.map((d) => d.categoria)).size;
  const promedioRating = (datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros).toFixed(1);
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0);

  const estadisticas = [
    { etiqueta: 'Libros Indexados', valor: totalLibros, icono: Book, bg: '#eef2ff', color: '#4f46e5' },
    { etiqueta: 'Categorías Temáticas', valor: categoriasUnicas, icono: Tag, bg: '#e0f2fe', color: '#0284c7' },
    { etiqueta: 'Calificación Promedio', valor: promedioRating, icono: Star, bg: '#fef3c7', color: '#d97706' },
    { etiqueta: 'Páginas Totales', valor: totalPaginas.toLocaleString(), icono: FileText, bg: '#ecfdf5', color: '#059669' },
  ];

  const destacados = datos.filter((d) => d.destacado);

  return (
    <>
      <HeroBanner
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      />

      <section>
        <div className="section-header">
          <h2 className="section-title">
            <BarChart3 size={18} />
            <span>Resumen del Repositorio</span>
          </h2>
        </div>
        <div className="stats-grid">
          {estadisticas.map((stat) => (
            <StatCard
              key={stat.etiqueta}
              icono={stat.icono}
              valor={stat.valor}
              etiqueta={stat.etiqueta}
              bgColor={stat.bg}
              iconColor={stat.color}
            />
          ))}
        </div>
      </section>

      <section style={{ marginTop: '44px' }}>
        <div className="section-header">
          <h2 className="section-title">
            <Star size={18} />
            <span>Obras Destacadas</span>
          </h2>
          <Link to="/catalogo" className="btn btn-outline">
            <span>Explorar Catálogo Completo</span>
            <ArrowRight size={14} />
          </Link>
        </div>
        <div className="cards-grid">
          {destacados.map((libro) => (
            <BookCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
