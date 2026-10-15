import { useState } from 'react';
import { Layers, Search, X } from 'lucide-react';
import { datos } from '../data/libros';
import BookCard from '../components/BookCard';
import HeroBanner from '../components/HeroBanner';

function Catalogo() {
  const [busqueda, setBusqueda] = useState('');
  const [categoriaSeleccionada, setCategoriaSeleccionada] = useState('');
  const categorias = [...new Set(datos.map((libro) => libro.categoria))].sort();
  const termino = busqueda.trim().toLowerCase();
  const resultados = datos.filter((libro) => {
    const coincideBusqueda = [libro.titulo, libro.autor, libro.resumen, libro.editorial]
      .some((valor) => valor.toLowerCase().includes(termino));
    const coincideCategoria = !categoriaSeleccionada || libro.categoria === categoriaSeleccionada;
    return coincideBusqueda && coincideCategoria;
  });

  function limpiarFiltros() {
    setBusqueda('');
    setCategoriaSeleccionada('');
  }

  return (
    <>
      <HeroBanner
        titulo="Colección de Textos & Documentos"
        subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
        estiloPadding="28px 36px"
      />

      <section className="filter-toolbar" aria-label="Filtros del catálogo">
        <label className="search-group" htmlFor="inputBusqueda">
          <Search className="search-icon-pos" size={16} aria-hidden="true" />
          <input
            id="inputBusqueda"
            className="search-input"
            type="search"
            placeholder="Buscar por título, autor o concepto..."
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
          />
        </label>

        <label className="visually-hidden" htmlFor="selectCategoria">Filtrar por categoría</label>
        <select
          id="selectCategoria"
          className="select-category"
          value={categoriaSeleccionada}
          onChange={(evento) => setCategoriaSeleccionada(evento.target.value)}
        >
          <option value="">Todas las categorías</option>
          {categorias.map((categoria) => (
            <option key={categoria} value={categoria}>{categoria}</option>
          ))}
        </select>

        <span className="badge badge-neutral result-count" aria-live="polite">
          <Layers size={14} aria-hidden="true" />
          {resultados.length} de {datos.length} registros
        </span>
      </section>

      <section aria-label="Libros del catálogo">
        {resultados.length > 0 ? (
          <div className="cards-grid">
            {resultados.map((libro) => <BookCard key={libro.id} libro={libro} />)}
          </div>
        ) : (
          <div className="empty-state">
            <p>No se encontraron registros con los filtros actuales.</p>
            <button className="btn btn-secondary" type="button" onClick={limpiarFiltros}>
              <X size={15} />
              Limpiar filtros
            </button>
          </div>
        )}
      </section>
    </>
  );
}

export default Catalogo;