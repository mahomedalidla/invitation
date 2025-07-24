import React, { useState } from 'react';

const GraduationInvitation = ({
  doctorName = "Dra. Karla Ayon",
  degree = "Doctorado en Ciencias",
  university = "Instituto Tecnológico de Tepic",
  date = "19 de Agosto de 2025",
  time = "11:00 hrs",
  location = "Auditorio Principal, Edificio de Posgrado",
  rsvpDate = "1 de Agosto de 2025",
  contactEmail = "confirmacion@ejemplo.com",
  message = "Nos complace invitarle a celebrar la culminación de mis estudios de doctorado. Su presencia sería un honor en este día tan significativo.",
  buttonText = "Ver Ubicación"
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 flex items-center justify-center p-4 font-sans">
      <div className="bg-white shadow-2xl rounded-3xl max-w-md w-full overflow-hidden border border-gray-200">
        <div className="p-6 sm:p-8 text-center relative">
          {/* Gorro de graduación SVG */}
          <div className="w-14 h-14 mx-auto mb-4 text-black">
            <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2L1 7l11 5 9-4.09V17h2V7L12 2zm0 13.09l-8-3.64V11l8 3.64 8-3.64v.45l-8 3.64zM12 22c-2.21 0-4-1.79-4-4h2a2 2 0 004 0h2c0 2.21-1.79 4-4 4z" />
            </svg>
          </div>

          <p className="text-sm text-gray-600 uppercase tracking-widest">Celebración de Graduación</p>

          {/* Nombre con tipografía elegante */}
          <h1 className="text-4xl font-dancing text-gray-900 mb-3">{doctorName}</h1>

          <p className="text-lg text-gray-800 mb-6">
            Ha obtenido el grado de <br />
            <span className="font-semibold">{degree}</span>
          </p>

          <div className="space-y-3 text-gray-700 mb-6">
            <p><strong>Fecha:</strong> {date}</p>
            <p><strong>Hora:</strong> {time}</p>
            <p><strong>Lugar:</strong> {location}</p>
            <p className="italic">{university}</p>
          </div>

          <p className="text-sm text-gray-600 mb-8 leading-relaxed">{message}</p>

          {/* Botón que abre diálogo */}
          <div className="flex flex-col sm:flex-row sm:justify-center gap-3 mt-6">
  {/* Botón para ver ubicación */}
  <button
    onClick={() => setOpen(true)}
    className="flex items-center justify-center px-5 py-2.5 rounded-full bg-black text-white text-sm font-medium hover:bg-gray-800 transition"
  >
    📍 Ver ubicación
  </button>

  {/* Botón para confirmar por WhatsApp */}
  <a
    href="https://wa.me/5213113001707?text=%C2%A1S%C3%AD%20asistir%C3%A9%20a%20la%20graduaci%C3%B3n%20de%20la%20Dra.%20Karla%20Ayon!"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center justify-center px-5 py-2.5 rounded-full bg-green-600 text-white text-sm font-medium hover:bg-green-700 transition"
  >
    ✅ Confirmar asistencia
  </a>
</div>
        </div>

        <div className="bg-gray-50 text-xs text-gray-500 text-center py-4 border-t border-gray-200">
          <p>Favor de confirmar asistencia antes del {rsvpDate}</p>
          <p>
            Contacto:{" "}
            <a href={`mailto:${contactEmail}`} className="text-black hover:underline">
              {contactEmail}
            </a>
          </p>
        </div>
      </div>

      {/* Modal */}
      {open && (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center">
          <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center relative">
            <h2 className="text-xl font-semibold mb-4">Ubicación del Evento</h2>
            <p className="text-gray-700 mb-4">{location}</p>
            <iframe
              className="w-full h-64 rounded-lg mb-4"
              src="https://www.google.com/maps?q=Instituto+Tecnologico+de+Tepic&output=embed"
              allowFullScreen
              loading="lazy"
            />
            <button
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-2 bg-black text-white rounded-full hover:bg-gray-800 transition"
            >
              Cerrar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default GraduationInvitation;