import React, { useEffect, useState } from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { Store } from "../data/store"
import {
  ItemContain,
  Similar
} from "../components/logo-styles"
import FeaturedLogos from "../components/featuredlogos"

const Logo = ({ location }) => {
  const [item, updateItem] = useState(Store)

  useEffect(() => {
    const ID = location.pathname.split("/")[2]
    updateItem(Store.find(el => el.id === ID))
  }, [])

  const download = () => {
    // code to download logo here
    }

  return (
    <Layout>
      <SEO title="Logo" />
      <ItemContain>
        <section className="img">
          <img src={item.img} alt=""></img>
        </section>
        <section className="logo-info">
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <h3> Free Logo </h3>
          <p>This logo is free to use.</p>
          <p>
            <button className="button download" onClick={download}>
              Download PNG
            </button>
          </p>
        </section>
      </ItemContain>
      <hr />
      <Similar>
        <h2>Similar</h2>
        <p>
          Logos similar to this logo
        </p>
        <div class = "similar-container">
          <img src={item.similar1} alt=""></img>
          <img src={item.similar2} alt=""></img>
          <img src={item.similar3} alt=""></img>
        </div>
      </Similar>
      <FeaturedLogos />
    </Layout>
  )
}

export default Logo
