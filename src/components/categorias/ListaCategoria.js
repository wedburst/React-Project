import React from "react";
import Impresora from "../../assets/images/categoria/impresoras.png";

export const ListaCategoria = () => {
  return (
    <div className="col-sm-12 col-md-3 mt-3">
      <div className="relative">
        <a href="" className="">
          <div
            className="categorias"
            style={{ backgroundImage: `url(${Impresora})` }}
          >
            <div className="d-flex align-items-center justify-content-center categoria-marco">
              <p className="m-0 category-text-position">Impresoras térmicas</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  );
};
