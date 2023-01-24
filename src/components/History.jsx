import React from 'react';
import { Accordion, Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllOrders } from '../features/orders/ordersSlice';
import HistoryExcerpt from './HistoryExcerpt';

const History = () => {
  const orders = useSelector(selectAllOrders);

  return (
    <Container className="d-flex flex-column text-center">
      <h1>History</h1>
      <Accordion className='pt-5'>
        {orders.map((order, i) => (
          <HistoryExcerpt key={i} order={order} />
        ))}
      </Accordion>
    </Container>
  );
};

export default History;
