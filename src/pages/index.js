import * as React from "react";
import { Col, Row } from "react-bootstrap";
import Layout from "../components/layout";

const IndexPage = () => (
  <Layout pageInfo={{ pageName: "index" }}>
    <Row>
      <Col md={4}>Hello World!</Col>
    </Row>
  </Layout>
);

export default IndexPage;
