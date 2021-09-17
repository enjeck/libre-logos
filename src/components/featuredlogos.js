import React from "react"
import { Link } from "gatsby"
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
            <img src={logo.img} alt=""></img>
            <Link to={`/logo/${logo.id}`}>
            <h3 style={{color:"blue"}}>{logo.name}</h3>
            </Link>
          </div>
        ))}
      </div>
    </Featured>
  )
}

export default FeaturedLogos
