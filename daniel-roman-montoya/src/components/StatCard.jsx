function StatCard({ icono: Icono, valor, etiqueta, bgColor, iconColor }) {
  return (
    <article className="stat-card">
      <div
        className="stat-icon-wrapper"
        style={{ backgroundColor: bgColor, color: iconColor }}
      >
        <Icono size={18} />
      </div>
      <div className="stat-content">
        <span className="stat-number">{valor}</span>
        <span className="stat-label">{etiqueta}</span>
      </div>
    </article>
  );
}

export default StatCard;
