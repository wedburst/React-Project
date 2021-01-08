import React from "react";

import { LlenoList } from "./LlenoList";
const ItemsCompra = [1, 2, 3, 4, 5 ,6 ,7, 8];

export const ItemsLleno = () => {
  return (
    <div >
        {ItemsCompra.map((value) => (
              <LlenoList key={value} />
            ))}
    </div>
  );
};
