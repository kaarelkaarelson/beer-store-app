import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <div className="position-relative">
      <Header />
      <main
        className="d-flex flex-column text-center mx-3 mx-md-5"
        style={{ height: '75vh', marginTop: '5rem', marginBottom: '5rem' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
