import React, { useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useGetBeersQuery } from '../features/api/apiSlice';
import { LoadingSpinner } from './LoadingSpinner';
import BeerExcerpt from './BeerExcerpt';

const BeerList = () => {
  const [search, setSearch] = useState('');

  const {
    data: beers,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBeersQuery();

  const onSearchChange = (e) => setSearch(e.target.value);

  return (
    <Container className="d-flex flex-column text-center align-items=center justify-content-center">
      <h1>Beer List</h1>
      <input
        type="text"
        placeholder="Search style..."
        onChange={onSearchChange}
        className="d-flex flex-row justify-content-center my-5"
      />
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>{error}</p>
      ) : isSuccess ? (
        <Row xs={1} md={2} lg={3} className="gy-4">
          {beers
            .filter((beer) => beer.style.toLowerCase().includes(search))
            .map((beer, i) => (
              <Col key={i} className="d-flex align-items-stretch ">
                <BeerExcerpt beer={beer} />
              </Col>
            ))}
          {/* FOR DEBUGGING */}
          {/* <div>{JSON.stringify(beers)}</div> */}
        </Row>
      ) : (
        <p>None of the above</p>
      )}
    </Container>
  );
};

export { BeerList };
