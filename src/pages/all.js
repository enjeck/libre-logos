import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import StoreGrid from "../components/storegrid"
import { Store } from "../data/store"

const All = () => (
  <Layout>
    <SEO title="All logos" />
    <StoreGrid logos={Store} />
  </Layout>
)

export default All
