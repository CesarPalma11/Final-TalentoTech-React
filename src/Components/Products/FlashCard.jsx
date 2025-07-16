
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight, FaRegHeart, FaCartArrowDown } from "react-icons/fa";
import './style.css';
import { toast } from "react-toastify";

const SampleNextArrow = ({ onClick }) => (
  <div className="control-btn" onClick={onClick}>
    <button className="next">
      <FaArrowRight className="i"/>
    </button>
  </div>
);

const SamplePrevArrow = ({ onClick }) => (
  <div className="control-btn" onClick={onClick}>
    <button className="prev">
      <FaArrowLeft className="i"/>
    </button>
  </div>
);

const FlashCard = ({ productItems, addToCart }) => {
  

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      { breakpoint: 1200, settings: { slidesToShow: 3 } },
      { breakpoint: 992, settings: { slidesToShow: 2 } },
      { breakpoint: 576, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <Slider {...settings}>
      {productItems.map((product) => (
        <div className="box p-2" key={product.id}>
          <div className="products border p-3 rounded shadow-sm bg-white h-100">
            <div className="img position-relative text-center mb-3">
              {product.descuento && (
                <span className="badge bg-danger position-absolute top-0 start-0 m-2">
                  50% OFF
                </span>
              )}
              <img
                src={product.imagen}
                alt={product.nombre}
                className="image-items img-fluid"
                style={{ height: "150px", objectFit: "contain" }}
              />
              <div className="product-like">
                <FaRegHeart />
              </div>
            </div>

            <div className="product-details text-center">
              <h5 className="fw-bold mb-2">{product.nombre}</h5>
              <p className="text-muted">${product.precio}</p>

              <div>
                <button
                  className="btn btn-outline-dark w-100"
                  onClick={() => {
                    addToCart(product);
                    toast.success(`${product.nombre} agregado al carrito`);
                  }}
                >
                  <FaCartArrowDown />Comprar
                </button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default FlashCard;
