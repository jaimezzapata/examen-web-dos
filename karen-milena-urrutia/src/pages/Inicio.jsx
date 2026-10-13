
import { libros } from "../data/libros";
import Metricas from "../components/Metricas";
import LibroCard from "../components/LibroCard";

function Inicio() {
  const librosDestacados = libros.filter(
    (libro) => libro.destacado
  );

  return (
    <>
      <section className="hero">
        <p className="eyebrow">LIBRERÍA ARCHIVO</p>
        <h1>Biblioteca de Diseño &amp; Teoría Visual</h1>
        <p>
          Colección y catálogo especializado en teoría visual,
          arquitectura, tipografía y diseño editorial.
        </p>
      </section>

      <Metricas libros={libros} />

      <section className="featured-section">
        <div className="section-heading">
          <p className="eyebrow">SELECCIÓN EDITORIAL</p>
          <h2>Libros destacados</h2>
          <p>Una selección de obras fundamentales del diseño.</p>
        </div>

        <div className="books-grid">
          {librosDestacados.map((libro) => (
            <LibroCard key={libro.id} libro={libro} />
          ))}
        </div>
      </section>
    </>
  );
}

export default Inicio;
