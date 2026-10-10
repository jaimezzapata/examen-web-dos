import { useState } from "react";
import HeroBanner from "../components/HeroBanner";
import ItemContacto from "../components/ItemContacto";
import CampoFormulario from "../components/CampoFormulario";
import Boton from "../components/Boton";
import Icono from "../components/Icono";

const canales = [
  { icono: "mail", titulo: "Correo Electrónico", valor: "contacto@libreria-archivo.org" },
  { icono: "phone", titulo: "Teléfono de Sala", valor: "+57 (604) 444-2020" },
  { icono: "map-pin", titulo: "Sede Principal", valor: "Calle 48 #72-10, Edificio Bauhaus" },
  { icono: "clock", titulo: "Horario de Consulta", valor: "Lunes a Viernes: 08:00 - 18:00" },
];

const motivos = [
  { valor: "prestamo", texto: "Consulta de libro en sala" },
  { valor: "donacion", texto: "Donación de archivo" },
  { valor: "investigacion", texto: "Apoyo en investigación académica" },
  { valor: "general", texto: "Información general" },
];

function Contacto() {
  // Un estado independiente por cada campo del formulario
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [asunto, setAsunto] = useState("");
  const [mensaje, setMensaje] = useState("");

  const limpiarFormulario = () => {
    setNombre("");
    setEmail("");
    setAsunto("");
    setMensaje("");
  };

  return (
    <>
      <HeroBanner
        compacto
        titulo="Contacto & Consultas del Archivo"
        subtitulo="Ponte en comunicación con el equipo de curaduría bibliográfica o solicita acceso a títulos en préstamo especial."
      />

      <section className="grid gap-6 lg:grid-cols-5">
        <article className="rounded-3xl bg-slate-900 p-8 text-white shadow-sm lg:col-span-2">
          <h2 className="mb-2 text-xl font-bold tracking-tight">Canales de Atención</h2>
          <p className="text-sm text-slate-300">
            Nuestros bibliotecarios e investigadores responden consultas en días hábiles.
          </p>

          <div className="mt-8 flex flex-col gap-6">
            {canales.map((canal) => (
              <ItemContacto
                key={canal.titulo}
                icono={canal.icono}
                titulo={canal.titulo}
                valor={canal.valor}
              />
            ))}
          </div>
        </article>

        <article className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm lg:col-span-3">
          <h2 className="mb-2 text-xl font-bold tracking-tight text-slate-900">Enviar Mensaje</h2>
          <p className="mb-7 text-sm text-slate-600">
            Completa el siguiente formulario para radicar tu inquietud.
          </p>

          <div>
            <CampoFormulario
              etiqueta="Nombre Completo"
              valor={nombre}
              alCambiar={setNombre}
              placeholder="Ej. Ana María Gómez"
            />
            <CampoFormulario
              etiqueta="Correo Electrónico"
              tipo="email"
              valor={email}
              alCambiar={setEmail}
              placeholder="nombre@ejemplo.com"
            />
            <CampoFormulario
              etiqueta="Motivo de Consulta"
              tipo="select"
              valor={asunto}
              alCambiar={setAsunto}
              placeholder="Selecciona un motivo..."
              opciones={motivos}
            />
            <CampoFormulario
              etiqueta="Mensaje"
              tipo="textarea"
              valor={mensaje}
              alCambiar={setMensaje}
              placeholder="Describe brevemente tu solicitud..."
            />

            <Boton className="w-full" onClick={limpiarFormulario}>
              <Icono nombre="send" className="size-4" />
              <span>Enviar Formulario</span>
            </Boton>
          </div>
        </article>
      </section>
    </>
  );
}

export default Contacto;
