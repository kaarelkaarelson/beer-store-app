import React from 'react';
import { Outlet } from 'react-router-dom';
// @ts-expect-error TS(6142): Module './Header' was resolved to 'C:/Users/kaarel... Remove this comment to see the full error message
import Header from './Header';
// @ts-expect-error TS(6142): Module './Footer' was resolved to 'C:/Users/kaarel... Remove this comment to see the full error message
import Footer from './Footer';

const Layout = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Header />
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <main
        className="d-flex flex-column min-vh-100 text-center mx-3 mx-md-5"
        style={{ marginTop: '5rem', marginBottom: '5rem' }}>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Outlet />
      </main>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Footer />
    </>
  );
};

export default Layout;
