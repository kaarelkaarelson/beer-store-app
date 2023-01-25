import React from 'react';
import { Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <div className="d-flex align-items-center justify-content-center vh-100">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <div className="text-center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <h1 className="display-1 fw-bold">404</h1>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <p className="fs-3">
          {' '}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <span className="text-danger">Oops!</span> Page not found.
        </p>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <p className="lead">The page you’re looking for doesn’t exist.</p>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Button onClick={() => navigate('/')} className="btn btn-primary">
          Go Home
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
