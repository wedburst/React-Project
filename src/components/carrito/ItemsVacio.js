import React from "react";
import Bolso from "../../assets/images/svg/bolso.svg";

export const ItemsVacio = () => {
  return (
    <div className="carrrito-vacio">
      <div className="text-center">
        <img src={Bolso} style={{ width: "100px" }} alt="bolsa" />
        <p className="mt-4">Tu carrito esta vacio</p>
      </div>
    </div>
  );
};
