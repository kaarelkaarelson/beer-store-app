import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
// @ts-expect-error TS(2307): Cannot find module '../assets/beerLogo.png' or its... Remove this comment to see the full error message
import beerLogo from '../assets/beerLogo.png';

const Footer = () => {
  return (
    // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is provided... Remove this comment to see the full error message
    <footer className="bottom-0 mt-auto bg-white w-100 shadow-sm py-4">
      // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
      provided... Remove this comment to see the full error message
      <Container className="py-3 border-top">
        // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag is
        provided... Remove this comment to see the full error message
        <Row>
          // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx' flag
          is provided... Remove this comment to see the full error message
          <Col md xs={6} className="d-flex align-items-center">
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
              flag is provided... Remove this comment to see the full error
              message
              <img src={beerLogo} width="50px" />
            </a>
            // @ts-expect-error TS(17004): Cannot use JSX unless the '--jsx'
            flag is provided... Remove this comment to see the full error
            message
            <span className="text-muted">© 2021 Kaarel-Richard Kaarelson</span>
          </Col>
          {/* <Col
            md
            xs={6}
            className="nav col-md-4 justify-content-end list-unstyled d-flex">
            <Nav className="justify-content-end list-unstyled d-flex">
              <Nav.Link>
                <img src={beerLogo} width="50"></img>
              </Nav.Link>
            </Nav>
          </Col> */}
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
