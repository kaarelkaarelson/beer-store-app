import React from 'react';
import beerLogo from '../../assets/beerLogo.png';

const Home = () => {
  return (
    <div className="d-flex flex-column align-items-center">
      <h1>Welcome to the Beer Store!</h1>
      <div className="mt-3">
        <img src={beerLogo} width="200px"></img>
      </div>
      <span className="mt-5">
        Click <a href="/store">here</a> to start ordering
      </span>
    </div>
  );
};

export default Home;
