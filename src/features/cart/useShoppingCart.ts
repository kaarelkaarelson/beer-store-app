import { useContext } from 'react';
// @ts-expect-error TS(6142): Module '../../context/ShoppingCartContext' was res... Remove this comment to see the full error message
import { ShoppingCartContext } from '../../context/ShoppingCartContext';

export function useShoppingCart() {
  return useContext(ShoppingCartContext);
}
