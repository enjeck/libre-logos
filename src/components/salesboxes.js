import React from "react"
import { Boxes } from "./salesboxes-styles"
import iconClock from "../images/clock.svg"
import iconVector from "../images/vector.svg"
import iconEdit from "../images/edit.svg"

const data = [
  {
    icon: iconClock,
    heading: "Fast and easy download",
    details: " 	Original SVG and high-resolution PNG available for download",
  },
  {
    icon: iconEdit,
    heading: "Editable",
    details: "You are free to make any minor or major design changes to the vector files.",
  },
  {
    icon: iconVector,
    heading: "Original Vector Art",
    details: "Original vector SVG format, built with open source tools.",
  },
]

const SalesBoxes = () => {
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

export default SalesBoxes
