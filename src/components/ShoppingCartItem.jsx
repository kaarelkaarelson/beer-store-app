import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  selectCartItemById,
} from '../features/cart/cartSlice';
import store from '../app/store';

const ShoppingCartItem = ({ beer }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => selectCartItemById(state, beer.id));

  const onAddItemCart = () => dispatch(addItemCart(beer));
  const onRemoveItemCart = () => dispatch(removeItemCart({ id: beer.id }));

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <div className="me-auto">
        <div>{beer.name}</div>
        <div>{beer.brand}</div>
        <div>{beer.alcohol}</div>
        <div></div>
      </div>
      <div>x{cartItem.quantity}</div>
      <Button variant="outline-danger" onClick={onRemoveItemCart}>
        &times;
      </Button>
      <Button onClick={() => console.log(store.state)}>State</Button>
    </Stack>
  );
};

export default ShoppingCartItem;
