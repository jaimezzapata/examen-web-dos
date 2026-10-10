import Icono from "./Icono";
import EtiquetaCategoria from "./EtiquetaCategoria";

function TarjetaLibro({
  titulo,
  autor,
  categoria,
  icono,
  anio,
  paginas,
  calificacion,
  editorial,
  isbn,
  resumen,
}) {
  return (
    <article className="flex flex-col rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition duration-200 hover:-translate-y-1 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-900/10">
      <div className="flex flex-1 flex-col">
        <div className="mb-4 flex items-center justify-between">
          <div className="grid size-11 place-items-center rounded-xl border border-slate-200 bg-slate-100 text-primary">
            <Icono nombre={icono} className="size-5" />
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full bg-accent-light px-2.5 py-1 text-xs font-bold text-amber-800">
            <Icono nombre="star" className="size-3.5 fill-accent text-accent" />
            <span>{calificacion.toFixed(1)}</span>
          </span>
        </div>

        <div>
          <EtiquetaCategoria categoria={categoria} />
        </div>
        <h3 className="text-lg font-bold leading-snug text-slate-900">{titulo}</h3>
        <p className="mb-3 mt-1 text-sm font-medium text-slate-600">
          Por {autor} ({anio})
        </p>
        <p className="mb-5 flex-1 text-sm leading-relaxed text-slate-600">{resumen}</p>

        <div className="mb-4 flex flex-col gap-1 rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-xs text-slate-600">
          <span>
            Editorial: <strong className="text-slate-900">{editorial}</strong>
          </span>
          <span>
            ISBN: <code className="font-mono">{isbn}</code>
          </span>
        </div>
      </div>

      <div className="flex items-center justify-between border-t border-slate-200 pt-4 text-xs font-semibold text-slate-400">
        <span className="inline-flex items-center gap-1.5">
          <Icono nombre="book-marked" className="size-3.5" />
          <span>{paginas} páginas</span>
        </span>
        <span className="inline-flex items-center gap-1.5">
          <Icono nombre="calendar" className="size-3.5" />
          <span>Edición {anio}</span>
        </span>
      </div>
    </article>
  );
}

export default TarjetaLibro;
