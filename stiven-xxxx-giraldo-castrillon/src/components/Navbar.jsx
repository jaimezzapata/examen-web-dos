import { Link, NavLink } from "react-router-dom";
import Icono from "./Icono";

function Navbar({ enlaces }) {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200/70 bg-white/70 backdrop-blur-lg">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <Link
          to="/"
          className="flex items-center gap-2.5 text-lg font-extrabold tracking-tight text-slate-900"
        >
          <span className="grid size-9 place-items-center rounded-xl bg-primary text-white shadow-md shadow-primary/30">
            <Icono nombre="book-open" className="size-5" />
          </span>
          <span className="hidden sm:inline">Librería Archivo</span>
        </Link>

        <nav>
          <ul className="flex items-center gap-1">
            {enlaces.map((enlace) => (
              <li key={enlace.ruta}>
                <NavLink
                  to={enlace.ruta}
                  end={enlace.ruta === "/"}
                  className={({ isActive }) =>
                    `inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                      isActive
                        ? "bg-slate-900 text-white"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    }`
                  }
                >
                  <Icono nombre={enlace.icono} className="size-3.5" />
                  <span>{enlace.texto}</span>
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
