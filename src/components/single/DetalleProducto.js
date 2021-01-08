import React from "react";

export const DetalleProducto = () => {
  return (
    <div class="border rounded mt-3 bg-detalle">
      <div class="p-3">
        <p class="m-0 title-producto">Detalle del Producto</p>
      </div>
      <div class="p-3">
        <p class="description-loby">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="w-50 detalles-datos">
          <div class="d-flex justify-content-between">
            <p class="m-0 font-weight-bold">Tallas</p>
            <p class="m-0">S</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="m-0 font-weight-bold">Aroma</p>
            <p class="m-0">Manzanilla</p>
          </div>
          <div class="d-flex justify-content-between">
            <p class="m-0 font-weight-bold">Tipo</p>
            <p class="m-0">Noche</p>
          </div>
        </div>
      </div>
    </div>
  );
};
