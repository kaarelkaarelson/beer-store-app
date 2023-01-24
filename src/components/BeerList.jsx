import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useGetBeersQuery } from '../features/api/apiSlice';
import { LoadingSpinner } from './LoadingSpinner';
import BeerExcerpt from './BeerExcerpt';
import { Typeahead } from 'react-bootstrap-typeahead';

const BeerList = () => {
  const [search, setSearch] = useState('');
  const [suggestions, setSuggestions] = useState([]);

  const {
    data: beers,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBeersQuery();

  useEffect(() => {
    console.log(suggestions);
  }, [suggestions]);

  return (
    <Container className="d-flex flex-column text-center align-items=center justify-content-center">
      <h1>Beers</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>{error}</p>
      ) : isSuccess ? (
        <>
          <Typeahead
            id="style-search"
            onChange={setSuggestions}
            options={beers}
            labelKey={'style'}
            placeholder="Search style..."
            selected={suggestions}
            className="my-5"
          />
          <Row xs={1} md={2} lg={3} className="gy-4">
            {suggestions.length === 0
              ? beers
                  .filter((beer) =>
                    beer.style.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((beer, i) => (
                    <Col key={i} className="d-flex align-items-stretch ">
                      <BeerExcerpt beer={beer} />
                    </Col>
                  ))
              : suggestions.map((beer, i) => (
                  <Col key={i} className="d-flex align-items-stretch ">
                    <BeerExcerpt beer={beer} />
                  </Col>
                ))}
          </Row>
        </>
      ) : (
        <p>None of the above</p>
      )}
    </Container>
  );
};

export { BeerList };
