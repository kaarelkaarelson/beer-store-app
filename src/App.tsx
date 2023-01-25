import React from 'react';
import { Route, Routes } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './layout/Layout' was resolved to 'C:/Users... Remove this comment to see the full error message
import Layout from './layout/Layout';
// @ts-expect-error TS(6142): Module './features/error/PageNotFound' was resolve... Remove this comment to see the full error message
import PageNotFound from './features/error/PageNotFound';
// @ts-expect-error TS(6142): Module './features/beers/BeerList' was resolved to... Remove this comment to see the full error message
import BeerList from './features/beers/BeerList';
// @ts-expect-error TS(6142): Module './features/orders/History' was resolved to... Remove this comment to see the full error message
import History from './features/orders/History';
// @ts-expect-error TS(6142): Module './features/home/Home' was resolved to 'C:/... Remove this comment to see the full error message
import Home from './features/home/Home';

const App = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Routes>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Route path="/" element={<Layout />}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Route index element={<Home />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Route path="store" element={<BeerList />} />
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Route path="history" element={<History />} />
        </Route>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
