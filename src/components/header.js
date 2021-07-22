import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import { Twirl as Hamburger } from 'hamburger-react'
import { useState, useEffect } from 'react';
import '../styles/Header.scss'





const Header = ({ siteTitle }) => {

  const [isOpenTop, setOpenTop] = useState(false);
  const [isOpenSide, setOpenSide] = useState(false)

  // here I am trying to close off the side bar while the screen size is a certain width. To prevent two nav bars being open at the same time!!


  // useEffect(() => {
  //   // console.log(w)
  //   while(w <= 768){

  //      return setOpenTop(false)

  //   }

  //  }, []);

  
  return(

    

      
    <>



      <header className='header' style={{ padding: `1rem 1.rem`,  }} >
         
  
      <div class="topNav">
          
          <Link  id="logo" to="/">Portfolio</Link>
          <Link  id="logo1" to="/">MR</Link>

      
          <div>
            <div className="ham-icon">
              <Hamburger toggled={isOpenTop} toggle={setOpenTop}   />
              
            </div>
            <div className= "ham-icon-side">
              <Hamburger toggled={isOpenSide} toggle={setOpenSide}   />
            </div>
          </div>
          
         
       
          <div className="topNavLinks" style={{display: isOpenTop ? 'block' : 'none' }}>
            <Link to="#">About </Link> 
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="https://docs.google.com/document/d/1NZls49sNSryFAytyoRkeJgcXa8Ot6zYDT8gfLJDU0eY/edit?usp=sharing">Resume</a>
          </div>

         </div>

          

    </header>
    
    <aside class="sidebar" style={{display: isOpenSide ? 'block' : 'none' }}>
      <nav className="sideNav" >
            <h1>Software Engineer</h1>
            <Link to="#">About </Link> 
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="https://docs.google.com/document/d/1NZls49sNSryFAytyoRkeJgcXa8Ot6zYDT8gfLJDU0eY/edit?usp=sharing">Resume</a>
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
