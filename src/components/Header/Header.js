import React from 'react';


const Header = props => (

  <div><nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <h2 className="navbar text-light">Clicky Game</h2>
    <div className="#" id="navbarNav">
      <ul className="navbar-nav nav-fill">
        <li className="nav-item text-center">
          <h5 className="nav-link text-light">Current Score: {props.currentScore}</h5>
        </li>
        <li className="nav-item text-center">
          <h5 className="nav-link text-light">High Score: {props.highScore}</h5>
        </li>
      </ul>
    </div>
  </nav>

  </div>

);

export default Header;
