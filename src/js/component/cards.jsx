
import React from "react";


const Cards = (props) => {
   
  return (

<div class="col">
    <div class="card h-100 bg-dark p-2 text-white">
      <div class="card-body">
        <div class="text-white fs-1 text-center">
       {props.counter1}
      </div>
      </div>
    </div>
  </div>

    );
};

export default Cards;