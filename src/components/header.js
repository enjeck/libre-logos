import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Head, Nav } from "./header-styles"
import llLogo from "../images/ll-logo.svg"

const Header = ({ siteTitle }) => {

  return (
    <Head>
      <Link to="/" style={{textAlign:"center"}}>  <img src={llLogo} alt="Libre Logos"/>
      <h1>{siteTitle}</h1>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all">All Logos</Link>
          </li>
          <li>
            <Link to="/available">Available </Link>
          </li>
          <li>
            <Link to="/claimed">Claimed </Link>
          </li>
        </ul>
      </Nav>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

export default Header
