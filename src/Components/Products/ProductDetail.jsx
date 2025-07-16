import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetail = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos/${id}`)
      .then((res) => setProduct(res.data))
      .catch(() => setProduct(null));
  }, [id]);

  if (!product) {
    return <div className="container my-5">Producto no encontrado.</div>;
  }

  return (
    <div className="container d-flex align-items-center" style={{ minHeight: "100vh" }}>
      <div className="row w-100">
        <div className="col-md-6 d-flex justify-content-center align-items-center mb-4 mb-md-0">
          <img
            src={product.imagen}
            alt={product.nombre}
            className="img-fluid"
            style={{ maxHeight: "400px", objectFit: "contain" }}
          />
        </div>
        <div className="col-md-6 d-flex flex-column justify-content-center">
          <h2>{product.nombre}</h2>
          <p className="text-muted fs-4">${product.precio.toLocaleString()}</p>
          <p className="mb-3">{product.desc}</p>
          <button
            className="btn btn-primary"
            style={{ padding: "15px 20px", width: "fit-content", alignSelf: "start" }}
            onClick={() => addToCart(product)}
          >
            Agregar al carrito
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
