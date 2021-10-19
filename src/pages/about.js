import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

const About = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata?.title
  console.log(siteTitle)
  return (
    <Layout location={location} title={siteTitle}>
      <div>
        <h1>About</h1>
        <p>This is the about page</p>
      </div>
    </Layout>
  )
}

export default About

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
  }
`
