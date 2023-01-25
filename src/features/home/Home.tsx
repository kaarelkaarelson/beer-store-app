import React from 'react';
// @ts-expect-error TS(2307): Cannot find module '../../assets/beerLogo.png' or ... Remove this comment to see the full error message
import beerLogo from '../../assets/beerLogo.png';

const Home = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="d-flex flex-column align-items-center">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <h1>Welcome to the Beer Store!</h1>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <div className="mt-3">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <img src={beerLogo} width="200px"></img>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <span className="mt-5">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message Click{' '}
        <a href="/store">here</a> to start ordering
      </span>
    </div>
  );
};

export default Home;
