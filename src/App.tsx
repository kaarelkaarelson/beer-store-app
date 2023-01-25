import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './layout/Layout';
import PageNotFound from './features/error/PageNotFound';
import BeerList from './features/beers/BeerList';
import History from './features/orders/History';
import Home from './features/home/Home';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="store" element={<BeerList />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
