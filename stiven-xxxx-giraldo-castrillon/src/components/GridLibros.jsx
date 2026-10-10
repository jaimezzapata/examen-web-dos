import TarjetaLibro from "./TarjetaLibro";

function GridLibros({ libros, children }) {
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
      {libros.map((libro) => (
        <TarjetaLibro
          key={libro.id}
          titulo={libro.titulo}
          autor={libro.autor}
          categoria={libro.categoria}
          icono={libro.icono}
          anio={libro.anio}
          paginas={libro.paginas}
          calificacion={libro.calificacion}
          editorial={libro.editorial}
          isbn={libro.isbn}
          resumen={libro.resumen}
        />
      ))}
      {children}
    </div>
  );
}

export default GridLibros;
