import React from 'react';

const Jumbo = props => (

  <div className="jumbotron">
    <h1 className="display-3 text-center">Let's Click!</h1>
    <p className="lead text-center">Don't be a hero. Click each once, but never more than once.</p>
    <hr className="my-4" />
    {/* <h5 className="text-center">Number of guesses remaining:{props.numLeft}</h5>
    <p className="lead text-center">
      <a className="btn btn-primary btn-lg" href="#" role="button">Restart</a>
    </p> */}
  </div>

);

export default Jumbo;
