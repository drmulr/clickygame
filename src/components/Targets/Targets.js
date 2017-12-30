import React from 'react';
import Overdrive from 'react-overdrive';
import './Targets.css';


const Targets = props => (

  <div onClick={() => props.alreadySelected(props.id)} className="card">
    <div className="img-container target">
      <Overdrive id={props.id}>
        <img alt={props.name} src={props.image} />
      </Overdrive>
    </div>
  </div>

);


export default Targets;
