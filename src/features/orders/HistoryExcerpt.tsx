import React from 'react';
import { Accordion, Table } from 'react-bootstrap';
import { CartItem, Order } from '../../types/types';

interface HistoryExcerptProps {
  order: Order;
}

const HistoryExcerpt = ({ order }: HistoryExcerptProps) => {
  return (
    <Accordion.Item eventKey={order.id}>
      <Accordion.Header>
        <div className="d-flex justify-content-between text-center">
          <span className="text-muted me-5">{order.date}</span>
          <span>{order.id}</span>
        </div>
      </Accordion.Header>
      <Accordion.Body>
        <Table responsive className="overflow-auto">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Brand</th>
              <th>Alcohol</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            {order.cart.map((item: CartItem, i: number) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{item.name}</td>
                <td>{item.brand}</td>
                <td>{item.alcohol}</td>
                <td>{item.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default HistoryExcerpt;
