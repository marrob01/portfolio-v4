import * as React from "react"
import '../styles/Home.scss'
import { StaticImage } from "gatsby-plugin-image"
import { useState, useEffect } from 'react';
import { CgBrowser } from 'react-icons/cg';
import { AiFillWechat } from 'react-icons/ai';
import { VscBook } from 'react-icons/vsc';
import { Link } from "gatsby"






const HomeBody = ( ) => {

      const [appDes, setAppDes] = useState(false)
      const [appDes1, setAppDes1] = useState(false)
      console.log(appDes);

      return(

          <>

          <section id="home-body">

            <div className="intro-box">

                <ul className="t-ul">
                  <li className="t-li">
                  <CgBrowser /><br></br>
                  Scalable Applications
                  </li>

                  <li className="t-li">
                  <AiFillWechat /><br></br>
                  Communicator
                  </li>

                  <li className="t-li">
                  <VscBook /><br></br>
                  Driven To Learn
                  </li>

                </ul>

                <div className="p-box">

                    <h2>Hello everyone!<br></br> I am Marcus Robinson<br></br> Please feel free to explore my talent</h2>

                    <p>I am a Frontend Software Engineer who thrives in fast-paced team oriented environments.
                       My analytical and tenacious mindset helps me persist through challenges by taking a step by step approach. I strive to deliver communication and unique solutions in and outside of engineering.
                    </p>


                </div>


            </div>


            <ul className="project-container" id="projects">

            <ul className="work-p">
              <h2 id ="i">

                 View My Recent Projects ={"() => {"}
                 
              </h2><br></br>
                
              </ul>

              <li className= "home-img">
                        <h2>MA's Daily Dose | MERN STACK</h2>
                        <Link to='https://ma-health-app.herokuapp.com/'>
                        { <StaticImage
                          src="../images/atp-photo.png"
                          quality={95}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="MA's dailys dose"
                          style={{ marginBottom: `1.45rem` }}
                          width = {700}
                          className= "home-img"

                          /> }
                          </Link>

                          <li onClick={ () => setAppDes(!appDes)}  className="app-des">App Description</li>
                          {appDes ? <p>M and A’s Daily Dose: A free mental health app where users can go for mental care and inspiration. In the end users can create an account and get free mental health advice or tips. A full CRUD app with seven RESTful routes, built with Express, MongoDB, JavaScriptES6, HTML, and CSS.<br></br><a href="https://github.com/marrob01/M-and-A-Mental-Health"><button type="button" class="gh-btn">
                    Git Hub
                   </button></a>
                              ~~
                   <a href="https://ma-health-app.herokuapp.com/" target= 'blank'><button type="button" class="deployed-btn">
                    Deployed
                    </button></a></p>

                      : <p></p>
              }


              </li>


             <hr></hr>


              <li className= "home-img">
                        <h2>Around The Plate | Full Stack</h2>
                        <Link to = "https://around-the-plate-frontend.herokuapp.com/">
                        { <StaticImage
                          src="../images/atp-photo-1.png"
                          quality={100}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="MA's dailys dose"
                          style={{ marginBottom: `1.45rem` }}
                          width = {600}
                          className= "home-img"
                          /> }
                          </Link>

                        <li onClick={ () => setAppDes1(!appDes1)} className="app-des">App Description</li>

                        {appDes1 ? <p>Around The Plate : A recipe and food information app users can use to find any recipe by an ingredient from anywhere in the world and get real time results back. Users can create their own recipes to share with others around the world. Built with Flask and Python as my backend server, with React, React Router, React Bootstrap, CSS and a little  React Semantic-UI to serve my front end. Used API’s to find recipe information.<br></br><a href="https://github.com/marrob01/around-the-plate-frontend"><button type="button" class="gh-btn">
                            Git Hub
                        </button></a>
                            ~~
                   <a href="https://around-the-plate-frontend.herokuapp.com/" target= 'blank'><button type="button" class="deployed-btn">
                     Deployed
                    </button></a></p>

                      : <p></p>


              }

                </li>

                <hr></hr>

                <li className= "home-img">
                        <h2>Black Box Traveling | MERN Stack</h2>
                        <Link to = "https://blackbfrontend.herokuapp.com/">
                        { <StaticImage
                          src="../images/atp.png"
                          quality={100}
                          formats={["AUTO", "WEBP", "AVIF"]}
                          alt="Black Box Travel"
                          style={{ marginBottom: `1.45rem` }}
                          width = {600}
                          className= "home-img"
                          /> }
                          </Link>

                        <li onClick={ () => setAppDes1(!appDes1)} className="app-des">App Description</li>

                        {appDes1 ? <p>Black Box Traveling: A travel/vacation app users can use to find hotels, restaurants and events near any part of the world they want to travel. Included API’s so users can make a travel plan anywhere in the world and get updates in real time. A full MERN stack application, built with React and Bootstrap serving as the front end and Express and MongoDB serving as the back end.<br></br><a href="https://github.com/CoHogan1/Black-Box-Front_end"><button type="button" class="gh-btn">
                            Git Hub
                        </button></a>
                            ~~
                   <a href="https://blackbfrontend.herokuapp.com/" target= 'blank'><button type="button" class="deployed-btn">
                     Deployed
                    </button></a></p>

                      : <p></p>


              }

                </li>


               

                <hr></hr>

                <li className= "home-img">

<h2>Covid 19 Budget App | MERN Stack</h2>
<Link to = "https://covidspending.netlify.app/">
{ <StaticImage
  src="../images/covid.png"
  quality={100}
  formats={["AUTO", "WEBP", "AVIF"]}
  alt="Covid 19 Budget App"
  style={{ marginBottom: `1.45rem` }}
  width = {600}
  className= "home-img"
  /> }
  </Link>

<li onClick={ () => setAppDes1(!appDes1)} className="app-des">App Description</li>

{appDes1 ? <p>Covid 19 Budget App: <br></br><a href="https://github.com/CoHogan1/Black-Box-Front_end"><button type="button" class="gh-btn">
    Git Hub
</button></a>
    ~~
<a href="https://covidspending.netlify.app/" target= 'blank'><button type="button" class="deployed-btn">
Deployed
</button></a></p>

: <p></p>


}

</li>

                <h2 id ="i">
                {"}"}</h2><br></br>


            </ul>

            <div className="skills" id="skills">


              <h1 id="tech-h1">Technical Skills</h1>
              <div className = "skills-div">

                <ul className="skills-ul">
                  <h2>Backend Skills</h2>
                  <li>PostgreSQL</li>
                  <li>SQL</li>
                  <li>Flask</li>
                  <li>MongoDB</li>
                  <li>Python</li>
                </ul>

                <ul className="skills-ul">
                  <h2>Frontend Skills</h2>
                  <li>React</li>
                  <li>Express</li>
                  <li>jQuery</li>
                  <li>HTML 5</li>
                  <li>Node.js</li>
                  <li>CSS / SCSS</li>
                  <li>Bootstrap</li>
                  <li>JavaScript</li>


                </ul>

                <ul className="skills-ul">
                  <h2>Other Skills</h2>
                  <li>UNIX</li>
                  <li>Git / Github</li>
                  <li>Heroku</li>
                  <li>Postman</li>
                  <li>JSON</li>
                  <li>APIs</li>
                  <li>Mobile First</li>
                  <li>Object-oriented design</li>

                </ul>
              </div>

            </div>






          </section>
          </>


      )
  }





  export default HomeBody
