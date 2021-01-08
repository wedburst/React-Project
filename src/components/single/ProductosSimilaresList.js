// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
import Inalambrica from "../../assets/images/productos/inalambrica-1.png";

export const ProductosSimilaresList = () => {
  return (
    <div class="card card-mobile m-1 shadow-sm border rounded">
      <div class="add-position">
        <button id="boton" href="#" class="btn btn-elements hide">
          <FontAwesomeIcon icon={faPlus} />
        </button>
        <div id="group" class="cambio d-flex justify-content-end">
          <div class="d-flex border-input">
            <button
              href="#"
              class="cart-qty-minus btn btn-elements btn-group d-flex align-items-center border-right-none"
            >
              <FontAwesomeIcon icon={faMinus} />
            </button>
            <input
              type="text"
              name="qty"
              id="qty"
              value="0"
              class="qty form-control text-center input-plush"
              readOnly="readonly"
            />
            <button
              href="#"
              class="cart-qty-plus btn btn-elements btn-group d-flex align-items-center border-left-none"
            >
              <FontAwesomeIcon icon={faPlus} />
            </button>
          </div>
        </div>
      </div>
      <div class="img-container">
        <a href="">
          <img
            src={Inalambrica}
            class="card-img-top"
            alt="Productos"
          />
        </a>
      </div>
      <div class="card-body">
        <h5 class="card-title">Impresora termica inalambrica Rogta</h5>
        <p class="card-text descripcion m-0">
          Impresora de game media resistente
        </p>
        <p class="card-text"></p>
        <div class="price card-text text-center d-flex align-items-center display-sm-block">
          <p>S/ 615.00</p>
        </div>
      </div>
    </div>
  );
};
