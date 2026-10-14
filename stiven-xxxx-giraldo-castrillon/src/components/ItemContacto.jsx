import Icono from "./Icono";

function ItemContacto({ icono, titulo, valor }) {
  return (
    <div className="flex items-start gap-4">
      <div className="grid size-11 shrink-0 place-items-center rounded-xl bg-white/10 text-indigo-200">
        <Icono nombre={icono} className="size-5" />
      </div>
      <div>
        <strong className="block text-sm font-bold text-white">{titulo}</strong>
        <span className="text-sm text-slate-300">{valor}</span>
      </div>
    </div>
  );
}

export default ItemContacto;
