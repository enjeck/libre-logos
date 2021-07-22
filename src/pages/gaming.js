import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterLogos } from "../helpers/logo-filter"

const Gaming = () => (
  <Layout>
    <SEO title="Gaming Logos" />
    <StoreGrid logos={FilterLogos("Gaming")} />
  </Layout>
)

export default Gaming
