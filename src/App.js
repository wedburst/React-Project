import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./assets/sass/style.sass";
import "./assets/styles/styles.css";
import { TiendaApp } from "./TiendaApp";
import { AppRouters } from "./routers/AppRouters";

function App() {
  return (
    <>
    <AppRouters/>
    </>
  );
}

export default App;
