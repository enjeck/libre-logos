import React from "react"
import styled from "styled-components"

const Links = styled.section`
  width: 80%;
  margin-left: 10%;
  padding: 40px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  ul {
    list-style: none;
    padding-left: 0;
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
        <li>About</li>
        <li>Contribute</li>
        <li>Contact</li>
      </ul>
      <ul>
        <li>Twitter</li>
        <li>GitHub</li>
      </ul>
      <ul>
        <h4>Be notified when new logos are added:</h4>
      <p>Star and watch the repo on GitHub</p>
      </ul>
    </Links>
  )
}

export default FooterLinks
