import React from "react";
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const FeaturedProducts = ({ products, addToCart, user, onDelete }) => {
  const handleAddToCart = (product) => {
    addToCart(product);
    toast.success(`${product.nombre} se agregó al carrito!`, {
      position: "bottom-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div className="container my-5">
      <h2 className="text-center fs-4 fw-bold mb-4">Destacados</h2>

      <div className="d-flex flex-wrap justify-content-center gap-4">
        {Array.isArray(products) && products.length > 0 ? (
          products.map((product) => (
            <div className="card" key={product.id} style={{ width: "16rem" }}>
              <Link
                to={`/producto/${product.id}`}
                className="text-decoration-none text-dark"
              >
                <div
                  className="d-flex justify-content-center align-items-center"
                  style={{ height: "200px", overflow: "hidden" }}
                >
                  <img
                    src={product.imagen}
                    alt={product.nombre}
                    style={{
                      maxHeight: "100%",
                      maxWidth: "100%",
                      objectFit: "contain",
                    }}
                  />
                </div>
                <div className="card-body text-center">
                  <h5 className="card-title">{product.nombre}</h5>
                  <p className="card-text text-muted">
                    ${product.precio.toLocaleString()}
                  </p>
                </div>
              </Link>

              <div className="card-body text-center pt-0">
                <button
                  className="btn btn-primary w-100"
                  onClick={() => handleAddToCart(product)}
                >
                  Comprar ahora
                </button>

                {user?.rol === "admin" && (
                  <>
                    <Link
                      to={`/admin/editar/${product.id}`}
                      className="btn btn-warning btn-sm mt-2 me-2"
                    >
                      Editar
                    </Link>

                    <button
                      className="btn btn-danger btn-sm mt-2"
                      onClick={() => onDelete(product)}
                    >
                      Eliminar
                    </button>
                  </>
                )}
              </div>
            </div>
          ))
        ) : (
          <p className="text-center mt-5">Cargando productos...</p>
        )}
      </div>
    </div>
  );
};

export default FeaturedProducts;
