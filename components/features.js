'use client'

import React from "react"
import { Boxes } from "./features-styles"

const data = [
  {
    icon: "/images/free-icon.svg",
    heading: "Free and Open Source",
    details: " All logos will be given free of charge. Nothing will be paid to acquire them.",
  },
  {
    icon: "/images/exclusive-icon.svg",
    heading: "Exclusive, Trademarkable Logo",
    details: "Each logo is claimed once. Copyright transfers to the project that claims the logo.",
  },
  {
    icon: "/images/vector-icon.svg",
    heading: "Original Vector Art",
    details: "Original SVG and high-resolution PNG will be provided.",
  },
]

const Features = () => {
  return (
    <Boxes>
      {data.map((box, i) => (
        <div className={`box${i + 1}`} key={box.heading}>
          <img src={box.icon} alt="service icon"></img>
          <h4>{box.heading}</h4>
          <p>{box.details}</p>
        </div>
      ))}
    </Boxes>
  )
}

export default Features
