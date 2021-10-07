import React from "react"
import styled from "styled-components"

const Links = styled.section`
  width: 100%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  background: #eee;

  ul {
    list-style: none;
    padding-left: 0;
    margin: auto;
    font-family: 'sans serif';
  }

  li{
    padding: 5px;
  }

  a:hover{
    text-decoration: underline;
  }

  h4{
    color: #333;
  }

  input {
    width: 100%;
  }

  @media screen and (min-width: 850px) {
    section {
      padding: 40px !important;
    }
  }
`

const FooterLinks = () => {
  return (
    <Links>
      <ul>
        <li> <a href="https://github.com/enjeck/libre-logos#readme"> About</a></li>
        <li><a href="https://github.com/enjeck/libre-logos/blob/main/CONTRIBUTING.md">Contribute</a></li>
        <li><a href="https://github.com/enjeck/libre-logos">GitHub</a></li>
      </ul>
      <ul>
        <h4>Be notified when new logos are added:</h4>
      <p>Star and watch the repo on <a href="https://github.com/enjeck/libre-logos">GitHub</a></p>
      </ul>
    </Links>
  )
}

export default FooterLinks
