const clases = {
  Arquitectura: "border-indigo-200 bg-indigo-50 text-indigo-700",
  "Diseño Industrial": "border-sky-200 bg-sky-100 text-sky-700",
  "Diseño Gráfico": "border-violet-200 bg-violet-50 text-violet-700",
  Estética: "border-amber-200 bg-amber-100 text-amber-700",
  Tipografía: "border-rose-200 bg-rose-100 text-rose-700",
};

function EtiquetaCategoria({ categoria }) {
  const clase = clases[categoria] || clases["Diseño Industrial"];

  return (
    <span
      className={`mb-3 inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-bold uppercase tracking-wide ${clase}`}
    >
      {categoria}
    </span>
  );
}

export default EtiquetaCategoria;
