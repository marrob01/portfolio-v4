import * as React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Seo from "../components/seo"
import Project from "../components/project"
import Skills from "../components/skills"


class ProjectPage extends React.Component {
  render() {
    const { data } = this.props
    const pageTitle = data.site.siteMetadata.title
    const authorName = data.site.siteMetadata.author

    return (
      <Layout
        title={pageTitle}
        subtitle="Recent Projects"
        authorName={authorName}
      >
        <Seo title="Projects Page" />
        <Project />
        <Skills />
      </Layout>
    )
  }
}

export default ProjectPage

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



