import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Twirl as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react';
import '../styles/Header.scss'

const w = window.innerWidth;
const h = window.innerHeight;



const Header = ({ siteTitle }) => {

  const [isOpenTop, setOpenTop] = useState(false);
  const [isOpenSide, setOpenSide] = useState(false)

  // here I am trying to close off the side bar while the screen size is a certain width. To prevent two nav bars being open at the same time!!


  useEffect(() => {
    // console.log(w)
    while(w <= 768){
      
       return setOpenTop(false)

    }

   }, []);

  
  return(

    

      
    <>



      <header className='header' style={{ padding: `1rem 1.rem`,  }} >
         
  
      <div class="topNav">
          <p id="logo"> <>Software Engineer</> </p>
          
          
          <div className="ham-icon">
            <Hamburger toggled={isOpenTop} toggle={setOpenTop}   />
            
          </div>
          <div className= "ham-icon-side">
            <Hamburger toggled={isOpenSide} toggle={setOpenSide}   />
          </div>
         
       
          <div id="topNavLinks" style={{display: isOpenTop ? 'block' : 'none' }}>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <Link to="/project-page/">Projects</Link>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
          </div>

         </div>

          

    </header>
    
    <aside class="sidebar" style={{display: isOpenSide ? 'block' : 'none' }}>
      <nav className="sideNav" >
            <h1>Marcus Robinson</h1>
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <Link to="/project-page/">Projects</Link>
            <a href="#contact">Contact</a>
            <a href="#resume">Resume</a>
      </nav>
    </aside>

    </>
  )

  
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
