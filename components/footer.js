'use client'

import React from "react"
import { FooterWrapper, FooterContent, FooterSection, Blurb } from "./footer-styles"

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        <FooterSection>
          <h4>About Libre Logos</h4>
          <p>
            Free, exclusive logos for open source projects and NGOs. 
            Each logo is claimed once with full copyright transfer.
          </p>
          <ul style={{ marginTop: 'var(--space-md)' }}>
            <li><a href="https://github.com/enjeck/libre-logos#readme">About</a></li>
            <li><a href="https://github.com/enjeck/libre-logos/blob/main/CONTRIBUTING.md">Contribute</a></li>
            <li><a href="https://github.com/enjeck/libre-logos">GitHub</a></li>
          </ul>
        </FooterSection>
        <FooterSection>
          <h4>Stay Updated</h4>
          <p>
            Star and watch the repository on GitHub to be notified when new logos are added.
          </p>
          <a href="https://github.com/enjeck/libre-logos" style={{ 
            marginTop: 'var(--space-md)',
            padding: '10px 20px',
            background: 'var(--primary-color)',
            color: 'white',
            borderRadius: 'var(--radius-sm)',
            fontWeight: '600'
          }}>
            Watch on GitHub
          </a>
        </FooterSection>
      </FooterContent>
      <Blurb>
        <p>Copyright © {new Date().getFullYear()} Libre Logos. All rights reserved.</p>
      </Blurb>
    </FooterWrapper>
  )
}

export default Footer
