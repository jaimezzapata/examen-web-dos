import Icono from "./Icono";

function EncabezadoSeccion({ titulo, icono, children }) {
  return (
    <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
      <h2 className="flex items-center gap-2.5 text-xl font-bold tracking-tight text-slate-900">
        <Icono nombre={icono} className="size-5 text-primary" />
        <span>{titulo}</span>
      </h2>
      {children}
    </div>
  );
}

export default EncabezadoSeccion;
