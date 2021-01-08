import React from "react";
import { CategoriasItem } from "./components/categorias/CategoriasItem";
import { ListaProductos } from "./components/productos/ListaProductos";
import { CarouselOwl } from "./components/ui/CarouselOwl";

export const TiendaApp = () => {
  return (
    <>
        <CarouselOwl/>
        <ListaProductos/>
        <CategoriasItem/>
    </>
  );
};
