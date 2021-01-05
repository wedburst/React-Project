import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/main.sass";
import "./assets/styles/styles.css";
import Logo from "./assets/images/react-icons.svg";

function App() {
  return (
    <div className="container">
      <div className="react-model">
        <div>
          <img src={Logo} className="iconos" alt="" />
          <p className="color">Bienvenido a tu proyecto de ReactJs</p>
        </div>
      </div>
    </div>
  );
}

export default App;
