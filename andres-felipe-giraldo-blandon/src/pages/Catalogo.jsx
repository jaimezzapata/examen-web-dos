import { useState } from 'react'
import { libros } from '../data/libros'
import HeroBanner from '../components/HeroBanner'
import BarraFiltros from '../components/BarraFiltros'
import LibroCard from '../components/LibroCard'

const categorias = Array.from(new Set(libros.map((libro) => libro.categoria))).sort()

function Catalogo() {
  const [busqueda, setBusqueda] = useState('')
  const [categoria, setCategoria] = useState('')

  const termino = busqueda.toLowerCase().trim()

  const resultados = libros.filter((libro) => {
    const coincideTexto =
      libro.titulo.toLowerCase().includes(termino) ||
      libro.autor.toLowerCase().includes(termino) ||
      libro.resumen.toLowerCase().includes(termino) ||
      libro.editorial.toLowerCase().includes(termino)

    const coincideCategoria = categoria === '' || libro.categoria === categoria

    return coincideTexto && coincideCategoria
  })

  const limpiarFiltros = () => {
    setBusqueda('')
    setCategoria('')
  }

  return (
    <>
      <HeroBanner
        compacto
        titulo="Colección de Textos & Documentos"
        subtitulo="Explora el catálogo completo de publicaciones, ensayos y tratados de diseño."
      />

      <BarraFiltros
        busqueda={busqueda}
        onBusqueda={setBusqueda}
        categoria={categoria}
        onCategoria={setCategoria}
        categorias={categorias}
        textoConteo={`${resultados.length} de ${libros.length} registros`}
      />

      <section>
        <div className="cards-grid">
          {resultados.length === 0 ? (
            <div
              style={{
                gridColumn: '1 / -1',
                padding: '48px',
                background: 'white',
                borderRadius: '12px',
                textAlign: 'center',
                border: '1px dashed var(--border-medium)',
              }}
            >
              <p
                style={{
                  fontSize: '1.05rem',
                  color: 'var(--text-muted)',
                  marginBottom: '16px',
                }}
              >
                No se encontraron registros con los filtros actuales.
              </p>
              <button className="btn btn-secondary" onClick={limpiarFiltros}>
                Limpiar Filtros
              </button>
            </div>
          ) : (
            resultados.map((libro) => <LibroCard key={libro.id} libro={libro} />)
          )}
        </div>
      </section>
    </>
  )
}

export default Catalogo
