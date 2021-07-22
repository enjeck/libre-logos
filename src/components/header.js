import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Head, Nav } from "./header-styles"

const Header = ({ siteTitle }) => {

  return (
    <Head>
      <h1>{siteTitle}</h1>
      <Nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/all">All Logos</Link>
          </li>
          <li>
            <Link to="/tech">Tech</Link>
          </li>
          <li>
            <Link to="/gaming">Gaming</Link>
          </li>
          <li>
            <Link to="/abstract">Abstract</Link>
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
