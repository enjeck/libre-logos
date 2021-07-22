import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterLogos } from "../helpers/logo-filter"

const Abstract = () => (
  <Layout>
    <SEO title="Abstract Logos" />
    <StoreGrid logos={FilterLogos("Abstract")} />
  </Layout>
)

export default Abstract
