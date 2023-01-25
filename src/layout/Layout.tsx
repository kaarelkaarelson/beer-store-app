import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const Layout = () => {
  return (
    <>
      <Header />
      <main
        className="d-flex flex-column min-vh-100 text-center mx-3 mx-md-5"
        style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
