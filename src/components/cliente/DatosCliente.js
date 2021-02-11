import React from "react";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../actions/ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const DatosCliente = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    name: "Jhon",
    apellido: "Abou",
    telefono: "123456",
    email: "jhon@gmail.com",
  });

  const { name, apellido, telefono, email } = formValues;

  const handleComprador = (e) => {
    e.preventDefault();
    console.log(name, apellido, telefono, email);

    if (isFormValid()) {
      console.log("Formulario Correcto");
    }
  };

  const isFormValid = () => {
    if (name.trim().length === 0) {
      dispatch(setError('Name is required'))
      console.log("name is required");
      return false;
    } else if (apellido.trim().length === 0) {
      dispatch(setError('Apellido is required'))
      console.log("Apellido is not value");
      return false;
    } else if (!validator.isMobilePhone(telefono)) {
      dispatch(setError('Telefono is required'))
      console.log("Telefono is not value");
      return false;
    } else if (!validator.isEmail(email)) {
      dispatch(setError('Email is required'))
      console.log("Email is not value");
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="container mb-5 padding-sign">
      <div className="row d-flex justify-content-center">
        <div className="col-sm-12 col-md-8 mt-5">
          <div className="border bg-white">
            <div className="p-4 text-center bg-negro text-white">
              <h3 className="">Datos del comprador</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vero,
                similique.
              </p>
            </div>
            <form onSubmit={handleComprador}>
              {msgError && <div className="alert alert-danger">{msgError}</div>}
              <div className="row padding-sign">
                <div className="col-sm-6 col-xl-6">
                  <div className="box">
                    <input
                      className="input"
                      type="text"
                      name="name"
                      autoComplete="off"
                      value={name}
                      onChange={handleInputChange}
                    />
                    <span className="input-decorator">
                      <FontAwesomeIcon icon={faUserCircle} />
                    </span>
                    <label className="label">Nombre</label>
                    <div className="input-border"></div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-6">
                  <div className="box">
                    <input
                      className="input"
                      type="text"
                      name="apellido"
                      autoComplete="off"
                      value={apellido}
                      onChange={handleInputChange}
                    />
                    <span className="input-decorator">
                      <FontAwesomeIcon icon={faUserCircle} />
                    </span>
                    <label className="label">Apellido</label>
                    <div className="input-border"></div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-6">
                  <div className="box">
                    <input
                      className="input"
                      type="number"
                      name="telefono"
                      autoComplete="off"
                      value={telefono}
                      onChange={handleInputChange}
                    />
                    <span className="input-decorator">
                      <FontAwesomeIcon icon={faPhoneAlt} />
                    </span>
                    <label className="label">Número Teléfonico</label>
                    <div className="input-border"></div>
                  </div>
                </div>
                <div className="col-sm-6 col-xl-6">
                  <div className="box">
                    <input
                      className="input"
                      type="text"
                      name="email"
                      autoComplete="off"
                      value={email}
                      onChange={handleInputChange}
                    />
                    <span className="input-decorator">
                      <FontAwesomeIcon icon={faEnvelope} />
                    </span>
                    <label className="label">Correo electrónico*</label>
                    <div className="input-border"></div>
                  </div>
                </div>
              </div>
              <div className="row padding-sign">
                <div className="col-12 d-flex justify-content-end">
                  <p className="m-0 mr-3">Total</p>
                  <p className="m-0">S/ 1000</p>
                </div>
              </div>
              <div className="button-enviar text-center my-3">
                <button type="submit" className="btn btn-form">
                  ENVIAR
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
