import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Textlockup from "../components/textlockup"
import Features from "../components/features"
import FeaturedLogos from "../components/featuredlogos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Textlockup
      newText="LIBRE"
      saleText="Free, open source"
      collectionText="exclusive logos"
      detailsText="for Open source projects and NGOs"
    />
    <Features />
    <FeaturedLogos />
  </Layout>
)

export default IndexPage
