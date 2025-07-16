import React from "react";

const Contact = () => {
  return (
    <div className="container py-5 mt-5">
      <h2 className="text-center mb-5">Contacto</h2>

    
      <div className="d-flex justify-content-center">
        <div className="row" style={{ maxWidth: "960px", width: "100%" }}>
        
          <div className="col-md-6 mb-4">
            <form>
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Mensaje</label>
                <textarea
                  className="form-control"
                  rows="5"
                  placeholder="Escribe tu mensaje..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Enviar
              </button>
            </form>
          </div>

    
          <div className="col-md-6">
            <div className="ratio ratio-4x3 rounded shadow-sm">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3282.739973016503!2d-58.41730908477079!3d-34.60368418045998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bccadc438823a5%3A0x8ee2bdfc6229f46d!2sObelisco!5e0!3m2!1ses-419!2sar!4v1623249550851!5m2!1ses-419!2sar"
                allowFullScreen=""
                loading="lazy"
                title="Ubicación"
                style={{ border: 0 }}
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
