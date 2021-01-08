import React from "react";
import { ProductosSimilaresList } from "./ProductosSimilaresList";
const Productos = [1, 2, 3, 4];
export const ProductosSimilares = () => {
  return (
    <>
      <div class="p-3 mt-3">
        <p class="m-0 title-producto">Productos Similares</p>
      </div>
      <hr />
      <div class="card-grid flex-wrap p-3 padding-top-0">
        {Productos.map((value) => (
          <ProductosSimilaresList key={value} />
        ))}
      </div>
    </>
  );
};
