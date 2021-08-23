import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterLogos } from "../helpers/logo-filter"

const Available = () => (
  <Layout>
    <SEO title="Available Logos" />
    <StoreGrid logos={FilterLogos("Available")} />
  </Layout>
)

export default Available
