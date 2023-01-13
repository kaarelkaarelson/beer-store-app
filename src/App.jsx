import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Layout } from './layout/Layout';
import { PageNotFound } from './components/PageNotFound';
import { BeerList } from './components/BeerList';
import History from './components/History';

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<BeerList />} />
          <Route path="store" element={<BeerList />} />
          <Route path="history" element={<History />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
};

export default App;
