import React from "react";
import { ItemsLleno } from "./ItemsLleno";
import { ItemsVacio } from "./ItemsVacio";
// imagen
import carrito from "../../assets/images/svg/carrito.svg";
import { CarritoResponsive } from "./CarritoResponsive";
export const CarritoList = () => {
  const loading = true;
  return (
    <div>
      <div className="compra d-none d-lg-block d-xl-block">
      <div className="d-flex justify-content-between header-carrito p-2 align-items-center">
        <div>
          <img src={carrito} className="carrito" alt="carrito" />{" "}
          <span id="item-count">0: </span> Productos
        </div>
        <div>Mínimo s/ 200</div>
      </div>

      <div className="body-carrito p-3">
        {loading ? <ItemsLleno/> : <ItemsVacio />}
      </div>
      <div className="footer-carrito p-2 ">
        <div className="text-center">
          <a
            href="datos-clientes.html"
            className="btn-block d-flex justify-content-between"
          >
            REALIZAR PEDIDO <span>S/ 1330.00</span>
          </a>
        </div>
      </div>
    </div>
    <CarritoResponsive/>
    </div>
  );
};
