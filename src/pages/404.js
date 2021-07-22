import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const browser = typeof window !== "undefined" && window

const NotFoundPage = () => {
  return (
    browser && (
      <Layout>
        <SEO title="404: Not found" />
        <h1>NOT FOUND</h1>
        <p>Sorry, this page doesn't exist</p>
      </Layout>
    )
  )
}

export default NotFoundPage
