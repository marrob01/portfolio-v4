import * as React from "react"
import "../styles/projects.scss"

const Skills = () => {
  return (
    <>
      <div className="skills" id="skills">
        <h1 id="tech-h1">Technical Skills</h1>
        <div className="skills-div">
          <ul className="skills-ul">
            <h2>Programing Languages</h2>
            <li>Javascript</li>
            <li>JQuery</li>
            <li>PHP</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>SCSS</li>
            <li>SQL</li>
            <li>Python</li>
          </ul>

          <ul className="skills-ul">
            <h2>Platforms And Frameworks</h2>
            <li>Wordpress</li>
            <li>React.js</li>
            <li>Vue.js</li>
            <li>React Gatsby</li>
            <li>Node.js</li>
            <li>Bootstrap</li>
            <li>Tailwind.css</li>
            <li>Flask</li>
            <li>Git / Github</li>
            <li>Heroku</li>
            <li>Kinsta</li>
            <li>Postman</li>
          </ul>

          <ul className="skills-ul">
            <h2>Other Skills</h2>
            <li>JSON</li>
            <li>APIs</li>
            <li>RESTful API’s</li>
            <li>Mobile First</li>
            <li>Object-oriented design</li>
            <li>Agile Development</li>
            <li>Responsive Design</li>
            <li>Customer Support</li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Skills
