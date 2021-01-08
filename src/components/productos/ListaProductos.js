import React from "react";
import { ProductsItem } from "./ProductsItem";

export const ListaProductos = () => {
  const entries = [1, 2, 3, 4];
  return (
    <div>
      <div className="p-3 d-flex justify-content-between align-items-center">
        <p className="m-0 title-producto">Lista de productos</p>
      </div>
      <hr />
      <div className="card-grid flex-wrap p-3 padding-top-0">
        {entries.map((value) => (
          <ProductsItem key={value} />
        ))}
      </div>
    </div>
  );
};
