import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import '../styles/Header.scss'
import img from '../images/topP.jpg'




const TopBody = () => {

    
    return(
        
      <>

        <section className="top-section" >
            <div className="top-box">
                <div>
                  <h1>
                    I Create<br></br> Unique <br></br>Experiences 

                </h1>

                <h5>
                    Software Engineer | Full Stack Engineer, New York, NYC
                </h5>

                <Link to="/project-page/">
                <button>
                    Learn More About Me  
                </button>
                </Link>

                </div>
              

              <div className="top-img">
                <img src={img} />
              </div>
           
                
            </div>
            

        </section>

       
      </>
    )
  
    
  }
  

  
  export default TopBody
  