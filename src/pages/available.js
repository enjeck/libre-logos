import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LogosGrid from "../components/logosgrid"
import { FilterLogos } from "../helpers/logo-filter"

const Available = () => (
  <Layout>
    <SEO title="Available Logos" />
    <LogosGrid logos={FilterLogos("Available")} />
  </Layout>
)

export default Available
