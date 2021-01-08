import React from "react";
import { useForm } from "../../hooks/useForm";
import validator from "validator";
import { useDispatch, useSelector } from "react-redux";
import { removeError, setError } from "../actions/ui";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

export const SignUser = () => {
  const dispatch = useDispatch();
  const { msgError } = useSelector((state) => state.ui);

  const [formValues, handleInputChange] = useForm({
    email: "jhon@gmail.com",
    password: "123456",
  });

  const { email, password } = formValues;

  const handleLogin = (e) => {
    e.preventDefault();
    console.log(email, password);

    if (isFromValid()) {
      console.log("Login correcto");
    }
  };

  const isFromValid = () => {
    if (!validator.isEmail(email)) {
      dispatch(setError("email is required"));
      console.log("email te falto poner monce");
      return false;
    } else if (password.trim().length === 0) {
      dispatch(setError("pass is required"));
      console.log("pass te falto poner monce");
      return false;
    }
    dispatch(removeError());
    return true;
  };

  return (
    <div className="col-sm-12 col-md-6 mt-5">
      <div className="border bg-white">
        <div className="p-4 text-center bg-negro text-white">
          <h3 className="">Soy Cliente</h3>
          <p>
            Si haz comprado antes, solo ingresa tu correo electrónico y
            contraseña para acceder a tu cuenta
          </p>
        </div>
        <div className="padding-sign">
          <form onSubmit={handleLogin}>
            {msgError && <div className="alert alert-danger">{msgError}</div>}
            <div class="box">
              <input
                class="input"
                type="text"
                name="email"
                value={email}
                onChange={handleInputChange}
              />
              <span class="input-decorator">
                <i class="fa fa-envelope-o" aria-hidden="true"></i>
              </span>
              <label class="label">Correo electrónico*</label>
              <div class="input-border"></div>
            </div>

            <div className="box">
              <input
                className="input"
                type="password"
                name="password"
                autoComplete="off"
                value={password}
                onChange={handleInputChange}
              />
              <span className="input-decorator">
                <FontAwesomeIcon icon={faEye} />
              </span>
              <label className="label">Contraseña*</label>
              <div className="input-border"></div>
            </div>
            <div className="text-center mt-3">
              <small className="m-0">
                ¿Haz olvidado tu contraseña?{" "}
                <Link to="#" className="text-negro font-weight-bold">
                  Haz clic aquí
                </Link>
              </small>
            </div>
            <div className="text-center mt-3">
              <button type="submit" className="btn btn-form btn-xs w-75">
                INGRESAR
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
