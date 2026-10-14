import Boton from "./Boton";

function SinResultados({ mensaje, textoBoton, alLimpiar }) {
  return (
    <div className="col-span-full rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-14 text-center">
      <p className="mb-5 text-base text-slate-600">{mensaje}</p>
      <Boton variante="secundario" onClick={alLimpiar}>
        {textoBoton}
      </Boton>
    </div>
  );
}

export default SinResultados;
