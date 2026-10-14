function Footer({ marca, descripcion, nota }) {
  return (
    <footer className="border-t border-slate-200 bg-white py-6 text-sm text-slate-600">
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6">
        <span>
          <strong className="font-bold text-slate-900">{marca}</strong> &bull; {descripcion}
        </span>
        <span className="text-slate-400">{nota}</span>
      </div>
    </footer>
  );
}

export default Footer;
