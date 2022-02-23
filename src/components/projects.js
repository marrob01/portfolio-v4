import * as React from "react"
import "../styles/Home.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"

const Projects = () => {
  const [appDes, setAppDes] = useState(false)
  const [appDes1, setAppDes1] = useState(false)
  const [appDes2, setAppDes2] = useState(false)

  return (
    <>
      <h2 id="i"> View My Recent Projects = {"() =>  {"} </h2>

      <div className="project-container">
        <div className="p-item">
          <h2>MA's Daily's Dose</h2>
          <Link to="https://ma-health-app.herokuapp.com/">
            {
              <StaticImage
                src="../images/atp-photo.png"
                quality={95}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="MA's dailys dose"
                style={{ marginBottom: `1.45rem` }}
                width={700}
                className="home-img"
              />
            }
          </Link>

          <button className="db" onClick={() => setAppDes(!appDes)}>
            View App Description
          </button>

          {appDes ? (
            <p>
              MA’s Daily Dose: A free mental health app where users can go for
              mental care and inspiration. In the end users can create an
              account and get free mental health advice or tips. A full CRUD app
              with seven RESTful routes, built with Express, MongoDB,
              JavaScriptES6, HTML, and CSS.<br></br>
              <a href="https://github.com/marrob01/M-and-A-Mental-Health">
                <button type="button" class="gh-btn">
                  Git Hub
                </button>
              </a>
              ~~
              <a href="https://ma-health-app.herokuapp.com/" target="blank">
                <button type="button" class="deployed-btn">
                  Deployed
                </button>
              </a>
            </p>
          ) : (
            <p></p>
          )}
        </div>

        <div className="p-item">
          <h2>Covid 19 Budget App | MERN Stack</h2>

          <Link to="https://covidspending.netlify.app/">
            {
              <StaticImage
                src="../images/covid.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="Covid 19 Budget App"
                style={{ marginBottom: `1.45rem` }}
                width={600}
                className="home-img"
              />
            }
          </Link>

          <button className="db" onClick={() => setAppDes2(!appDes2)}>
            View App Description
          </button>

          {appDes2 ? (
            <p>
              Covid 19 Budget App<br></br>
              <a href="https://github.com/CoHogan1/Black-Box-Front_end">
                <button type="button" class="gh-btn">
                  Git Hub
                </button>
              </a>
              ~~
              <a href="https://covidspending.netlify.app/" target="blank">
                <button type="button" class="deployed-btn">
                  Deployed
                </button>
              </a>
            </p>
          ) : (
            <p></p>
          )}
        </div>

        <div className="p-item">
          <h2>Around The Plate | Full Stack</h2>
          <Link to="https://around-the-plate-frontend.herokuapp.com/">
            {
              <StaticImage
                src="../images/atp-photo-1.png"
                quality={100}
                formats={["AUTO", "WEBP", "AVIF"]}
                alt="MA's dailys dose"
                style={{ marginBottom: `1.45rem` }}
                width={600}
                className="home-img"
              />
            }
          </Link>

          <button className="db" onClick={() => setAppDes1(!appDes1)}>
            View App Description
          </button>

          {appDes1 ? (
            <p>
              Around The Plate : A recipe and food information app users can use
              to find any recipe by an ingredient from anywhere in the world and
              get real time results back. Users can create their own recipes to
              share with others around the world. Built with Flask and Python as
              my backend server, with React, React Router, React Bootstrap, CSS
              and a little React Semantic-UI to serve my front end. Used API’s
              to find recipe information.<br></br>
              <a href="https://github.com/marrob01/around-the-plate-frontend">
                <button type="button" class="gh-btn">
                  Git Hub
                </button>
              </a>
              ~~
              <a
                href="https://around-the-plate-frontend.herokuapp.com/"
                target="blank"
              >
                <button type="button" class="deployed-btn">
                  Deployed
                </button>
              </a>
            </p>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </>
  )
}

export default Projects
