import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "../src/Components/Footer/Footer";
import Header from "../src/Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppointmentHeroSection from "./Components/Appointment/AppointmentHeroSection";

function App() {
  return (
    <Router>
      <Header></Header>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/appointment">
          <AppointmentHeroSection></AppointmentHeroSection>
        </Route>
      </Switch>
      <Footer></Footer>
    </Router>
  );
}

export default App;
