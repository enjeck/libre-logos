import React from "react"
import FooterLinks from "./footer-links"
import { Callout, Blurb } from "./footer-styles"
import CalloutImage from "../images/callout.jpg"

const Footer = () => {
  return (
    <footer>
      <Callout image={CalloutImage}>
        <h2>
          Over 100 free and open source logos for your project.
        </h2>
        <p>Perfect for your start up or open source project.</p>
      </Callout>
      <FooterLinks />
      <Blurb>
        <p>
          This project is open source. You can contribute{" "}
          <a href="https://github.com">
           on Github
          </a>
        </p>
      </Blurb>
    </footer>
  )
}

export default Footer
