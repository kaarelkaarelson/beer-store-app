import React from 'react';
import { Accordion } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectAllOrders } from './ordersSlice';
import HistoryExcerpt from './HistoryExcerpt';

const History = () => {
  const orders = useSelector(selectAllOrders);

  return (
    <>
      <h1>History</h1>
      <span className="align-self-end mt-3">
        Number of orders: {orders.length}
      </span>
      {orders.length === 0 ? (
        <span className="text-muted mt-5">No orders yet</span>
      ) : (
        <Accordion className="pt-5">
          {orders.map((order, i) => (
            <HistoryExcerpt key={i} order={order} />
          ))}
        </Accordion>
      )}
    </>
  );
};

export default History;
