import React, { useEffect, useState } from 'react';
import HeroSlider from './HeroSlider';
import SlideCard from './SlideCard';
import axios from 'axios';

const Home = ({ addToCart }) => {
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    axios
      .get('https://686d213dc9090c495385500c.mockapi.io/ecommerce/productos')
      .then((res) => setProductos(res.data))
      .catch((err) => console.error("Error al cargar productos en Home:", err));
  }, []);

  return (
    <>
      <section className='homeSlide contentWidth'>
        <div className='container'>
          <HeroSlider />  
        </div>
      </section>
      
      <section className='destacados contentWidth'>
        <div className='container'>
          <SlideCard products={productos} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default Home;
