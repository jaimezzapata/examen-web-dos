function HeroBanner({ titulo, subtitulo, etiqueta, compacto = false, children }) {
  return (
    <section
      className={`relative mb-10 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm ${
        compacto ? "px-8 py-10 sm:px-12" : "px-8 py-14 sm:px-14 sm:py-20"
      }`}
    >
      {/* Mancha de color decorativa */}
      <div className="pointer-events-none absolute -right-24 -top-24 size-80 rounded-full bg-primary-light blur-3xl" />

      <div className="relative">
        {etiqueta && (
          <span className="mb-4 inline-flex items-center rounded-full border border-primary-border bg-primary-light px-3 py-1 text-xs font-bold uppercase tracking-wider text-primary">
            {etiqueta}
          </span>
        )}

        <h1
          className={`max-w-3xl font-extrabold leading-tight tracking-tight text-slate-900 ${
            compacto ? "text-3xl sm:text-4xl" : "text-4xl sm:text-5xl"
          }`}
        >
          {titulo}
        </h1>

        <p className="mt-4 max-w-2xl text-base text-slate-600 sm:text-lg">{subtitulo}</p>

        {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
      </div>
    </section>
  );
}

export default HeroBanner;
