import Home from "./pages/Home/Home";
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Apropos from "./pages/A-Propos/A-Propos";
import Header from "./components/Header";
import Error from "./pages/Error/error";
import Footer from "./components/Footer";
import FicheLogement from "./pages/Fiche-Logement/FicheLogement";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/a_propos">
          <Apropos />
        </Route>
        <Route path="/location/:id">
          <FicheLogement />
        </Route>
        <Route>
          <Error />
        </Route>
      </Switch>
      <Footer />
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
