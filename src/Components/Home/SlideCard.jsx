import React from "react";
import FeaturedProducts from "./FeaturedProducts";

const SlideCard = ({ products, addToCart }) => {
  return (
    <FeaturedProducts products={products} addToCart={addToCart} />
  );
};

export default SlideCard;
