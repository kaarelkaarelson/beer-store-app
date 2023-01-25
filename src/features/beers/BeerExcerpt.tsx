import React from 'react';
import { useEffect } from 'react';
import { Card, Button, ListGroup } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import {
  addItemCart,
  removeItemCart,
  selectItemCartQuantity,
} from '../cart/cartSlice';

const BeerExcerpt = ({
  beer
}: any) => {
  const dispatch = useDispatch();
  // const quantity = useSelector((state) => state.cart.id === beer.id);
  const quantity = useSelector((state) =>
    selectItemCartQuantity(state, beer.uid)
  );

  useEffect(() => {
  }, [quantity]);

  const onAddItemCart = () => dispatch(addItemCart(beer));
  const onRemoveItemCart = () => dispatch(removeItemCart({ id: beer.id }));

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Card className="w-100">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card.Body className="d-flex flex-column children-space-between-1">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card.Title>{beer.name}</Card.Title>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Card.Subtitle className="text-muted">{beer.brand}</Card.Subtitle>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <ListGroup variant="flush">
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.style}</ListGroup.Item>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.hop}</ListGroup.Item>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.yeast}</ListGroup.Item>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.malts}</ListGroup.Item>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.ibu}</ListGroup.Item>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.alcohol}</ListGroup.Item>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <ListGroup.Item>{beer.blg}</ListGroup.Item>
        </ListGroup>
      </Card.Body>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Card.Footer className="mt-auto">
        {quantity > 0 ? (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <div className="d-flex flex-row justify-content-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button onClick={onRemoveItemCart} className="w-30 bg-danger">
              -
            </Button>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <span className="px-3">x{quantity}</span>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <Button onClick={onAddItemCart} className="w-30 bg-success">
              +
            </Button>
          </div>
        ) : (
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Button onClick={onAddItemCart} className="w-100">
            Add To Cart
          </Button>
        )}
      </Card.Footer>
    </Card>
  );
};

export default BeerExcerpt;
