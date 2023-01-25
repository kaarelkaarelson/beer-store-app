import React from 'react';
import { useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Beer } from '../../types/types';
import {
  addItemCart,
  removeItemByIdCart,
  selectItemCartQuantity,
} from '../cart/cartSlice';

interface BeerExcerptProps {
  beer: Beer;
}

const BeerExcerpt = ({ beer }: BeerExcerptProps) => {
  const dispatch = useDispatch();
  // const quantity = useSelector((state) => state.cart.id === beer.id);
  const quantity = useSelector((state) =>
    selectItemCartQuantity(state, beer.uid)
  );

  useEffect(() => {}, [quantity]);

  const onAddItemCart = () => dispatch(addItemCart(beer));
  const onRemoveItemCart = () => dispatch(removeItemByIdCart({ id: beer.id }));

  return (
    <Card className="w-100">
      <Card.Body className="d-flex flex-column children-space-between-1">
        <Card.Title>{beer.name}</Card.Title>
        <Card.Subtitle className="text-muted">{beer.brand}</Card.Subtitle>
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
          <div className="d-flex flex-row justify-content-center">
            <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
              -
            </Button>
            <span className="px-3">x{quantity}</span>
            <Button onClick={onAddItemCart} className="w-30 bg-success">
              +
            </Button>
          </div>
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
