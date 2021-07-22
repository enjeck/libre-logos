import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { FilterLogos } from "../helpers/logo-filter"

const Tech = () => (
  <Layout>
    <SEO title="Technology Logos" />
    <StoreGrid logos={FilterLogos("Tech")} />
  </Layout>
)

export default Tech
