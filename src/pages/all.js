import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import LogosGrid from "../components/logosgrid"
import { Logos } from "../data/logos"

const All = () => (
  <Layout>
    <SEO title="All logos" />
    <LogosGrid logos={Logos} />
  </Layout>
)

export default All
