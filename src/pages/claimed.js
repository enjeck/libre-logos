import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LogosGrid from "../components/logosgrid"
import { FilterLogos } from "../helpers/logo-filter"

const Claimed = () => (
  <Layout>
    <SEO title="Claimed Logos" />
    <LogosGrid logos={FilterLogos("Claimed")} />
  </Layout>
)

export default Claimed
