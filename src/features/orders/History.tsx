import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAllOrders } from './ordersSlice';
// @ts-expect-error TS(6142): Module './HistoryExcerpt' was resolved to 'C:/User... Remove this comment to see the full error message
import HistoryExcerpt from './HistoryExcerpt';

const History = () => {
  const orders = useSelector(selectAllOrders);

  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <h1>History</h1>
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <span className="align-self-end mt-3">
        Number of orders: {orders.length}
      </span>
      {orders.length === 0 ? (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <span className="text-muted mt-5">No orders yet</span>
      ) : (
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <Accordion className="pt-5">
          {orders.map((order, i) => (
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <HistoryExcerpt key={i} order={order} />
          ))}
        </Accordion>
      )}
    </>
  );
};

export default History;
