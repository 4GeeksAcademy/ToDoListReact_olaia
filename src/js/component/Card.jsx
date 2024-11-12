import PropTypes from "prop-types";
import React from "react";


const Card = (props) => {

    return(
        


<div class="card" style={{width: "18rem"}}>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">{props.task}</li>
  
  </ul>
</div>
    )
}

export default Card