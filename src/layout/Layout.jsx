import React from 'react';
import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import { Footer } from './Footer';

function Layout() {
  return (
    <div>
      <Header />
      <main className="mt-8 mx-5">
        <Outlet />
      </main>
    </div>
  );
}

export { Layout };
