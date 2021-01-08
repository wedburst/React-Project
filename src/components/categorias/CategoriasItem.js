import React from "react";
import { ListaCategoria } from "./ListaCategoria";

const categorias = [1, 2, 3, 4];

export const CategoriasItem = () => {
  return (
    <div className="p-3">
      <div className="p-3 padding-top-0">
        <p className="m-0 title-producto">Categoradasdias Importantes</p>
        <hr />
        <div className="row">
            {categorias.map((value) => (
              <ListaCategoria key={value} />
            ))}
        </div>
      </div>
    </div>
  );
};
