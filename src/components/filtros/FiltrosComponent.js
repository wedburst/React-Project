import React from "react";

export const FiltrosComponent = () => {
  return (
    <div className="filtros d-none d-lg-block d-xl-block">
      <div className="barra-filtros">
        <div className="d-flex align-items-center flex-wrap">
          <div className="my-1">
            <a href="#" className="btn btn-white">
              Impresoras termicas
            </a>
          </div>
          <div className="my-1">
            <a href="#" className="btn btn-white">
              Gaveta de dinero
            </a>
          </div>
          <div className="my-1">
            <a href="#" className="btn btn-white">
              Pistolas de código de barra
            </a>
          </div>
          <div className="my-1">
            <a href="#" className="btn btn-white">
              Papel térmico
            </a>
          </div>
          <div className="my-1">
            <a href="#" className="btn btn-white">
              Certificados de seguridad
            </a>
          </div>
        </div>
        <div className="d-flex justify-content-end">
          <div className="dropdown mr-1 my-1">
            <button
              type="button"
              className="btn dropdown-toggle"
              id="dropdownMenuOffset"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
              data-offset="10,20"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 30.31 30.31"
                height="25"
                width="25"
              >
                <title>filtrar</title>
                <g id="Capa_2" data-name="Capa 2">
                  <g id="Logins">
                    <path
                      className="cls-dropdown"
                      d="M24.89,0H5.42A5.42,5.42,0,0,0,0,5.42V24.89a5.42,5.42,0,0,0,5.42,5.42H24.89a5.42,5.42,0,0,0,5.42-5.42V5.42A5.42,5.42,0,0,0,24.89,0Zm3.65,24.89a3.66,3.66,0,0,1-3.65,3.65H5.42a3.65,3.65,0,0,1-3.64-3.65V5.42A3.64,3.64,0,0,1,5.42,1.78H24.89a3.65,3.65,0,0,1,3.65,3.64Z"
                    />
                    <path
                      className="cls-dropdown"
                      d="M25.62,6.66H12.09a2.79,2.79,0,0,0-5.29,0H4.69a.89.89,0,1,0,0,1.77H6.8a2.79,2.79,0,0,0,5.29,0H25.62a.89.89,0,1,0,0-1.77ZM9.45,8.56a1,1,0,1,1,1-1A1,1,0,0,1,9.45,8.56Z"
                    />
                    <path
                      className="cls-dropdown"
                      d="M25.62,14.27H23.51a2.79,2.79,0,0,0-5.29,0H4.69a.89.89,0,1,0,0,1.77H18.22a2.79,2.79,0,0,0,5.29,0h2.11a.89.89,0,1,0,0-1.77Zm-4.76,1.9a1,1,0,0,1,0-2,1,1,0,1,1,0,2Z"
                    />
                    <path
                      className="cls-dropdown"
                      d="M25.62,21.88H15.9a2.79,2.79,0,0,0-5.29,0H4.69a.89.89,0,1,0,0,1.77h5.92a2.79,2.79,0,0,0,5.29,0h9.72a.89.89,0,1,0,0-1.77Zm-12.37,1.9a1,1,0,0,1,0-2,1,1,0,1,1,0,2Z"
                    />
                  </g>
                </g>
              </svg>
              Ordenar Productos
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuOffset">
              <a className="dropdown-item" href="#">
                Mayor relevancia
              </a>
              <a className="dropdown-item" href="#">
                Mayor precio
              </a>
              <a className="dropdown-item" href="#">
                Menor precio
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
