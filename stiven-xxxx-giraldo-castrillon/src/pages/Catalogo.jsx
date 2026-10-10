import { useState } from "react";
import { datos } from "../data/datos";
import HeroBanner from "../components/HeroBanner";
import FiltrosCatalogo from "../components/FiltrosCatalogo";
import GridLibros from "../components/GridLibros";
import SinResultados from "../components/SinResultados";

function Catalogo() {
  const [busqueda, setBusqueda] = useState("");
  const [categoria, setCategoria] = useState("");

  const categorias = Array.from(new Set(datos.map((d) => d.categoria))).sort();
  const termino = busqueda.toLowerCase().trim();

  const resultados = datos.filter((item) => {
    const coincideTexto =
      item.titulo.toLowerCase().includes(termino) ||
      item.autor.toLowerCase().includes(termino) ||
      item.resumen.toLowerCase().includes(termino) ||
      item.editorial.toLowerCase().includes(termino);

    const coincideCategoria = categoria === "" || item.categoria === categoria;

    return coincideTexto && coincideCategoria;
  });

  const limpiarFiltros = () => {
    setBusqueda("");
    setCategoria("");
  };

  return (
    <>
      <HeroBanner
        compacto
        titulo="Colección de Textos & Documentos"
        subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
      />

      <FiltrosCatalogo
        busqueda={busqueda}
        categoria={categoria}
        categorias={categorias}
        textoConteo={`${resultados.length} de ${datos.length} registros`}
        alCambiarBusqueda={setBusqueda}
        alCambiarCategoria={setCategoria}
      />

      <section>
        <GridLibros libros={resultados}>
          {resultados.length === 0 && (
            <SinResultados
              mensaje="No se encontraron registros con los filtros actuales."
              textoBoton="Limpiar Filtros"
              alLimpiar={limpiarFiltros}
            />
          )}
        </GridLibros>
      </section>
    </>
  );
}

export default Catalogo;
