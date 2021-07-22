import * as React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Dummy from '../components/dummy'
import Seo from "../components/seo"
import '../styles/Footer.scss'
import TopBody from '../components/Topbody'
import Body from '../components/HomeBody'
import { StaticImage } from "gatsby-plugin-image"





class HomePage extends React.Component {
  render() {
    const { data } = this.props
    // console.log(data)
    const pageTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author
    return(
      <Layout
        title={pageTitle}
        subtitle="About Marcus Robinson"
        authorName={authorName}
      >
      <Seo title="Home Page " />

      <TopBody />
      

      <Body />
 
    
    </Layout>


    )
  }
}





export default HomePage

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
