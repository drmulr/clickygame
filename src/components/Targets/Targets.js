import React from 'react';
import './Targets.css';


const Targets = props => (

  <div onClick={() => props.alreadySelected(props.id)} className="card">
    <div className="img-container">
      <img alt={props.name} src={props.image} />
    </div>
  </div>

);


export default Targets;
