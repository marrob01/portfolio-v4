import React from "react"
import "../styles/projects.scss"
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const Project = () => {

  const projectImages = useStaticQuery(graphql`
    query  {
      atp :file(
        relativePath: { eq: "atp-photo-1.png"}
      ) {
        childImageSharp {
          fluid(maxWidth: 740,  quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      mads :file(
        relativePath: { eq: "atp-photo.png"}
      ) {
        childImageSharp {
          fluid(maxWidth: 740,  quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }

      covid :file(
        relativePath: { eq: "covid.png"}
      ) {
        childImageSharp {
          fluid(maxWidth: 740,  quality: 100) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
      
    }
  `)


  return (
    <>
      <div className="projects-heading">
        <h2 class="projects-heading__header"> - Some Of My Projects</h2>
      </div>
      <hr></hr>

      <div className="projects">
        {/* <img src="../images/atp-photo-1.png" /> */}

        {/* Project one */}
        <div class="projects__card">
          <Img fluid={projectImages.covid.childImageSharp.fluid} className="image" />
          <div className="block">
          <div class="projects__content block">
            <h2 class="projects__title">Covid-19 Budget</h2>
            <p class="projects__info">
              A Covid-19 budgeting app for government officals. A user can lookup the amount of money a state has received for Covid-19 relief, this way goverment officlas can tell if a state needs more funding for Covid-19.
                            </p>
            <div class="projects-btn-div">
              <Link to="https://github.com/marrob01/around-the-plate-frontend">
                <button class="projects-btn github">Github repo</button>

              </Link>
              <Link to="https://covidspending.netlify.app/">
                <button class=" projects-btn live">See Live</button>
              </Link>
            </div>

          </div>

          </div>
          
        </div>

        {/* Project two */}
        <div class="projects__card">
          <Img fluid={projectImages.mads.childImageSharp.fluid} className="image" />

          <div class="projects__content">
            <h1 class="projects__title">MA's Daily's Dose</h1>
            <p class="projects__info">
              A free mental health app where users can go for mental care and inspiration. In the end users can create an account and get free mental health advice or tips. A full CRUD app with seven RESTful routes.
                            </p>
            <div class="projects-btn-div">
              <Link to="https://github.com/marrob01/M-and-A-Mental-Health">
                <button class="projects-btn github">Github repo</button>

              </Link>
              <Link to="https://ma-health-app.herokuapp.com/">
                <button class=" projects-btn live">See Live</button>
              </Link>
            </div>
          </div>
        </div>

        {/* Project three */}
        <div class="projects__card">
          <Img fluid={projectImages.atp.childImageSharp.fluid} className="image" />

          <div class="projects__content">
            <h1 class="projects__title">Around The Plate</h1>
            <p class="projects__info">
              A recipe and food information app users can use to find any recipe by an ingredient from anywhere in the world and get real time results back. Users can create their own recipes to share with others around the world.
                        </p>
            <div class="projects-btn-div">
              <Link to="https://github.com/marrob01/around-the-plate-frontend">
                <button class="projects-btn github">Github repo</button>
              </Link>
              <Link to="https://around-the-plate-frontend.herokuapp.com/">
                <button class=" projects-btn live">See Live</button>
              </Link>
            </div>
          </div>
        </div>

      </div>
      <hr></hr>

      <div className="projects-footer">
        <h2 class="projects-footer__foot"> - Some More of my work on</h2>
      </div>

      <div className="more-work">
        <Link to="https://github.com/marrob01/">
          <button className="github">Github </button>
        </Link>
        <Link to="https://codepen.io/MarRob12">
          <button className="pens">Code Pens</button>
        </Link>
      </div>

    </>
  )

}

export default Project

