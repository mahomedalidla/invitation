import React, { useState } from "react";
import bk from "../bk.jpeg"; // ajusta la ruta según donde esté tu componente

const GraduationInvitation = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Invitación visible solo en móvil */}
      <div className="invitation-mobile">
        <div
          className="min-h-screen flex items-center justify-center p-6"
          style={{
            background: "#f0f0f5",
            fontFamily: `"Century Gothic", "Apple Gothic", Arial, sans-serif`,
          }}
        >
          <div
            className="relative max-w-md w-full rounded-3xl shadow-xl borderoverflow-hidden"
            style={{ paddingTop: "40%" }}
          >
            {/* Imagen de fondo con preservación de proporción */}
            <div className="absolute inset-0">
              <img
                src={bk}
                alt="fondo"
                className="w-full h-full object-contain"
                style={{
                  objectFit: "contain",
                  filter: "brightness(1)",
                  imageRendering: "auto",
                }}
              />
            </div>

            {/* Contenido encima */}
            <div className="p-8 text-center relative">
              <p
                className="text-sm uppercase tracking-widest mb-2"
                style={{ letterSpacing: "2px" }}
              >
                Acompáñame en esta celebración
              </p>

              <h1 className="text-sl mb-1" style={{ lineHeight: 1.1 }}>
                Obtención de Grado <br />{" "}
                <span style={{ fontSize: "0.8em" }}> (o no)😅</span>
              </h1>

              <h2
                className="text-3xl mt-2 mb-4"
                style={{ fontWeight: 700, letterSpacing: "0.5px" }}
              >
                Doctorado <br />
                Ciencias en Alimentos
              </h2>

              <div
                className="text-center mb-6"
                style={{ fontSize: "1rem", lineHeight: 1.3, color: "#2d2d2d" }}
              >
                <p className="mb-1">
                  <strong style={{ fontWeight: "600" }}>Fecha:</strong> 19 de
                  Agosto de 2025
                </p>
                <p className="mb-1">
                  <strong style={{ fontWeight: "600" }}>Hora:</strong> 1:00 pm
                </p>
                <p className="mb-1">
                  <strong style={{ fontWeight: "600" }}>Lugar:</strong> Higos
                  #36 Col. El paraíso
                </p>
              </div>

              <p className="mb-8" style={{ fontSize: "1rem", lineHeight: 1.2 }}>
                Tu presencia es importante para mí <span>😊</span>
              </p>

              <div className="flex flex-col sm:flex-row sm:justify-center gap-3">
                <button
                  onClick={() => setOpen(true)}
                  className="px-6 py-2 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition"
                  style={{
                    fontFamily: `"Century Gothic", "Apple Gothic", Arial, sans-serif`,
                  }}
                >
                  📍 Ver ubicación
                </button>
                <a
                  href="https://wa.link/vropin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-2 rounded-full bg-green-600 text-white text-sm font-medium hover:opacity-90 transition"
                  style={{
                    fontFamily: `"Century Gothic", "Apple Gothic", Arial, sans-serif`,
                  }}
                >
                  ✅ Confirmar asistencia
                </a>
              </div>
            </div>

            {/* Modal de ubicación */}
            {open && (
              <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
                <div
                  className="bg-white rounded-2xl shadow-2xl p-6 max-w-sm w-full text-center relative"
                  style={{
                    fontFamily: `"Century Gothic", "Apple Gothic", Arial, sans-serif`,
                  }}
                >
                  <h2 className="text-xl font-semibold mb-3">
                    Ubicación del Evento
                  </h2>
                  <p className="text-gray-700 mb-4">
                    Higgs #36 Col. El paraíso
                  </p>
                  <iframe
                    className="w-full h-48 rounded-lg mb-4"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d927.8169641003867!2d-104.87528923037915!3d21.5363792987652!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x842737bed467b551%3A0x4817f9585caec903!2sHigos%2036%2C%20El%20Para%C3%ADso%2C%2063038%20Tepic%2C%20Nay.!5e0!3m2!1ses-419!2smx!4v1754102523955!5m2!1ses-419!2smx"
                    allowFullScreen
                    loading="lazy"
                    title="mapa"
                  />
                  <div className="flex justify-center gap-6 mb-2">
                    <button
                      onClick={() => setOpen(false)}
                      className="px-5 py-2 bg-black text-white rounded-full hover:opacity-90 transition"
                    >
                      Cerrar
                    </button>
                    <a
                      href="https://maps.app.goo.gl/KvGFen4MGurpYhoq6"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2 bg-green-600 text-white rounded-full hover:opacity-90 transition flex items-center justify-center"
                    >
                      Cómo llegar
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Mensaje para desktop */}
      <div className="desktop-message">
        <div
          className="min-h-screen flex items-center justify-center p-6 text-center"
          style={{
            background: "#f0f0f5",
            fontFamily: `"Century Gothic", "Apple Gothic", Arial, sans-serif`,
          }}
        >
          <div className="max-w-lg p-8 bg-white rounded-3xl shadow-xl">
            <h2 className="text-2xl font-semibold mb-4">
              🎉 Invitación especial 🎉
            </h2>
            <p style={{ fontSize: "1.1rem", lineHeight: 1.5, color: "#333" }}>
              Esta invitación está diseñada para que la disfrutes en tu
              dispositivo móvil.
              <br />
              Por favor, abre este enlace desde tu celular para una mejor
              experiencia y ver todos los detalles correctamente.
              <br />
              ¡Gracias por tu comprensión! 😊
            </p>
          </div>
        </div>
      </div>

      {/* Estilos CSS para mostrar/ocultar según tamaño de pantalla */}
      <style jsx>{`
        .invitation-mobile {
          display: none;
        }
        .desktop-message {
          display: flex;
        }
        @media (max-width: 768px) {
          .invitation-mobile {
            display: block;
          }
          .desktop-message {
            display: none;
          }
        }
      `}</style>
    </>
  );
};

export default GraduationInvitation;
