const claseControl =
  "w-full rounded-xl border border-slate-200 bg-slate-100 px-4 py-3 text-sm text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-primary focus:bg-white focus:ring-4 focus:ring-primary/15";

function CampoFormulario({ etiqueta, tipo = "text", valor, alCambiar, placeholder, opciones }) {
  let control;

  if (tipo === "select") {
    control = (
      <select
        className={`${claseControl} cursor-pointer`}
        value={valor}
        onChange={(e) => alCambiar(e.target.value)}
      >
        <option value="">{placeholder}</option>
        {opciones.map((opcion) => (
          <option key={opcion.valor} value={opcion.valor}>
            {opcion.texto}
          </option>
        ))}
      </select>
    );
  } else if (tipo === "textarea") {
    control = (
      <textarea
        className={`${claseControl} min-h-32 resize-y`}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => alCambiar(e.target.value)}
      />
    );
  } else {
    control = (
      <input
        type={tipo}
        className={claseControl}
        placeholder={placeholder}
        value={valor}
        onChange={(e) => alCambiar(e.target.value)}
      />
    );
  }

  return (
    <label className="mb-5 flex flex-col gap-1.5">
      <span className="text-sm font-semibold text-slate-900">{etiqueta}</span>
      {control}
    </label>
  );
}

export default CampoFormulario;
