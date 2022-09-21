import React from "react"
import "../styles/about.scss"
import Img from 'gatsby-image';
import { Link, useStaticQuery, graphql } from 'gatsby';

const AboutBody = (  ) => {
  const images = useStaticQuery(graphql`
    query  {
      aboutImg :file(
        relativePath: { eq: "topP.jpg"}
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
      <div className="about">
        <div className="about__section">
          <div className="about__img">
          <Img fluid={images.aboutImg.childImageSharp.fluid} className="image"/>
            
          </div>
            <p>
              Coming from NYC, in such a big city it can be hard to find your true
              self here. I choose to walk the path of an engineer to challenge
              myself, to keep moving forward no matter what, to also give back
              knowledge to my community for developing me into the person I am
              today! <br></br> <br></br>Web Development started early for me, in
              highschool is when I got my first real experience with just HTML and
              CSS. To me it was more then Web Development, it felt good to create
              something and the best part is there is no wrong answers! So from then
              on I promised myself to keep being unique and me with my work, and
              through my uniqueness I will have the career I want.
            </p>
        </div>
      </div>
    </>
  )
}

export default AboutBody


// export const images = graphql`
//   query  {
//     aboutImg :file(
//       relativePath: { eq: "topP.jpg"}
//     ) {
//       childImageSharp {
//         fluid(maxWidth: 740, quality: 100) {
//           ...GatsbyImageSharpFluid_noBase64
//         }
//       }
//     }
    
//   }


// `