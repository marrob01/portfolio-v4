import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import { SidebarData, TopNaVData } from "./SidebarData"
import { IconContext } from "react-icons"
import { useState } from "react"
import "../styles/Header.scss"

const Header = ({ siteTitle }) => {
  const [sidebar, setSidebar] = useState(false)

  const showSidebar = () => setSidebar(!sidebar)

  return (
    <>
      <IconContext.Provider value={{ color: "rgb(231, 184, 112)" }}>
        <nav className="navbar">
            <Link to="#" className="menu-bars">
              <FaIcons.FaBars className="icon" onClick={showSidebar} />
            </Link>
          

          <ul className="navbar__ul-nav">
            {TopNaVData.map((item, index) => {
              return (
                <li classNmae="navbar__menu-items" key={index}>
                  <Link to={item.path} >
                    {/* {item.icon} */}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
        <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
              <Link to="#" className="close-side-nav">
                <AiIcons.AiOutlineClose onClick={showSidebar}/>
              </Link>
            
          <ul className="nav-menu-items">
           
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path} >
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </nav>
      </IconContext.Provider>
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
