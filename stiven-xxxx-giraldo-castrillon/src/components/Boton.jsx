import { Link } from "react-router-dom";

const base =
  "inline-flex cursor-pointer items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition duration-200";

const variantes = {
  primario:
    "bg-primary text-white shadow-md shadow-primary/25 hover:-translate-y-0.5 hover:bg-primary-hover hover:shadow-lg hover:shadow-primary/30",
  secundario:
    "border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-100",
  contorno:
    "border border-primary text-primary hover:bg-primary-light",
};

// Si recibe "to" se comporta como enlace del router; si no, como botón con onClick
function Boton({ variante = "primario", to, onClick, className = "", children }) {
  const clases = `${base} ${variantes[variante]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={clases}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" className={clases} onClick={onClick}>
      {children}
    </button>
  );
}

export default Boton;
