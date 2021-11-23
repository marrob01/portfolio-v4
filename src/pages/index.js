import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import "../styles/Footer.scss"
import TopBody from "../components/Topbody"
import Body from "../components/HomeBody"
// import Projects from './ProjectBox'

class HomePage extends React.Component {
  render() {
    const { data } = this.props
    // console.log(data)
    const pageTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author
    return (
      <Layout title={pageTitle} subtitle="About " authorName={authorName}>
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
    site {
      siteMetadata {
        title
        author
      }
    }
  }
`
