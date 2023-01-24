import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

function Layout() {
  return (
    <div>
      <Header />
      <main className="my-8 mx-3 mx-md-5">
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
