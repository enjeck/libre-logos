'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import PropTypes from "prop-types"
import { Head, Logo, Nav } from "./header-styles"

const base = process.env.NEXT_PUBLIC_BASE_PATH || '';

const Header = ({ siteTitle }) => {

  return (
    <Head>
      <Link href="/">
        <Logo>
          <Image src={`${base}/images/ll-logo.svg`} alt="Libre Logos" width={50} height={50} />
          <h1>{siteTitle}</h1>
        </Logo>
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
