import React, { useEffect } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { CartState } from '../../types/types';
import {
  addItemCart,
  removeItemByIdCart,
  removeAllItemCart,
  selectCartItemById,
} from './cartSlice';

const ShoppingCartGroupItem = ({ item }: any) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state: CartState) =>
    selectCartItemById(state, item.id)
  );

  const onAddItemCart = () => dispatch(addItemCart(item));
  const onRemoveItemCart = () => dispatch(removeItemByIdCart({ id: item.id }));
  const onRemoveAllItemCart = () =>
    dispatch(removeAllItemCart({ id: item.id }));

  return (
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center border-top py-2">
      <div className="me-auto">
        <div>{item.name}</div>
        <div className="text-muted">{item.brand}</div>
        <div>{item.alcohol}</div>
        <div></div>
      </div>
      <div className="d-flex flex-row justify-content-center">
        <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
          -
        </Button>
        <span className="px-2">x{item.quantity}</span>
        <Button onClick={onAddItemCart} className="w-30 bg-success">
          +
        </Button>
      </div>
      <div>
        <Button variant="outline-danger" onClick={onRemoveAllItemCart}>
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default ShoppingCartGroupItem;
