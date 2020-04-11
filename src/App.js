import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/Home";
import Footer from "../src/Components/Footer/Footer";
import Header from "../src/Components/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import AppointmentHeroSection from "./Components/Appointment/AppointmentHeroSection";
import * as firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBI4GDPVZkMcHV_nGv2DtnzONKFHv6TkQk",
  authDomain: "doctor-front.firebaseapp.com",
  databaseURL: "https://doctor-front.firebaseio.com",
  projectId: "doctor-front",
  storageBucket: "doctor-front.appspot.com",
  messagingSenderId: "622491542776",
  appId: "1:622491542776:web:89a2cd1ccd367bc556070d",
};

firebase.initializeApp(firebaseConfig);

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
