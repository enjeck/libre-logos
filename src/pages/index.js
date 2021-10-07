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
    <a href="https://www.producthunt.com/posts/librelogos-org?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-librelogos-org" 
    target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=315135&theme=light" 
    alt="librelogos.org - Free, exclusive logos for open source projects & NGOs | Product Hunt" 
    style={{marginTop: "20px", width: "250px", height: "54px"}} width="250" height="54" /></a>
    <Features />
    <div style={{maxWidth: "800px"}}>
      <h3 style={{fontSize: "2rem"}}>
        Eligibility
      </h3>
      <p>To claim a logo, you must an active open source project or a registered NGO. "Active" here means:</p>
      <ul>
        <li>Regular commits </li>
        <li> More than one contributor </li>
        <li> Over 100 GitHub stars </li>
        <li> Git history spanning over 1 year </li>
      </ul>

      <h3 style={{fontSize: "2rem"}}>
        How to claim a logo
      </h3>
      <ul>
        <li>To begin claiming a logo, create a GitHub issue, 
          using the <a href="https://github.com/enjeck/libre-logos/issues/new?assignees=&labels=logo+request&template=logo-request.md&title=Logo+request">"logo request" 
          issue template </a>. Please fill the template completely. The more information you provide, the faster your request will be processed.
        </li>
        <li>
          Your issue will be reviewed. 
          The "under review" label may be added to the issue.
        </li>
        <li>
        If your project is eligible and the requested logo is available, 
        your request will be granted.
        Once the logo is marked as "Claimed" and <code>R: Granted</code> label is added to the issue, 
        the requested logo is officially yours. 
        Congratulations! At this point, all copyright transfers to your project. 
        </li>
      </ul>
    </div>
    <FeaturedLogos />
  </Layout>
)

export default IndexPage
