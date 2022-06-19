//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";
import Cards from "./component/cards.jsx";

window.onload = () => {
  let count = 0;

  const counter = () => {
    count++;
    console.log(count);
  

  ReactDOM.render(<Home count={count} />, document.querySelector("#app"));
};
  setInterval(counter, 1000);
};
