import React, { useEffect, useState } from 'react';
import { Col, Container, Form, Row } from 'react-bootstrap';
import { useGetBeersQuery } from '../api/apiSlice';
// @ts-expect-error TS(6142): Module '../common/LoadingSpinner' was resolved to ... Remove this comment to see the full error message
import LoadingSpinner from '../common/LoadingSpinner';
// @ts-expect-error TS(6142): Module './BeerExcerpt' was resolved to 'C:/Users/k... Remove this comment to see the full error message
import BeerExcerpt from './BeerExcerpt';
import { Typeahead } from 'react-bootstrap-typeahead';

const BeerList = () => {
  const [search, setSearch] = useState('');
  const [searchBy, setSearchBy] = useState('name');
  const [suggestions, setSuggestions] = useState([]);

  const {
    data: beers,
    isLoading,
    isSuccess,
    isError,
    error,
  // @ts-expect-error TS(2554): Expected 1-2 arguments, but got 0.
  } = useGetBeersQuery();

  useEffect(() => {}, [suggestions]);

  const onSearchByChange = (e: any) => setSearchBy(e.target.value);

  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
  return <>
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <h1>Beers</h1>
    {isLoading ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <LoadingSpinner />
    ) : isError ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>{error}</p>
    ) : isSuccess ? (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
        <div
          className="d-flex flex-row align-self-center align-items-center w-100 w-sm-75"
          style={{ height: 'px' }}>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Form.Select
            aria-label="Search by..."
            onChange={onSearchByChange}
            className="w-33 w-sm-25 ">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option value="name">name</option>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
            <option value="brand">brand</option>
          </Form.Select>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
          <Typeahead
            id="search"
            // @ts-expect-error TS(2322): Type 'Dispatch<SetStateAction<never[]>>' is not as... Remove this comment to see the full error message
            onChange={setSuggestions}
            options={beers}
            labelKey={searchBy}
            placeholder="Search..."
            selected={suggestions}
            minLength={2}
            className="w-66 w-sm-75 my-5 "
          />
        </div>
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
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
                .map((beer: any, i: any) => (
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <Col key={i} className="d-flex align-items-stretch ">
                    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                    <BeerExcerpt beer={beer} />
                  </Col>
                ))
            : suggestions.map((beer, i) => (
                // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                <Col key={i} className="d-flex align-items-stretch ">
                  // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
                  <BeerExcerpt beer={beer} />
                </Col>
              ))}
        </Row>
      </>
    ) : (
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
      <p>None of the above</p>
    )}
  </>;
};

export default BeerList;
