import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterLogos } from "../helpers/logo-filter"

const Claimed = () => (
  <Layout>
    <SEO title="Claimed Logos" />
    <StoreGrid logos={FilterLogos("Claimed")} />
  </Layout>
)

export default Claimed
