import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Features from "../components/features"
import FeaturedLogos from "../components/featuredlogos"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <h2 style={{fontSize: "2.6rem", marginTop: "40px", color:"#FF3700"}}>Free, exclusive logos</h2>
    <h5 style={{fontSize: "1.1rem", textTransform:"uppercase",color:"#333"}}> For open source projects and NGOs </h5>
    <Features />
    <div>
      <h3 style={{fontSize: "2rem"}}>
        To claim a logo:
      </h3>
      <ul>
        <li>You must have an active open source project or a registered
          NGO. "Active" here means regular commits and several contributors.
        </li>
        <li> Create a GitHub issue requesting a logo, and linking to it. 
          Logos will be given to eligible projects on a first-come, first served basis. 
        </li>
        <li>
          Your project should be a good fit for the selected logo. 
          Each logo has a short description that specifies the type of project it is ideal for. 
        </li>
      </ul>
    </div>
    <FeaturedLogos />
  </Layout>
)

export default IndexPage
