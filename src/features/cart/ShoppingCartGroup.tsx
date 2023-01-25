import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Button, Card, Stack } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  removeAllItemCart,
  selectCartItemById,
} from './cartSlice';
// @ts-expect-error TS(6142): Module './ShoppingCartGroupItem' was resolved to '... Remove this comment to see the full error message
import ShoppingCartGroupItem from './ShoppingCartGroupItem';

const ShoppingCartGroup = ({
  group
}: any) => {
  const [lowestItemId, setLowestItemId] = useState(group?.items[0]?.id);
  const dispatch = useDispatch();

  useEffect(() => {
    const items = group.items;

    if (items) {
      setLowestItemId(items[0].id);
    }
  }, [group.items]);

  const onRemoveItemCart = () => dispatch(removeItemCart({ id: lowestItemId }));
  const onAddItemCart = () => dispatch(addItemCart({ id: lowestItemId }));

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Stack direction="vertical" gap={2} className="border py-2 p-2">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <div className="d-flex flex-row justify-content-between">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span>{group.group}</span>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div className="d-flex justify-content-end">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
            -
          </Button>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button onClick={onAddItemCart} className="w-30 bg-success">
            +
          </Button>
        </div>
      </div>
      {group.items.map((item: any, i: any) => (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ShoppingCartGroupItem key={i} item={item} />
      ))}
    </Stack>
  );
};

export default ShoppingCartGroup;
