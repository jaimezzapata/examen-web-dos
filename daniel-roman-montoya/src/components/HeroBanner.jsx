function HeroBanner({ titulo, subtitulo, estiloPadding }) {
  return (
    <section className="hero-banner" style={estiloPadding ? { padding: estiloPadding } : undefined}>
      <h1 className="hero-title">{titulo}</h1>
      <p className="hero-subtitle">{subtitulo}</p>
    </section>
  );
}

export default HeroBanner;
