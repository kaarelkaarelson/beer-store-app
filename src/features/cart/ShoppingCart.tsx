import React, { useEffect } from 'react';
import { Stack, Offcanvas, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useShoppingCart } from './useShoppingCart';
import { emtpyCart, selectAllCartItems, selectCartGroups } from './cartSlice';
import { addCartOrders } from '../orders/ordersSlice';
import ShoppingCartGroupItem from './ShoppingCartGroupItem';
import ShoppingCartGroup from './ShoppingCartGroup';
import { CartGroupProps } from '../../types/interfaces';
import { CartState } from '../../types/types';

interface ShoppingCartProps {
  isOpen: boolean;
}

const ShoppingCart = ({ isOpen }: ShoppingCartProps) => {
  const dispatch = useDispatch();
  const { closeCart } = useShoppingCart();
  const cartItems = useSelector(selectAllCartItems);
  const cartGroups = useSelector((state: CartState) => selectCartGroups(state));

  const onConfirmPurchase = () => {
    dispatch(addCartOrders(cartItems));
    dispatch(emtpyCart({}));
    console.log(cartItems);
  };

  useEffect(() => {
    console.log('this', cartGroups);
  }, [cartGroups]);

  return (
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      className="flex flex-column justify-content-center">
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack gap={3}>
          {Object.values(cartGroups).map((group: any, i: any) => (
            <ShoppingCartGroup key={i} group={group} />
          ))}

          {/* {cartItems.map((beer, i) => (
            <ShoppingCartItem key={i} beer={beer} />
          ))} */}
          <Button
            type="button"
            disabled={cartItems?.length === 0}
            onClick={onConfirmPurchase}>
            Confirm Purchase
          </Button>
        </Stack>
      </Offcanvas.Body>
    </Offcanvas>
  );
};

export default ShoppingCart;
