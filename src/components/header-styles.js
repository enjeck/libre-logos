import styled from "styled-components"

export const Head = styled.header`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  padding: 40px 40px 0;
  text-transform: uppercase;
  color: #FF3700;
  font-weight: bold;

  img {
    width: 100px;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    font-size: 3rem;
    font-weight: bold;
    color: #FF3700;
    text-shadow: 1px 1px 4px #FFD83E;
    margin: 0;
  }


  @media screen and (max-width: 900px) {
    h1 {
      margin: 0;
    }
    nav ul li {
      padding: 0 5px !important;
      
    }
  }
`

export const Nav = styled.nav`
  display: flex;
  width: 80vw;
  margin-top: 20px;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #eee;
  border-bottom: 1px solid #eee;
  padding: 8px 0;

  ul {
    padding-left: 0;
    li {
      display: inline;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-size: 13px;
      padding: 0 20px;
      border-left: 1px solid #ddd;
      border-right: 1px solid #ddd;
      position: relative;
      a {
        color: black;
        &:hover {
          color: #FF3700;
        }
      }
    }
  }
`
