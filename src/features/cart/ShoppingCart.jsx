import React from 'react';
import { Stack, Offcanvas, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useShoppingCart } from './useShoppingCart';
import { emtpyCart, selectAllCartItems, selectCartGroups } from './cartSlice';
import { addCartOrders } from '../orders/ordersSlice';
import ShoppingCartGroup from './ShoppingCartGroup';

const ShoppingCart = ({ isOpen }) => {
  const dispatch = useDispatch();
  const { closeCart } = useShoppingCart();
  const cartItems = useSelector(selectAllCartItems);
  const cartGroups = useSelector((state) => selectCartGroups(state));

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
          {Object.values(cartGroups).map((group, i) => (
            <ShoppingCartGroup key={i} group={group} />
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
