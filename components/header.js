'use client'

import React from "react"
import Link from "next/link"
import PropTypes from "prop-types"
import { Head, Nav } from "./header-styles"

const Header = ({ siteTitle }) => {

  return (
    <Head>
      <Link href="/" style={{textAlign:"center"}}>
        <img src="/images/ll-logo.svg" alt="Libre Logos"/>
        <h1>{siteTitle}</h1>
      </Link>
      <Nav>
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/all">All Logos</Link>
          </li>
          <li>
            <Link href="/available">Available</Link>
          </li>
          <li>
            <Link href="/claimed">Claimed</Link>
          </li>
        </ul>
      </Nav>
    </Head>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
