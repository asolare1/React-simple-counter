import React from "react";
import Cards from "./cards.jsx";
import Icon from "./icon.jsx";


const Home = (props) => {

  let count = 0;

let counter = () => {

  count++

};

setInterval(counter,1000);

  return (
  <React.Fragment>
     <div class="p-5 mb-4 bg-light rounded-3 bg-dark">
      <div class="container-fluid py-5">
   <div class="row">
			<Icon />
      <Cards />
			<Cards />
			<Cards />
			<Cards />
      <Cards />
			<Cards />
			</div>
      </div>
      </div>
  </React.Fragment>
     
  
  );
};

export default Home;
