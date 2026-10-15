import { useState } from 'react';
import { Clock3, Mail, MapPin, Phone, RotateCcw } from 'lucide-react';
import HeroBanner from '../components/HeroBanner';

function Contacto() {
  const [nombre, setNombre] = useState('');
  const [email, setEmail] = useState('');
  const [asunto, setAsunto] = useState('');
  const [mensaje, setMensaje] = useState('');

  function limpiarFormulario() {
    setNombre('');
    setEmail('');
    setAsunto('');
    setMensaje('');
  }

  return (
    <>
      <HeroBanner
        titulo="Contacto & Consultas del Archivo"
        subtitulo="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="contact-layout">
        <article className="contact-card">
          <h2 className="contact-title">Canales de Atención</h2>
          <p className="contact-description">
            Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
          </p>
          <div className="contact-info-list">
            <div className="contact-info-item">
              <div className="contact-icon-box"><Mail size={19} /></div>
              <div><strong>Correo Electrónico</strong><span>contacto@libreria-archivo.org</span></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon-box"><Phone size={19} /></div>
              <div><strong>Teléfono de Sala</strong><span>+57 (604) 444-2020</span></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon-box"><MapPin size={19} /></div>
              <div><strong>Sede Principal</strong><span>Calle 48 #72-10, Edificio Bauhaus</span></div>
            </div>
            <div className="contact-info-item">
              <div className="contact-icon-box"><Clock3 size={19} /></div>
              <div><strong>Horario de Consulta</strong><span>Lunes a Viernes: 08:00 - 18:00</span></div>
            </div>
          </div>
        </article>

        <article className="contact-card">
          <h2 className="contact-title">Enviar Mensaje</h2>
          <p className="contact-description form-intro">
            Completa el siguiente formulario para radicar tu inquietud.
          </p>
          <form className="contact-form">
            <div className="form-group">
              <label className="form-label" htmlFor="nombre">Nombre Completo</label>
              <input
                className="form-control"
                id="nombre"
                type="text"
                placeholder="Ej. Ana María Gómez"
                value={nombre}
                onChange={(evento) => setNombre(evento.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="email">Correo Electrónico</label>
              <input
                className="form-control"
                id="email"
                type="email"
                placeholder="nombre@ejemplo.com"
                value={email}
                onChange={(evento) => setEmail(evento.target.value)}
              />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="asunto">Motivo de Consulta</label>
              <select
                className="form-control"
                id="asunto"
                value={asunto}
                onChange={(evento) => setAsunto(evento.target.value)}
              >
                <option value="">Selecciona un motivo...</option>
                <option value="prestamo">Consulta de libro en sala</option>
                <option value="donacion">Donación de archivo</option>
                <option value="investigacion">Apoyo en investigación académica</option>
                <option value="general">Información general</option>
              </select>
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="mensaje">Mensaje</label>
              <textarea
                className="form-control"
                id="mensaje"
                placeholder="Describe brevemente tu solicitud..."
                value={mensaje}
                onChange={(evento) => setMensaje(evento.target.value)}
              />
            </div>
            <button className="btn btn-primary submit-button" type="button" onClick={limpiarFormulario}>
              <RotateCcw size={15} />
              Limpiar formulario
            </button>
          </form>
        </article>
      </section>
    </>
  );
}

export default Contacto;