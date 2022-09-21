/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import * as React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { CgPhone } from "react-icons/cg"
import { CgFileDocument } from "react-icons/cg"

import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)



  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />

      <main>{children}</main>

      <div class="footer-box">
        <footer id="footer" class="footer">
          <ul class="foot-ul">
            <li class="foot-ul">
              <a href="tel:+17189157473">
                Cell <CgPhone className="foot-icon" />{" "}
              </a>
            </li>

            <li class="foot-ul">
              <a href="https://www.linkedin.com/in/marcusrobinson15/">
                Linkedin
              </a>
            </li>
            <li class="foot-ul">
              <a
                href="https://docs.google.com/document/d/1NZls49sNSryFAytyoRkeJgcXa8Ot6zYDT8gfLJDU0eY/edit?usp=sharing"
                target="blank"
              >
                Resume <CgFileDocument className="foot-icon" />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
