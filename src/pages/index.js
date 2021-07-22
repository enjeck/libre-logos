import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Textlockup from "../components/textlockup"
import SalesBoxes from "../components/salesboxes"
import FeaturedLogos from "../components/featuredlogos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Textlockup
      newText="FREE"
      saleText="Free to use logos"
      collectionText="No copyright"
      detailsText="Use without attribution"
    />
    <SalesBoxes />
    <Textlockup
      newText="OPEN"
      saleText="Open source"
      collectionText="Editable"
      detailsText="Can be modified"
    />
    <FeaturedLogos />
  </Layout>
)

export default IndexPage
