export function BookCard({ book }) {
  return (
    <div className="book-card">
      <h3>{book.title}</h3>
      <p><strong>Autor:</strong> {book.author}</p>
      <p><strong>Categoría:</strong> {book.category}</p>
      <p><strong>Año:</strong> {book.year}</p>
      <span className={book.available ? "badge available" : "badge unavailable"}>
        {book.available ? "Disponible" : "No disponible"}
      </span>
    </div>
  );
}