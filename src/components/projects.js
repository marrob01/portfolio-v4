import * as React from "react"
import "../styles/Home.scss"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from "react"

const Projects = () => {
    const [appDes, setAppDes] = useState(false)
    const [appDes1, setAppDes1] = useState(false)
    console.log(appDes)


  return (
    <>
      <ul className="work-p">
        <h2 id="i"> View My Recent Projects = {"() =>  {"} </h2>
        <br></br>
      </ul>

      <div className = "project-container">

          <div className = "p-item">
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

           <button onClick={() => setAppDes(!appDes)}>
              View App Description
           </button>

           {appDes ? (
            <p>
              M and A’s Daily Dose: A free mental health app where users can go
              for mental care and inspiration. In the end users can create an
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

          <div className = "p-item">
              
          </div>

          <div className = "p-item">
              
          </div>

          <div className = "p-item">
              
          </div>

          <div className = "p-item">
              
          </div>


      </div>

      {/* <div className="odd-project">
        <div className="product-des">
          <h2>MA's Daily Dose | MERN STACK</h2>
          <button onClick={() => setAppDes(!appDes)}>
            View App Description
          </button>

          {appDes ? (
            <p>
              M and A’s Daily Dose: A free mental health app where users can go
              for mental care and inspiration. In the end users can create an
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
        

        <h2 className="work-p"> {"}"} </h2>

      </div> */}
    </>
  )
}

export default Projects
