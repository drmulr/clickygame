import React from 'react';
import './Header.css';

const Header = props => (

  <div><nav className="navbar navbar-expand-lg navbar-light bg-dark fixed-top">
    <h2 className="navbar brand text-light">Clicky Game</h2>
    <h5 className="nav-link text-light">Current Score: {props.currentScore}</h5>
    <h5 className="nav-link text-light">High Score: {props.highScore}</h5>
       </nav>

  </div>

);

export default Header;
