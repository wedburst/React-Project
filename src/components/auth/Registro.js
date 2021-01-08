import React from "react";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../actions/ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhoneAlt,
  faUnlockAlt,
  faUserCircle,
} from "@fortawesome/free-solid-svg-icons";

export const Registro = () => {

  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValue, handleInputChange] = useForm({
    nombre: "Jhon",
    apellido: "Abou",
    telefono: "54522212",
    correo: "jhon@abou.com",
    password: "123456"
  });

  const { nombre, apellido, telefono, correo, password } = formValue;

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(nombre, apellido, telefono, correo, password);

    if (isInvalid()) {
      console.log("Registro con exito");
    }
  };

  const isInvalid = () => {
    if (nombre.trim().length === 0) {
      dispatch(setError('nombre es requerido'));
      console.log("nombre es requerido");
      return false;
    } else if (apellido.trim().length === 0) {
      dispatch(setError('apellido is required'));
      console.log("apellido es requerido");
      return false;
    } else if (!validator.isMobilePhone(telefono)) {
      dispatch(setError('telefono is required'));
      console.log("telefono es requerido");
      return false;
    } else if (!validator.isEmail(correo)) {
      dispatch(setError('correo is required'));
      console.log("correo es requerido");
      return false;
    } else if (password.length < 5) {
      dispatch(setError('pass is required'));
      console.error("pass es requerido y bueno");
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div class="col-sm-12 col-md-6 mt-5">
      <div class="border bg-white">
        <div class="p-4 text-center bg-negro text-white">
          <h3 class="">Aún no soy cliente</h3>
          <p>
            Si aún no eres cliente, regístrate ingresando tu correo electrónico,
            documento de identidad y contraseña
          </p>
        </div>
        <div class="padding-sign">
          <form onSubmit={handleRegister}>
            {msgError && <div className="alert alert-danger">{msgError}</div>}
            <div class="box">
              <input
                class="input"
                type="text"
                name="nombre"
                value={nombre}
                onChange={handleInputChange}
              />
              <span class="input-decorator">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <label class="label">Nombre</label>
              <div class="input-border"></div>
            </div>
            <div class="box">
              <input
                class="input"
                type="text"
                name="apellido"
                value={apellido}
                onChange={handleInputChange}
              />
              <span class="input-decorator">
                <FontAwesomeIcon icon={faUserCircle} />
              </span>
              <label class="label">Apellido</label>
              <div class="input-border"></div>
            </div>
            <div class="box">
              <input
                class="input"
                type="text"
                name="telefono"
                value={telefono}
                onChange={handleInputChange}
              />
              <span class="input-decorator">
                <FontAwesomeIcon icon={faPhoneAlt} />
              </span>
              <label class="label">Número Teléfonico</label>
              <div class="input-border"></div>
            </div>
            <div class="box">
              <input
                class="input"
                type="text"
                name="correo"
                value={correo}
                onChange={handleInputChange}
              />
              <span class="input-decorator">
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <label class="label">Correo electrónico*</label>
              <div class="input-border"></div>
            </div>
            <div class="box">
              <input
                class="input"
                type="text"
                name="password"
                value={password}
                onChange={handleInputChange}
              />
              <span class="input-decorator">
                <FontAwesomeIcon icon={faUnlockAlt} />
              </span>
              <label class="label">Contraseña*</label>
              <div class="input-border"></div>
            </div>

            <div class="text-center mt-3">
              <button type="submit" className="btn btn-form btn-xs w-75">
                REGISTRARME
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
