import React from "react"
import { Boxes } from "./features-styles"
import iconFree from "../images/free-icon.svg"
import iconVector from "../images/vector-icon.svg"
import iconTrade from "../images/exclusive-icon.svg"

const data = [
  {
    icon: iconFree,
    heading: "Free and Open Source",
    details: " All logos will be given free of charge. Nothing will be paid to acquire them.",
  },
  {
    icon: iconTrade,
    heading: "Exclusive, Trademarkable Logo",
    details: "Each logo is claimed once. Copyright transfers to the project that claims the logo.",
  },
  {
    icon: iconVector,
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
