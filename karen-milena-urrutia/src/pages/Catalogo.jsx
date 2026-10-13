
import { useState } from "react";
import { libros } from "../data/libros";
import LibroCard from "../components/LibroCard";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = [...new Set(
    libros.map((libro) => libro.categoria)
  )].sort();

  const librosFiltrados = libros.filter((libro) => {
    const termino = busqueda.trim().toLowerCase();

    const coincideBusqueda = [
      libro.titulo,
      libro.autor,
      libro.resumen,
      libro.editorial,
    ].some((dato) => dato.toLowerCase().includes(termino));

    const coincideCategoria =
      categoria === "" || libro.categoria === categoria;

    return coincideBusqueda && coincideCategoria;
  });

  function limpiarFiltros() {
    setBusqueda("");
    setCategoria("");
  }

  return (
    <section className="catalog-section">
      <div className="section-heading">
        <p className="eyebrow">EXPLORA LA COLECCIÓN</p>
        <h1>Catálogo de libros</h1>
        <p>Encuentra obras de arquitectura, diseño y teoría visual.</p>
      </div>

      <div className="catalog-filters">
        <label>
          Buscar libros
          <input
            type="search"
            value={busqueda}
            onChange={(evento) => setBusqueda(evento.target.value)}
            placeholder="Título, autor o editorial..."
          />
        </label>

        <label>
          Filtrar por categoría
          <select
            value={categoria}
            onChange={(evento) => setCategoria(evento.target.value)}
          >
            <option value="">Todas las categorías</option>
            {categorias.map((nombre) => (
              <option key={nombre} value={nombre}>
                {nombre}
              </option>
            ))}
          </select>
        </label>

        <button type="button" onClick={limpiarFiltros}>
          Limpiar filtros
        </button>
      </div>

      <p className="results-count">
        {librosFiltrados.length} de {libros.length} registros
      </p>

      {librosFiltrados.length > 0 ? (
        <div className="books-grid">
          {librosFiltrados.map((libro) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      ) : (
        <div className="empty-results">
          <h2>No se encontraron libros</h2>
          <p>Prueba con otro término o cambia los filtros.</p>
          <button type="button" onClick={limpiarFiltros}>
            Limpiar filtros
          </button>
        </div>
      )}
    </section>
  );
}

export default Catalogo;
