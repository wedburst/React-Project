import React from "react";
import Impresora from '../../assets/images/productos/impresora-1.png';
export const ProductsItem = () => {
  return (
    <div>
      <div className="card m-1 shadow-sm border rounded relative">
        <div className="card-mobile">
          <div className="img-container">
            <a href="">
              <img
                src={Impresora}
                className="card-img-top"
                alt="Productos"
              />
            </a>
          </div>
          <div className="card-body">
            <h5 className="card-title">Impresora termica inalambrica Z001</h5>
            <p className="card-text descripcion m-0">
              Impresora con conexion bluetooh económica{" "}
            </p>
            <p className="card-text"></p>
          </div>
        </div>
        <div className="text-center padding-option">
          <a href="pagina-sola.html" className="btn btn-gray-card btn-block">
            Ver Opciones
          </a>
        </div>
      </div>
    </div>
  );
};
