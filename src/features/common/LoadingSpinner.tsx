import React from 'react';

const LoadingSpinner = () => (
  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  <div
    className="flex align-items-center justify-content-center"
    style={{ height: '100vh' }}>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
    provided... Remove this comment to see the full error message
    <div className="spinner-grow text-secondary" role="status"></div>
  </div>
);

export default LoadingSpinner;
