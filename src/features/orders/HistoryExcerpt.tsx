import React from 'react';
import { Accordion, Table } from 'react-bootstrap';

const HistoryExcerpt = ({ order }) => {
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
            {order.cart.map((beer, i) => (
              <tr key={i}>
                <td>{i + 1}</td>
                <td>{beer.name}</td>
                <td>{beer.brand}</td>
                <td>{beer.alcohol}</td>
                <td>{beer.quantity}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Accordion.Body>
    </Accordion.Item>
  );
};

export default HistoryExcerpt;
