import React from 'react';
import { Stack, Offcanvas, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useShoppingCart } from '../hooks/useShoppingCart';
import { emtpyCart, selectAllCartItems } from '../features/cart/cartSlice';
import { addCartOrders } from '../features/orders/ordersSlice';
import ShoppingCartItem from './ShoppingCartItem';

const ShoppingCart = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { closeCart } = useShoppingCart();
  const cartItems = useSelector(selectAllCartItems);

  const onConfirmPurchase = () => {
    dispatch(addCartOrders(cartItems));
    dispatch(emtpyCart());
    console.log(cartItems);
  };

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
          {cartItems.map((beer, i) => (
            <ShoppingCartItem key={i} beer={beer} />
          ))}
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
