import React from "react"
import { Link } from "gatsby"
import { Store } from "../data/store"
import { Featured } from "./featuredlogos-styles"

const FeaturedLogos = () => {
  const featuredData = Store.slice(0, 3)

  return (
    <Featured>
      <h2>
        <span>Recent Logos</span>
      </h2>
      <div className="featureditems">
        {featuredData.map(logo => (
          <div className="item" key={logo.id}>
            <img src={logo.img} alt=""></img>
            <h3>{logo.name}</h3>
            <Link to={`/logo/${logo.id}`}>
              <button className="view-item">View</button>
            </Link>
          </div>
        ))}
      </div>
    </Featured>
  )
}

export default FeaturedLogos
