import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import First from "./First";
import React from "react";
import SeparatePlanet from './SeparatePlanet'
import SeparatePeople from "./SeparatePeople";

function Pathh() {
  return (
    <React.Fragment>
      <Routes>
        <Route path="/" element={<First />}></Route>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/planet/:id" element={<SeparatePlanet />}></Route>
        <Route path="/people/:id" element={<SeparatePeople />}></Route>
      </Routes>
    </React.Fragment>
  );
}

export default Pathh;
