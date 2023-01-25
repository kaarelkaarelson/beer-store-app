import React, { useEffect } from 'react';
import { Button, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  removeAllItemCart,
  selectCartItemById,
} from './cartSlice';

const ShoppingCartGroupItem = ({
  item
}: any) => {
  const dispatch = useDispatch();
  const cartItem = useSelector((state) => selectCartItemById(state, item.id));

  const onAddItemCart = () => dispatch(addItemCart(item));
  const onRemoveItemCart = () => dispatch(removeItemCart({ id: item.id }));
  const onRemoveAllItemCart = () =>
    dispatch(removeAllItemCart({ id: item.id }));

  useEffect(() => {
    // console.log('item', item);
  }, []);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack
      direction="horizontal"
      gap={2}
      className="d-flex align-items-center border-top py-2">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="me-auto">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>{item.name}</div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="text-muted">{item.brand}</div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div>{item.alcohol}</div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div></div>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex flex-row justify-content-center">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
          -
        </Button>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="px-2">x{item.quantity}</span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button onClick={onAddItemCart} className="w-30 bg-success">
          +
        </Button>
      </div>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Button variant="outline-danger" onClick={onRemoveAllItemCart}>
          &times;
        </Button>
      </div>
    </Stack>
  );
};

export default ShoppingCartGroupItem;
