import * as React from "react"
import '../styles/projects.scss'
import { StaticImage } from "gatsby-plugin-image"

import { Link } from "gatsby"



const aboutBody = ( ) => {



    return(
      
        <>
            <div className="about">

                <div className="about-img">
                    { <StaticImage
                            src="../images/111.png"
                            quality={100}
                            formats={["AUTO", "WEBP", "AVIF"]}
                            alt="MA's dailys dose"
                            style={{ marginBottom: `1.45rem` }}
                            width = {500}
                            className= "about-img"
                    /> }
                </div>
                <div className="about-text"></div>
                    <p> Coming from NYC, in such a big city it can be hard to find your true self here. I choose to walk the path of an engineer to challenge myself, to keep moving forward no matter what, to also give back knowledge to my community for developing me into the person I am today! <br></br> <br></br>Web Development started early for me, in highschool is when I got my first real exeperience with just HTML and CSS. To me it was more then Web Development, it felt good to create something and the best part is there is no wrong answers! So from then on I promised myself to keep being unique and me with my work, and through my uniqueness I will have the career I want.   </p>

                    
            </div>
            

        
        </>
      
    
    ) 
}





export default aboutBody