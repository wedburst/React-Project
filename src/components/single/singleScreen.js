import Breadcrumb from "react-bootstrap/Breadcrumb";
import Regresar from "../../assets/images/svg/regresar.svg";

import { DetalleProducto } from "./DetalleProducto";
import { ProductosSimilares } from "./ProductosSimilares";
import { DatosProductos } from "./DatosProductos";
import { GaleriaImagen } from "./galeria/GaleriaImagen";
import React from 'react'

export const singleScreen = ({ children }) => {
  return (
    <div class="container-fluid">
      <Breadcrumb>
        <Breadcrumb.Item href="#">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="#">Producto</Breadcrumb.Item>
        <Breadcrumb.Item href="#" active>
        {children}
        </Breadcrumb.Item>
      </Breadcrumb>
      <div class="d-flex d-sm-block d-none d-md-none d-lg-none d-xl-none my-3">
        <a href="index.html" class="btn btn-back-sm">
          <img
            src={Regresar}
            className="img-fluid"
            alt="back"
            style={{ width: "30px" }}
          />
        </a>
      </div>
      <div class="border rounded p-3 bg-sku">
        <div class="row">
          <div class="col-md-5">
            <GaleriaImagen/>
          </div>
          <div class="col-md-7">
            <DatosProductos/>
          </div>
        </div>
      </div>
      <DetalleProducto/>
      <ProductosSimilares/>
    </div>
  );
};
