import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <Seo title="About Page" />
  
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
