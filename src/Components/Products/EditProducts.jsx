import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const EditarProducto = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [producto, setProducto] = useState({
    nombre: "",
    precio: "",
    desc: "",
    imagen: "",
  });

  useEffect(() => {
    axios.get(`https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos/${id}`)
      .then((res) => setProducto(res.data))
      .catch(() => toast.error("Error al cargar producto"));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.put(`https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos/${id}`, producto)
      .then(() => {
        toast.success("Producto actualizado");
        navigate("/productos");
      })
      .catch(() => toast.error("Error al actualizar producto"));
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div className="container" style={{ maxWidth: "500px" }}>
        <h2 className="mb-4 text-center">Editar Producto</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre</label>
            <input
              type="text"
              name="nombre"
              value={producto.nombre}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Precio</label>
            <input
              type="number"
              name="precio"
              value={producto.precio}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <div className="mb-3">
            <label>Descripción</label>
            <textarea
              name="desc"
              value={producto.desc}
              onChange={handleChange}
              className="form-control"
              rows="3"
              required
            ></textarea>
          </div>

          <div className="mb-3">
            <label>Imagen (URL)</label>
            <input
              type="text"
              name="imagen"
              value={producto.imagen}
              onChange={handleChange}
              className="form-control"
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100">Guardar cambios</button>
        </form>
      </div>
    </div>
  );
};

export default EditarProducto;
