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
import ShoppingCartGroupItem from './ShoppingCartGroupItem';

const ShoppingCartGroup = ({ group }) => {
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
    <Stack direction="vertical" gap={2} className="border py-2 p-2">
      <div className="d-flex flex-row justify-content-between">
        <span>{group.group}</span>
        <div className="d-flex justify-content-end">
          <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
            -
          </Button>
          <Button onClick={onAddItemCart} className="w-30 bg-success">
            +
          </Button>
        </div>
      </div>
      {group.items.map((item, i) => (
        <ShoppingCartGroupItem key={i} item={item} />
      ))}
    </Stack>
  );
};

export default ShoppingCartGroup;
