import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Store } from "../data/store"
import {
  ItemContain,
} from "../components/logo-styles"
import FeaturedLogos from "../components/featuredlogos"

const Logo = ({ location }) => {
  const [item, updateItem] = useState(Store)

  useEffect(() => {
    const ID = location.pathname.split("/")[2]
    updateItem(Store.find(el => el.id === ID))
  }, [])

  const isAvailable= item.availability;

  return (
    <Layout>
      <SEO title="Logo" />
      <ItemContain>
        <section className="img logo-img">
          <img src={item.img} alt={item.name}></img>
         
          {isAvailable != "Available"? (
            <p class="tag">{item.availability}</p>
          ) : (
          null
          )}
          
        </section>
        <section className="logo-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          {isAvailable == "Available"? (
            <a href="https://github.com/PROTechThor/libre-logos/" class="claim">
            Claim this logo
            </a>
          ) : (
          <a href="#" class="claim claimed">
          Already claimed
          </a>
          )}

          <div class="logo-details">
          <h4> Free Logo </h4>
          <p>This logo will be given free of charge. Nothing is paid to acquire it.</p>
          </div>
          <div class="logo-details">
          <h4> Exclusive, Trademarkable Logo </h4>
          <p>It is claimed once. Copyright transfers to the organisation/project that claimed the logo.</p>
          </div>
          <div class="logo-details">
          <h4> Original Vector Art </h4>
          <p>Original SVG and high-resolution PNG will be provided.</p>
          </div>
        </section>
      </ItemContain>
      <hr />
      <FeaturedLogos />
    </Layout>
  )
}

export default Logo
