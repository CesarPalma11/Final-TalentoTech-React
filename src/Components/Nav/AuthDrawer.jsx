import React, { useState } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const AuthDrawer = ({ isOpen, onClose, setUser }) => {
  const [isLogin, setIsLogin] = useState(true);

  if (!isOpen) return null;

const handleLogin = (e) => {
  e.preventDefault();

  const email = e.target.email.value;
  const password = e.target.password.value;

  if (email === "admin@admin.com" && password === "admin123") {
    setUser({ email, rol: "admin" });
    const admin = {email, rol: "admin"};
    setUser(admin);
    localStorage.setItem("user", JSON.stringify(admin));
    toast.success("Sesión iniciada como admin"); 
    onClose();
  } else {
    setUser({ email, rol: "user" });
    const user = {email, rol: "user"};
    setUser(user);
    localStorage.setItem("user", JSON.stringify(user));
    toast.success("Sesión iniciada como usuario"); 
    onClose();
  }
};


  return (
    <>
     
      <div
        className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
        style={{ zIndex: 1040 }}
        onClick={onClose}
      />

      
      <div
        className="position-fixed top-50 start-50 translate-middle bg-white p-4 rounded shadow"
        style={{ zIndex: 1050, width: "400px", maxWidth: "90%" }}
      >
       
        <div className="d-flex justify-content-between align-items-center mb-3">
          <h5 className="mb-0">
            {isLogin ? "Iniciar sesión" : "Crear cuenta"}
          </h5>
          <IoCloseOutline
            size={24}
            onClick={onClose}
            style={{ cursor: "pointer" }}
          />
        </div>

        
        <form onSubmit={handleLogin}>
        
          {isLogin ? (
            <>
              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="••••••••"
                />
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Iniciar sesión
              </button>
            </>
          ) : (
            <>
              {/* Registro */}
              <div className="mb-3">
                <label className="form-label">Nombre completo</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Tu nombre"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Correo electrónico</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="email@example.com"
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Contraseña</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="••••••••"
                />
              </div>

              <button type="submit" className="btn btn-primary w-100">
                Registrarse
              </button>
            </>
          )}
        </form>

       
        <div className="text-center mt-3">
          {isLogin ? (
            <>
              <small>¿No tenés una cuenta?</small>
              <br />
              <button
                className="btn btn-link p-0"
                onClick={() => setIsLogin(false)}
              >
                Registrarse
              </button>
            </>
          ) : (
            <>
              <small>¿Ya tenés cuenta?</small>
              <br />
              <button
                className="btn btn-link p-0"
                onClick={() => setIsLogin(true)}
              >
                Iniciar sesión
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default AuthDrawer;
