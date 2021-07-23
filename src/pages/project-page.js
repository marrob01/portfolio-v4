import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import Seo from "../components/seo"
import AboutBody from '../components/aboutBody'


class projectPage extends React.Component {

  render () {

    const { data } = this.props
    const pageTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author

    return(

      <Layout
        title={pageTitle}
        subtitle="About Marcus Robinson"
        authorName={authorName}
      >
        <Seo title="About Page"/>
      
        <Link to="/">Go back to the homepage</Link>

        <AboutBody />
      </Layout>



    )
  }

    

  
}

export default projectPage
export const pageQuery = graphql`
  query {
    site{
      siteMetadata {
        title
        author
      }
    }
  }
`