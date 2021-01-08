import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { CarritoList } from "../components/carrito/CarritoList";
import { DatosCliente } from "../components/cliente/DatosCliente";
import { FiltrosComponent } from "../components/filtros/FiltrosComponent";
import { singleScreen } from "../components/single/singleScreen";
import { Footer } from "../components/ui/Footer";
import { Navegacion } from "../components/ui/Navegacion";
import { TiendaApp } from "../TiendaApp";
import { Provider } from "react-redux";
import { store } from "../components/store/store";
import { SignScreen } from "../components/auth/SignScreen";

export const AppRouters = () => {
  return (
    <>
    <Provider store={store}>
    <Router>
      <div>
        <div className="grid-ecommerce">
          <div className="margin-section">
            <Navegacion />
            <FiltrosComponent />
            <Switch>
              <Route exact path="/pagina-sola" component={singleScreen} />
              <Route exact path="/datos-clientes" component={DatosCliente} />
              <Route exact path="/sesion-usuario" component={SignScreen} />
              <Route exact path="/" component={TiendaApp} />
            </Switch>
            <Footer />
          </div>
          <CarritoList />
        </div>
      </div>
    </Router>
    </Provider>
    </>
  );
};
