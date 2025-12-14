'use client'

import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { HeroSection, HeroContent, HeroHeading, HeroSubheading, HeroDescription, HeroActions, BadgeWrapper } from './hero-styles'

const Hero = () => {
  return (
    <HeroSection>
      <HeroContent>
        <HeroSubheading>For Open Source & NGOs</HeroSubheading>
        <HeroHeading>
          Professional logos that <span className="highlight">elevate your project</span>
        </HeroHeading>
        <HeroDescription>
          Claim exclusive, trademark-ready branding for your open source project or NGO.
          Original vector art with full copyright transfer, completely free.
        </HeroDescription>
        <HeroActions>
          <Link href="/available">
            <button className="btn-primary">Browse Available Logos</button>
          </Link>
          <Link href="/all">
            <button>View All Logos</button>
          </Link>
        </HeroActions>
        <BadgeWrapper>
          <a
            href="https://www.producthunt.com/posts/librelogos-org?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-librelogos-org"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=315135&theme=light"
              alt="librelogos.org - Free, exclusive logos for open source projects & NGOs | Product Hunt"
              width={250}
              height={54}
            />
          </a>
        </BadgeWrapper>
      </HeroContent>
    </HeroSection>
  )
}

export default Hero
