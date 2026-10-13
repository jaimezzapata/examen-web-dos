
import { useState } from "react";

function Contacto() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [motivo, setMotivo] = useState("");
  const [mensaje, setMensaje] = useState("");

  function limpiarFormulario() {
    setNombre("");
    setCorreo("");
    setMotivo("");
    setMensaje("");
  }

  return (
    <section className="contact-section">
      <div className="section-heading">
        <p className="eyebrow">ESTAMOS PARA AYUDARTE</p>
        <h1>Contacto</h1>
        <p>
          Escríbenos para consultas sobre nuestra colección y los servicios
          de la biblioteca.
        </p>
      </div>

      <div className="contact-layout">
        <aside className="contact-information">
          <article className="contact-info-card">
            <h2>Correo electrónico</h2>
            <p>contacto@libreria-archivo.org</p>
          </article>

          <article className="contact-info-card">
            <h2>Teléfono</h2>
            <p>+57 (604) 444-2020</p>
          </article>

          <article className="contact-info-card">
            <h2>Dirección</h2>
            <p>Calle 48 #72-10, Edificio Bauhaus</p>
          </article>

          <article className="contact-info-card">
            <h2>Horario de atención</h2>
            <p>Lunes a Viernes: 08:00 - 18:00</p>
          </article>
        </aside>

        <div className="contact-form-card">
          <h2>Envíanos un mensaje</h2>

          <div className="contact-form">
            <label>
              Nombre completo
              <input
                type="text"
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
                placeholder="Escribe tu nombre"
              />
            </label>

            <label>
              Correo electrónico
              <input
                type="email"
                value={correo}
                onChange={(evento) => setCorreo(evento.target.value)}
                placeholder="nombre@correo.com"
              />
            </label>

            <label>
              Motivo de consulta
              <select
                value={motivo}
                onChange={(evento) => setMotivo(evento.target.value)}
              >
                <option value="">Selecciona un motivo</option>
                <option value="prestamo">Préstamo</option>
                <option value="donacion">Donación</option>
                <option value="investigacion">Investigación</option>
                <option value="general">Consulta general</option>
              </select>
            </label>

            <label>
              Mensaje
              <textarea
                rows="5"
                value={mensaje}
                onChange={(evento) => setMensaje(evento.target.value)}
                placeholder="Escribe tu consulta..."
              />
            </label>

            <button type="button" onClick={limpiarFormulario}>
              Limpiar formulario
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contacto;
