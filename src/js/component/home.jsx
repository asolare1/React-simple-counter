import React from "react";
import Cards from "./cards.jsx";
import Icon from "./icon.jsx";


const Home = (props) => {


  
  
  return (
  <React.Fragment>
     <div class="p-5 mb-4 bg-light rounded-3 bg-dark">
      <div class="container-fluid py-5">
     <div class="row">
			<Icon />
      <Cards counter1={Math.floor(props.count/100000) % 10}/>
			<Cards counter1={Math.floor(props.count/10000) % 10}/>
			<Cards counter1={Math.floor(props.count/1000) % 10}/>
      <Cards counter1={Math.floor(props.count/100) % 10}/>
			<Cards counter1={Math.floor(props.count/10) % 10}/>
      <Cards counter1={props.count % 10}/>
			</div>
      </div>
      </div>
  </React.Fragment>
     
  
  );
};

export default Home;
