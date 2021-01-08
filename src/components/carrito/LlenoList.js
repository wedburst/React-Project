import Inalambrica from "../../assets/images/productos/inalambrica-1.png";

// FontAwesome
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { faMinus, faPlus, faTrash } from "@fortawesome/free-solid-svg-icons";
export const LlenoList = () => {
  return (
    <>
    <div className="grid-carrito-list">
      <div className="">
        <img src={Inalambrica} className="img-fluid" alt="producto" />
      </div>
      <div className="items-card">
        <small>SKU : 361300</small>
        <p className="m-0">Impresora termica inalambrica Rogta</p>
        <small className="items-description"></small>
        <div className="carrito-text d-flex align-items-center">
          <p>S/ 615.00</p>
        </div>
        <div className="d-flex border-input" style={{ width: "150px" }}>
          <div id="group" className="d-flex justify-content-end">
            <div className="d-flex border-input">
              <button
                href="#"
                className="cart-qty-minus btn btn-elements btn-group d-flex align-items-center border-right-none"
              >
                <FontAwesomeIcon icon={faMinus} />
              </button>
              <input
                type="text"
                name="qty"
                id="qty"
                value="0"
                className="qty form-control text-center input-plush"
                readOnly="readonly"
              />
              <button
                href="#"
                className="cart-qty-plus btn btn-elements btn-group d-flex align-items-center border-left-none"
              >
                <FontAwesomeIcon icon={faPlus} />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="text-center baselina" style={{cursor: 'pointer'}}>
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
    <hr/>
    </>
  );
};
