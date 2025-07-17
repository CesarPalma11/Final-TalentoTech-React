import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { CiShoppingCart, CiUser } from "react-icons/ci";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const Navbar = ({ cartItems, setCartOpen, openAuthDrawer, user, setUser }) => {
  const [isSideMenuOpen, setMenu] = useState(false);

  const totalItemsInCart = cartItems.reduce(
    (total, item) => total + item.qty,
    0
  );

  const handleLogout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast.info("Sesión cerrada");
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-white shadow fixed-top px-4 py-3">
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            onClick={() => setMenu(true)}
          >
            <IoIosMenu size={24} />
          </button>

          <Link to="/" className="navbar-brand fw-bold fs-3">
            logo
          </Link>

          <div className="collapse navbar-collapse d-none d-lg-flex">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/">
                  Inicio
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/productos">
                  Productos
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="#">
                  Sobre Nosotros
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link text-uppercase" to="/contact">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          <div className="d-flex align-items-center gap-1">
            <CiUser
              size={28}
              style={{ cursor: "pointer" }}
              onClick={openAuthDrawer}
            />
            {user?.rol === "admin" && (
              <span
                className="fw-semibold text-muted"
                style={{ fontSize: "0.9rem", marginRight: "1rem" }}
              >
                Admin
              </span>
            )}
            {user && (
              <button
                className="btn btn-sm btn-outline-danger ms-2"
                onClick={handleLogout}
              >
                Cerrar sesión
              </button>
            )}

           

            <div
              className="position-relative"
              onClick={() => setCartOpen(true)}
              style={{ cursor: "pointer" }}
            >
              <CiShoppingCart size={28} />
              <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {totalItemsInCart}
              </span>
            </div>
          </div>
        </div>
      </nav>

      <div
        className={`offcanvas offcanvas-start ${isSideMenuOpen ? "show" : ""}`}
        tabIndex="-1"
        style={{
          visibility: isSideMenuOpen ? "visible" : "hidden",
          backgroundColor: "#fff",
        }}
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title">Menú</h5>
          <button
            type="button"
            className="btn-close text-reset"
            onClick={() => setMenu(false)}
          ></button>
        </div>
        <div className="offcanvas-body d-flex flex-column gap-3">
          <Link to="/" className="fw-semibold" onClick={() => setMenu(false)}>
            Inicio
          </Link>
          <Link
            to="/productos"
            className="fw-semibold"
            onClick={() => setMenu(false)}
          >
            Productos
          </Link>
          <Link className="fw-semibold" onClick={() => setMenu(false)}>
            Sobre nosotros
          </Link>
          <Link
            to="/contact"
            className="fw-semibold"
            onClick={() => setMenu(false)}
          >
            Contacto
          </Link>

        </div>
      </div>
    </>
  );
};

export default Navbar;
