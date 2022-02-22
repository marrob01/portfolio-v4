import * as React from "react"
import "../styles/Home.scss"
import { CgBrowser } from "react-icons/cg"
import { AiFillWechat } from "react-icons/ai"
import { VscBook } from "react-icons/vsc"

const HomeBody = () => {

  // .odd-project{
  //   position: relative;
  //   color: red;
  //   display: flex;
  //   justify-content: space-evenly;
  //   margin-right: 1%;

  //   .product-des {
  //     position: relative;
  //     text-align: center;
  //     top: 50px;
  //   }
  // }
  return (
    <>
      <section id="home-body">
        <div className="intro-box">
          <ul className="t-ul">
            <li className="t-li">
              <CgBrowser />
              <br></br>
              Scalable Applications
            </li>

            <li className="t-li">
              <AiFillWechat />
              <br></br>
              Communicator
            </li>

            <li className="t-li">
              <VscBook />
              <br></br>
              Driven To Learn
            </li>
          </ul>

          <div className="p-box">
            <h2>
              Hello everyone!<br></br> I am Marcus Robinson<br></br> Please feel
              free to explore my talent
            </h2>

            <p>
              I am a Frontend Software Engineer who thrives in fast-paced team oriented environments. My analytical and tenacious mindset helps me persist through challenges by taking a procedural approach to challenges. I strive to deliver communication and unique solutions in and outside of engineering.
            </p>
          </div>
        </div>

        <br></br>

        
      </section>
    </>
  )
}

export default HomeBody
