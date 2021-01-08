import React from "react";
// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Regresar from "../../assets/images/svg/regresar.svg";

export const DatosProductos = () => {
  return (
    <div>
      <div class="d-flex justify-content-between align-items-center">
        <p class="m-0">SKU : 361300</p>
        <a href="index.html" class="btn btn-regresar">
          <img src={Regresar} alt="back" style={{ width: "30px" }} />
          <span> Regresar</span>
        </a>
      </div>
      <div class="mt-3">
        <p class="card-title m-0">Papel higiénico elite Plus HD</p>
        <p class="description-loby">
          Descripción del Tela suave con microesferas de gel para una rápida
          absorción.
        </p>
      </div>
      <hr />
      <div>
        <div class="card-text d-flex align-items-center">
          <span class="text-muted rebaja">S/ 30.00</span>
          <p>S/ 27.00</p>
        </div>
        <div class="mt-3">
          <p class="m-0">PRESENTACIONES</p>
          <div class="d-action">
            <div class="mt-3">
              <select class="form-control">
                <option>Unidad</option>
              </select>
            </div>
            <div class="mt-3">
              <input
                type="text"
                name=""
                id=""
                value="CAJA 24 UND x 6 UND"
                class="form-control"
                disabled
              />
            </div>
            <div id="group" class="mt-3">
              <div class="d-flex border-input">
                <a
                  href="#"
                  class="btn btn-elements btn-group d-flex align-items-center border-right-none"
                >
                  <FontAwesomeIcon icon={faMinus} />
                </a>
                <input
                  type="text"
                  name=""
                  id=""
                  value="1000"
                  class="form-control text-center input-plush"
                  readOnly="readonly"
                />
                <a
                  href="#"
                  class="btn btn-elements btn-group d-flex align-items-center border-left-none"
                >
                  <FontAwesomeIcon icon={faPlus} />
                </a>
              </div>
            </div>
            <div class="mt-3">
              <a href="#" class="btn btn-plomo">
                Agregar al Carrito
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
