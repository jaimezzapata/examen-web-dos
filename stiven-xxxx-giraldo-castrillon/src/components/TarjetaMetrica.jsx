import Icono from "./Icono";

// "tono" recibe las clases de color del icono, por ejemplo "bg-indigo-50 text-indigo-600"
function TarjetaMetrica({ etiqueta, valor, icono, tono }) {
  return (
    <article className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition duration-200 hover:-translate-y-0.5 hover:shadow-md">
      <div className={`grid size-12 shrink-0 place-items-center rounded-xl ${tono}`}>
        <Icono nombre={icono} className="size-5" />
      </div>
      <div className="flex flex-col">
        <span className="text-3xl font-extrabold leading-none text-slate-900">{valor}</span>
        <span className="mt-1.5 text-sm font-semibold text-slate-600">{etiqueta}</span>
      </div>
    </article>
  );
}

export default TarjetaMetrica;
