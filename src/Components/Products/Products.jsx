import React, { useEffect, useState } from "react";
import axios from "axios";
import { IoIosAddCircleOutline } from "react-icons/io";
import { Link } from "react-router-dom"; // corregí esto también
import { Helmet } from "react-helmet-async"; // 🚨 Importante

import FeaturedProducts from "../Home/FeaturedProducts";

const Productos = ({ addToCart, user, onDelete }) => {
  const [productos, setProductos] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const [precioMax, setPrecioMax] = useState("");
  const [modelo, setModelo] = useState("");

  useEffect(() => {
    axios
      .get("https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos")
      .then((res) => {
        setProductos(res.data);
        setFilteredProducts(res.data);
      })
      .catch((err) => {
        console.error("Error al cargar productos:", err);
      });
  }, []);

  useEffect(() => {
    let filtrados = productos;

    if (precioMax) {
      filtrados = filtrados.filter(
        (p) => parseFloat(p.precio) <= parseFloat(precioMax)
      );
    }

    if (modelo) {
      filtrados = filtrados.filter((p) =>
        p.nombre.toLowerCase().includes(modelo.toLowerCase())
      );
    }

    setFilteredProducts(filtrados);
  }, [precioMax, modelo, productos]);

  const handleAddToCart = (producto) => {
    addToCart(producto);
  };

  return (
    <>
      {/* 👇 React Helmet acá */}
      <Helmet>
        <title>Productos - Mi Tienda</title>
        <meta name="description" content="Explorá todos nuestros productos y encontrá lo que estás buscando." />
      </Helmet>

      <div className="container py-5" style={{ marginTop: "5rem" }}>
        <div className="d-flex" style={{ gap: "1rem" }}>
          <aside style={{ flex: "0 0 15%", maxWidth: "35%" }}>
            <div className="card p-3 shadow-sm">
              <h5 className="mb-3">Filtrar</h5>
              <div className="mb-3">
                <label className="form-label">Precio máximo</label>
                <input
                  type="number"
                  className="form-control"
                  value={precioMax}
                  onChange={(e) => setPrecioMax(e.target.value)}
                  placeholder="Ej: $500.000"
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Modelo</label>
                <input
                  type="text"
                  className="form-control"
                  value={modelo}
                  onChange={(e) => setModelo(e.target.value)}
                  placeholder="Ej: iPhone 13"
                />
              </div>
              <button
                className="btn btn-secondary w-100"
                onClick={() => {
                  setPrecioMax("");
                  setModelo("");
                }}
              >
                Limpiar filtros
              </button>
            </div>
          </aside>

          <section style={{ flex: "1 1 auto" }}>
            <div className="container py-5">
              <h2>Panel de Administración</h2>
              <Link to="/agregar-producto" className="btn btn-success mt-3">
                <IoIosAddCircleOutline /> Agregar Producto
              </Link>
            </div>
            <FeaturedProducts
              products={filteredProducts}
              addToCart={handleAddToCart}
              user={user}
              onDelete={(product) => onDelete(product)}
            />
          </section>
        </div>
      </div>
    </>
  );
};

export default Productos;
