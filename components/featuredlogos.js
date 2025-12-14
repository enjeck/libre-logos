'use client'

import React from "react"
import Link from "next/link"
import Image from "next/image"
import { Logos } from "../data/logos"
import { Featured } from "./featuredlogos-styles"

const FeaturedLogos = () => {
  const featuredData = Logos.slice(0, 4)

  return (
    <Featured>
      <h2>
        <span>Recently Added Logos</span>
      </h2>
      <div className="featureditems">
        {featuredData.map(logo => (
          <div className="item" key={logo.id}>
            <Image src={logo.img} alt={logo.name} width={200} height={200} style={{ width: '100%', height: 'auto' }} />
            <Link href={`/logo/${logo.id}`}>
              <h3 style={{ color: "blue" }}>{logo.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </Featured>
  )
}

export default FeaturedLogos
