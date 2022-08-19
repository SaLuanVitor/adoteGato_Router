import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Filhote from "./components/pags/Filhotes";
import Adulto from "./components/pags/Adultos";
import Principal, { GlobalStyled } from "./components/pags/Principal.js";
import FilhotesHeader from "./components/header/nav/FilhotesHeader.js";
import AdultosHeader from "./components/header/nav/AdultosHeader.js";
export default class App extends React.Component {
  render() {
    return (
      <Router>
        <GlobalStyled />

        <Link to="/adulto">
          <AdultosHeader />
        </Link>
        <Link to="/filhote">
          <FilhotesHeader />
        </Link>
        <Routes>
          <Route path="/" element={<Principal />} />
          <Route path="/adulto" element={<Adulto />} />
          <Route path="/filhote" element={<Filhote />} />
        </Routes>
      </Router>
    );
  }
}
