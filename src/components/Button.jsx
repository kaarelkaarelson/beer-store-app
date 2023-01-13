import React from 'react';

const Button = ({ onClick, type, children, variant }) => (
  <button
    type={type}
    onClick={onClick}
    className={
      (variant === 'small' ? 'text-sm leading-none' : '') +
      'min-w-min px-4 py-2 border rounded bg-primary text-black hover:text-primary border-black hover:border-primary hover:text-teal hover:bg-white mt-4 lg:mt-0'
    }>
    {children}
  </button>
);

export { Button };
