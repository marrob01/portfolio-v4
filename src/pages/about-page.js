import * as React from "react"
import { Link } from "gatsby"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutBody from "../components/aboutBody"

class AboutPage extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author

    return (
      <Layout
        title={pageTitle}
        subtitle="About Marcus Robinson"
        authorName={authorName}
      >
        <Seo title="About Page" />

        <AboutBody />
      </Layout>
    )
  }
}

export default AboutPage
export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
