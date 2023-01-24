import React from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  removeAllItemCart,
  selectCartItemById,
} from './cartSlice';

const ShoppingCartItem = ({ beer }) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => selectCartItemById(state, beer.id));

  const onAddItemCart = () => dispatch(addItemCart(beer));
  const onRemoveItemCart = () => dispatch(removeItemCart({ id: beer.id }));
  const onRemoveAllItemCart = () =>
    dispatch(removeAllItemCart({ id: beer.id }));

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center border-top py-2">
      <div className="me-auto">
        <div>{beer.name}</div>
        <div className="text-muted">{beer.brand}</div>
        <div>{beer.alcohol}</div>
        <div></div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
          -
        </Button>
        <span className="px-2">x{beer.quantity}</span>
        <Button onClick={onAddItemCart} className="w-30 bg-success">
          +
        </Button>
      </div>
      <div>
        <Button variant="outline-danger" onClick={onRemoveAllItemCart}>
          &times;
        </Button>
      </div>
      {/* <Button onClick={() => console.log(store.state)}>State</Button> */}
    </Stack>
  );
};

export default ShoppingCartItem;
