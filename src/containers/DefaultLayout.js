import React from "react";
import { Container, Row, Col } from "shards-react";
import MainFooter from "../components/layout/Footer";

const DefaultLayout = ({ children }) => (
  <Container fluid>
    <Row>
      <Col
        className="main-content p-0"
        lg={{ size: 10, offset: 2 }}
        md={{ size: 9, offset: 3 }}
        sm="12"
        tag="main"
      >
        {children}
        <MainFooter />
      </Col>
    </Row>
  </Container>
);

export default DefaultLayout;
