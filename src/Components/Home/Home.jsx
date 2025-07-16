import React, { useEffect, useState } from "react";
import HeroSlider from "./HeroSlider";
import SlideCard from "./SlideCard";
import axios from "axios";
import Wrapper from "../Wrapper/Wrapper";
import FlashDeals from "../Products/FlashDeals";

const Home = ({ addToCart }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get("https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos")
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error al cargar productos en Home:", err));
  }, []);

  return (
    <>
      <section className="homeSlide contentWidth">
        <div className="container">
          <HeroSlider />
        </div>
      </section>
      <FlashDeals products={productos} addToCart={addToCart} />
      <section className="destacados contentWidth">
        <div className="container">
          <SlideCard products={productos.slice(0, 6)} addToCart={addToCart} />
        </div>
      </section>

      <Wrapper />
    </>
  );
};

export default Home;
