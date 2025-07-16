import React from "react"
import { FaTruck } from "react-icons/fa";
import { FaCcMastercard, FaHeadset } from "react-icons/fa6";
import { IoShieldCheckmarkOutline } from "react-icons/io5";

import "./style.css"

const Wrapper = () => {
  const data = [
    {
      cover: <FaTruck />,
      title: "Envios a todo el mundo",
      decs: "Ofrecemos envios a todo el mundo, no importa de donde seas!",
    },
    {
      cover: <FaCcMastercard />,
      title: "Pago 100% seguro",
      decs: "Tus pagos, mas seguros que nunca!",
    },
    {
      cover: <IoShieldCheckmarkOutline />,
      title: "Compra con seguridad ",
      decs: "Podes estar seguro comprando con nosotros!",
    },
    {
      cover: <FaHeadset />,
      title: "Soporte 24/7 ",
      decs: "Ofrecemos soporte las 24hs del dia!, conta con soporte personalizado",
    },
  ]
  return (
    <>
      <section className='wrapper background'>
        <div className='container grid2'>
          {data.map((val, index) => {
            return (
              <div className='product' key={index}>
                <div className='img icon-circle'>
                  <i>{val.cover}</i>
                </div>
                <h3>{val.title}</h3>
                <p>{val.decs}</p>
              </div>
            )
          })}
        </div>
      </section>
    </>
  )
}

export default Wrapper
