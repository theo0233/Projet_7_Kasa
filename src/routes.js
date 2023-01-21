import Home from "./pages/Home/Home";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Apropos from "./pages/A-Propos/A-Propos";
import Header from "./components/Header/header";
import Error from "./pages/Error/error";
import Footer from "./components/Footer";
import FicheLogement from "./pages/Fiche-Logement/FicheLogement";

const routes = (
  <body>
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/a_propos" component={Apropos} />
        <Route exact path="/location/:id" component={FicheLogement} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </Router>
  </body>
);

export default routes;
