import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import "../styles/Header.scss"
import img from "../images/topP.jpg"
import { StaticImage } from "gatsby-plugin-image"

const TopBody = () => {
  return (
    <>
      <section className="top-section">
        <div className="top-box">
          <div className="top-about">
            <h1>
              I Create<br></br> Unique <br></br>Experiences
            </h1>

            <h5>Web Developer | Software Engineer , Rosedale, MD</h5>

            <Link to="/about-page/">
              <button>Learn More About Me</button>
            </Link>
          </div>

          <div className="top-img">
            {
              <StaticImage
              src="../images/home-img.jpeg"
              quality={100}
              formats={["AUTO", "WEBP", "AVIF"]}
              alt="Marcus Robinson"
              width={600}
              className="imgg"
            />

            }
        
        
         
          </div>
        </div>
      </section>
    </>
  )
}

export default TopBody
