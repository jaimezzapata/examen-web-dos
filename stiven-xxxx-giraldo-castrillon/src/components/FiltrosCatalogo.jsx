import Icono from "./Icono";

const claseChip = (activo) =>
  `cursor-pointer rounded-full border px-4 py-1.5 text-sm font-semibold transition-colors duration-200 ${
    activo
      ? "border-slate-900 bg-slate-900 text-white"
      : "border-slate-200 bg-white text-slate-600 hover:border-slate-300 hover:bg-slate-100"
  }`;

function FiltrosCatalogo({
  busqueda,
  categoria,
  categorias,
  textoConteo,
  alCambiarBusqueda,
  alCambiarCategoria,
}) {
  return (
    <section className="mb-8 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
      <div className="relative">
        <Icono
          nombre="search"
          className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-slate-400"
        />
        <input
          type="text"
          className="w-full rounded-xl border border-slate-200 bg-slate-100 py-3 pl-11 pr-4 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15"
          placeholder="Buscar por título, autor o concepto..."
          value={busqueda}
          onChange={(e) => alCambiarBusqueda(e.target.value)}
        />
      </div>

      <div className="flex flex-wrap items-center justify-between gap-3">
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            aria-pressed={categoria === ""}
            className={claseChip(categoria === "")}
            onClick={() => alCambiarCategoria("")}
          >
            Todas
          </button>
          {categorias.map((cat) => (
            <button
              key={cat}
              type="button"
              aria-pressed={categoria === cat}
              className={claseChip(categoria === cat)}
              onClick={() => alCambiarCategoria(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        <span className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 bg-slate-100 px-3 py-1 text-xs font-bold uppercase tracking-wide text-slate-600">
          <Icono nombre="layers" className="size-3.5" />
          <span>{textoConteo}</span>
        </span>
      </div>
    </section>
  );
}

export default FiltrosCatalogo;
