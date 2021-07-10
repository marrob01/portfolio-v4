import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../styles/Header.scss'




const TopBody = ({ siteTitle }) => {

    
    return(
        
      <>

        <section className="top-section" >
            <div className="top-box">

            <h1>
                    I Create<br></br> Unique <br></br>Experiences 

            </h1>

            <h5>
                Software Engineer | Full Stack Engineer, New York, NYC
            </h5>

            <Link to="/">
            <button>
                Learn More About Me  
            </button>
            </Link>
           
                
            </div>
            

        </section>
 
       
      </>
    )
  
    
  }
  

  
  export default TopBody
  