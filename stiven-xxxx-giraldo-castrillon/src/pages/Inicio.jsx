import { datos } from "../data/datos";
import HeroBanner from "../components/HeroBanner";
import EncabezadoSeccion from "../components/EncabezadoSeccion";
import TarjetaMetrica from "../components/TarjetaMetrica";
import GridLibros from "../components/GridLibros";
import Boton from "../components/Boton";
import Icono from "../components/Icono";

function Inicio() {
  const totalLibros = datos.length;
  const categoriasUnicas = new Set(datos.map((d) => d.categoria)).size;
  const promedioRating = (
    datos.reduce((acc, d) => acc + d.calificacion, 0) / totalLibros
  ).toFixed(1);
  const totalPaginas = datos.reduce((acc, d) => acc + d.paginas, 0);

  const metricas = [
    { etiqueta: "Libros Indexados", valor: totalLibros, icono: "book", tono: "bg-indigo-50 text-indigo-600" },
    { etiqueta: "Categorías Temáticas", valor: categoriasUnicas, icono: "tag", tono: "bg-sky-100 text-sky-600" },
    { etiqueta: "Calificación Promedio", valor: promedioRating, icono: "star", tono: "bg-amber-100 text-amber-600" },
    { etiqueta: "Páginas Totales", valor: totalPaginas.toLocaleString(), icono: "file-text", tono: "bg-emerald-50 text-emerald-600" },
  ];

  const destacados = datos.filter((libro) => libro.destacado);

  return (
    <>
      <HeroBanner
        etiqueta="Colección abierta"
        titulo="Biblioteca de Diseño & Teoría Visual"
        subtitulo="Colección y catálogo especializado en teoría visual, arquitectura, tipografía y diseño editorial."
      >
        <Boton to="/catalogo">
          <span>Explorar catálogo</span>
          <Icono nombre="arrow-right" className="size-4" />
        </Boton>
        <Boton to="/contacto" variante="secundario">
          Contactar al archivo
        </Boton>
      </HeroBanner>

      <section>
        <EncabezadoSeccion titulo="Resumen del Repositorio" icono="bar-chart-3" />
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {metricas.map((metrica) => (
            <TarjetaMetrica
              key={metrica.etiqueta}
              etiqueta={metrica.etiqueta}
              valor={metrica.valor}
              icono={metrica.icono}
              tono={metrica.tono}
            />
          ))}
        </div>
      </section>

      <section className="mt-14">
        <EncabezadoSeccion titulo="Obras Destacadas" icono="star">
          <Boton to="/catalogo" variante="contorno">
            <span>Ver catálogo completo</span>
            <Icono nombre="arrow-right" className="size-3.5" />
          </Boton>
        </EncabezadoSeccion>
        <GridLibros libros={destacados} />
      </section>
    </>
  );
}

export default Inicio;
