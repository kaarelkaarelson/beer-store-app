import React from 'react';
import { useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  selectItemCartQuantity,
} from '../features/cart/cartSlice';

const BeerExcerpt = ({ beer }) => {
  const dispatch = useDispatch();
  // const quantity = useSelector((state) => state.cart.id === beer.id);
  const quantity = useSelector((state) =>
    selectItemCartQuantity(state, beer.id)
  );

  useEffect(() => {
    // console.log(quantity);
    // console.log(beer.id);
  }, [quantity]);

  const onAddItemCart = () => dispatch(addItemCart(beer));
  const onRemoveItemCart = () => dispatch(removeItemCart({ id: beer.id }));

  return (
    <Card className="w-100">
      <Card.Body className="d-flex flex-column children-space-between-1">
        <Card.Title className="">{beer.name}</Card.Title>
        <Card.Subtitle>{beer.brand}</Card.Subtitle>
        <ListGroup variant="flush">
          <ListGroup.Item>{beer.style}</ListGroup.Item>
          <ListGroup.Item>{beer.hop}</ListGroup.Item>
          <ListGroup.Item>{beer.yeast}</ListGroup.Item>
          <ListGroup.Item>{beer.malts}</ListGroup.Item>
          <ListGroup.Item>{beer.ibu}</ListGroup.Item>
          <ListGroup.Item>{beer.alcohol}</ListGroup.Item>
          <ListGroup.Item>{beer.blg}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      <Card.Footer className="mt-auto">
        {quantity > 0 ? (
          <Button onClick={onRemoveItemCart} className="w-100 bg-danger">
            -
          </Button>
        ) : (
          <Button onClick={onAddItemCart} className="w-100">
            Add To Cart
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default BeerExcerpt;
