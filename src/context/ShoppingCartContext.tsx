import React from 'react';
import { createContext, useState } from 'react';
// @ts-expect-error TS(6142): Module '../features/cart/ShoppingCart' was resolve... Remove this comment to see the full error message
import ShoppingCart from '../features/cart/ShoppingCart';

// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({
  children
}: any) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
      }}>
      {children}
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
