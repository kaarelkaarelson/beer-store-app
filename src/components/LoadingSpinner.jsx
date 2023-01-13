import React from 'react';

const LoadingSpinner = () => (
  <div
    className="flex align-items-center justify-content-center"
    style={{ height: '100vh' }}>
    <div className="spinner-grow text-secondary" role="status"></div>
  </div>
);

export { LoadingSpinner };
