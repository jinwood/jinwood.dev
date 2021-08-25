import React from "react";
import { StaticQuery, graphql } from "gatsby";
import { Container } from "react-bootstrap";

const Layout = ({ children, pageInfo }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={(data) => (
      <>
        <Container>
          <div>header</div>
          <div className="p-3 container">{children}</div>
        </Container>
      </>
    )}
  />
);

export default Layout;
