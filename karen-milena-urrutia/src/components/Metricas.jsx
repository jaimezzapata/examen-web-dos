
function Metricas({ libros }) {
  const totalLibros = libros.length;

  const totalCategorias = new Set(
    libros.map((libro) => libro.categoria)
  ).size;

  const promedioCalificacion =
    totalLibros > 0
      ? (
          libros.reduce(
            (total, libro) => total + libro.calificacion,
            0
          ) / totalLibros
        ).toFixed(1)
      : "0.0";

  const totalPaginas = libros.reduce(
    (total, libro) => total + libro.paginas,
    0
  );

  const metricas = [
    { titulo: "Libros indexados", valor: totalLibros },
    { titulo: "Categorías", valor: totalCategorias },
    { titulo: "Calificación promedio", valor: promedioCalificacion },
    { titulo: "Total de páginas", valor: totalPaginas },
  ];

  return (
    <section className="metrics-grid" aria-label="Métricas de la biblioteca">
      {metricas.map((metrica) => (
        <article className="metric-card" key={metrica.titulo}>
          <p>{metrica.titulo}</p>
          <strong>{metrica.valor}</strong>
        </article>
      ))}
    </section>
  );
}

export default Metricas;
