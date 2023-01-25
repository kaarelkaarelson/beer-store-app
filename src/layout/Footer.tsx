import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import beerLogo from '../assets/beerLogo.png';

const Footer = () => {
  return (
    <footer className="bottom-0 mt-auto bg-white w-100 shadow-sm py-4">
      <Container className="py-3 border-top">
        <Row>
          <Col md xs={6} className="d-flex align-items-center">
            <a
              href="/"
              className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
              <img src={beerLogo} width="50px" />
            </a>
            <span className="text-muted">© 2023 Kaarel-Richard Kaarelson</span>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
