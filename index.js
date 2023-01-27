import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { Sumar } from "./Sumar";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <Greeting />
    <Sumar/> 
  </>
   
);
