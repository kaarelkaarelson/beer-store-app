import React, { useEffect, useState } from 'react';
import { Col, Form, Row } from 'react-bootstrap';
import { useGetBeersQuery } from '../api/apiSlice';
import LoadingSpinner from '../common/LoadingSpinner';
import BeerExcerpt from './BeerExcerpt';
import { Typeahead } from 'react-bootstrap-typeahead';
import { BeerProps } from '../../types/interfaces';
import { Beer } from '../../types/types';

const BeerList = () => {
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [suggestions, setSuggestions] = useState<(typeof Option)[]>([]);

  const {
    data: beers,
    isLoading,
    isSuccess,
    isError,
    error,
  } = useGetBeersQuery({});

  useEffect(() => {}, [suggestions]);

  const onSearchByChange = (e: any) => setSearchBy(e.target.value);

  return (
    <>
      <h1>Beers</h1>
      {isLoading ? (
        <LoadingSpinner />
      ) : isError ? (
        <p>{error}</p>
      ) : isSuccess ? (
        <>
          <div
            className="d-flex flex-row align-self-center align-items-center w-100 w-sm-75"
            style={{ height: 'px' }}>
            <Form.Select
              aria-label="Search by..."
              onChange={onSearchByChange}
              className="w-33 w-sm-25 ">
              <option value="name">name</option>
              <option value="brand">brand</option>
            </Form.Select>
            <Typeahead
              id="search"
              onChange={(selected) => setSuggestions(selected)}
              options={beers}
              labelKey={searchBy}
              placeholder="Search..."
              selected={suggestions}
              minLength={2}
              className="w-66 w-sm-75 my-5 "
            />
          </div>
          <Row xs={1} md={2} lg={3} className="gy-4">
            {suggestions.length === 0
              ? beers
                  .filter((beer: any) => {
                    const field =
                      searchBy === 'name'
                        ? beer.name
                        : searchBy === 'brand'
                        ? beer.brand
                        : '';
                    return field.toLowerCase().includes(search.toLowerCase());
                  })
                  .map((beer: Beer, i: number) => (
                    <Col key={i} className="d-flex align-items-stretch ">
                      <BeerExcerpt beer={beer} />
                    </Col>
                  ))
              : suggestions.map((beer: Beer, i: number) => (
                  <Col key={i} className="d-flex align-items-stretch ">
                    <BeerExcerpt beer={beer} />
                  </Col>
                ))}
          </Row>
        </>
      ) : (
        <p>None of the above</p>
      )}
    </>
  );
};

export default BeerList;
