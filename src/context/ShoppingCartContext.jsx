import React from 'react';
import { createContext, useState } from 'react';
import ShoppingCart from '../components/ShoppingCart';

export const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);

  const openCart = () => setIsOpen(true);
  const closeCart = () => setIsOpen(false);

  return (
    <ShoppingCartContext.Provider
      value={{
        openCart,
        closeCart,
      }}>
      {children}
      <ShoppingCart isOpen={isOpen} />
    </ShoppingCartContext.Provider>
  );
}
