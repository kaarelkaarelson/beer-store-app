import React, { useEffect } from 'react';
import { Stack, Offcanvas, Button } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { useShoppingCart } from './useShoppingCart';
import { emtpyCart, selectAllCartItems, selectCartGroups } from './cartSlice';
import { addCartOrders } from '../orders/ordersSlice';
// @ts-expect-error TS(6142): Module './ShoppingCartGroupItem' was resolved to '... Remove this comment to see the full error message
import ShoppingCartGroupItem from './ShoppingCartGroupItem';
// @ts-expect-error TS(6142): Module './ShoppingCartGroup' was resolved to 'C:/U... Remove this comment to see the full error message
import ShoppingCartGroup from './ShoppingCartGroup';

const ShoppingCart = ({
  isOpen
}: any) => {
  const dispatch = useDispatch();
  // @ts-expect-error TS(2339): Property 'closeCart' does not exist on type 'unkno... Remove this comment to see the full error message
  const { closeCart } = useShoppingCart();
  const cartItems = useSelector(selectAllCartItems);
  const cartGroups = useSelector((state) => selectCartGroups(state));

  const onConfirmPurchase = () => {
    dispatch(addCartOrders(cartItems));
    // @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
    dispatch(emtpyCart());
    console.log(cartItems);
  };

  useEffect(() => {
    console.log('this', cartGroups);
  }, [cartGroups]);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <Offcanvas
      show={isOpen}
      onHide={closeCart}
      placement="end"
      className="flex flex-column justify-content-center">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Offcanvas.Header closeButton>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
      </Offcanvas.Header>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <Offcanvas.Body>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Stack gap={3}>
          // @ts-expect-error TS(2550): Property 'values' does not exist on type 'ObjectCo... Remove this comment to see the full error message
          {Object.values(cartGroups).map((group: any, i: any) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <ShoppingCartGroup key={i} group={group} />
          ))}

          {/* {cartItems.map((beer, i) => (
            <ShoppingCartItem key={i} beer={beer} />
          ))} */}
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
