import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { graphql } from 'gatsby'
import Layout from "../components/layout"
import Dummy from '../components/dummy'
import Seo from "../components/seo"



class HomePage extends React.Component {
  render() {
    const { data } = this.props
    console.log(data)
    const pageTitle = data.site.siteMetadata.title
    const authorNAme = data.site.siteMetadata.author
    return(
      <Layout
        title={pageTitle}
        subtitle="About Marcus Robinson"
      >

      <Seo title="Home" />

      <Dummy />
      
      {/* <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["AUTO", "WEBP", "AVIF"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      /> */}
      <p>
        <Link to="/page-2/">Go to page 2</Link> <br />
      </p>
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
