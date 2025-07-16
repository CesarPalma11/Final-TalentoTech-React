import React from "react";
import FlashCard from "./FlashCard";
import "./style.css";

const FlashDeals = ({ products, addToCart }) => {
  return (
    <section className="flash my-5">
      <div className="container">
        <div className="d-flex align-items-center mb-4">
          <i className="fa fa-bolt me-2 text-warning fs-4"></i>
          <h2 className="fw-bold m-0">Ofertas semanales</h2>
        </div>

       
        <FlashCard productItems={products} addToCart={addToCart} />
      </div>
    </section>
  );
};

export default FlashDeals;