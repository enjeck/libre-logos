import React from "react"
import FooterLinks from "./footer-links"
import {Blurb } from "./footer-styles"

const Footer = () => {
  return (
    <footer>
      <FooterLinks />
      <Blurb>
        <p>
        Copyright © 2021 Enjeck M.C. All rights reserved.
        </p>
      </Blurb>
    </footer>
  )
}

export default Footer
