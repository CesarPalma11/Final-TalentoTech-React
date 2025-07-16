import React from "react";
import { IoCloseOutline } from "react-icons/io5";
import { useNavigate } from "react-router-dom";

const CartDrawer = ({ isOpen, onClose, cartItems = [], incrementQty, decrementQty, removeFromCart }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    navigate("/productos");
  };

  const handleStartShopping = () => {
    navigate("/productos");
  };

  const totalCompra = cartItems.reduce((total, item) => total + item.precio * item.qty, 0);

  return (
    <>
      
      {isOpen && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 bg-dark bg-opacity-50"
          style={{ zIndex: 1040 }}
          onClick={onClose}
        />
      )}

      
      <div
        className={`position-fixed top-0 end-0 h-100 bg-white shadow-lg d-flex flex-column`}
        style={{
          width: window.innerWidth < 768 ? "100%" : "25%",
          zIndex: 1050,
          transform: isOpen ? "translateX(0)" : "translateX(100%)",
          transition: "transform 0.3s ease-in-out",
        }}
      >
        
        <div className="d-flex justify-content-between align-items-center p-3 border-bottom">
          <h5 className="mb-0">Tu carrito</h5>
          <IoCloseOutline
            size={24}
            className="cursor-pointer"
            onClick={onClose}
          />
        </div>

      
        <div className="flex-grow-1 overflow-auto p-3">
          {cartItems.length === 0 ? (
            <>
              <p className="text-muted mb-3">Tu carrito de compras está vacío.</p>
              <button
                className="btn btn-primary w-100"
                onClick={handleStartShopping}
              >
                ¡EMPEZÁ A COMPRAR!
              </button>
            </>
          ) : (
            <ul className="list-unstyled">
              {cartItems.map((item, index) => {
                const productTotal = item.precio * item.qty;
                return (
                  <li key={index} className="d-flex mb-4 align-items-start">
                    <img
                      src={item.imagen}
                      alt={item.nombre}
                      className="me-3 rounded"
                      style={{ width: "64px", height: "auto", objectFit: "cover" }}
                    />
                    <div className="flex-grow-1">
                      <div className="fw-bold">{item.nombre}</div>
                      <div className="text-muted">${item.precio}</div>
                      <div className="d-flex align-items-center mt-2">
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => decrementQty(item.id)}
                        >
                          -
                        </button>
                        <span className="px-3">{item.qty}</span>
                        <button
                          className="btn btn-outline-secondary btn-sm"
                          onClick={() => incrementQty(item.id)}
                        >
                          +
                        </button>
                      </div>
                      <div className="text-muted mt-2">Subtotal: ${productTotal}</div>
                    </div>
                    <button
                      className="btn btn-link text-danger ms-2 p-0"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Eliminar
                    </button>
                  </li>
                );
              })}
            </ul>
          )}
        </div>

        
        {cartItems.length > 0 && (
          <div className="border-top p-3 bg-white">
            <h6 className="fw-bold mb-2">Resumen de la compra</h6>
            <div className="d-flex justify-content-between">
              <span>Total:</span>
              <span className="fw-bold">${totalCompra}.00</span>
            </div>
            <button
              className="btn btn-dark w-100 mt-3"
              onClick={handleBuyNow}
            >
              COMPRÁ YA
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartDrawer;
