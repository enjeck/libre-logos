import styled from "styled-components"

export const Callout = styled.section`
  width: 100%;
  height: 280px;
  background: url(${props => props.image}) center center no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  h2 {
    padding: 0 30px;
    text-align: center;
  }

  a,
  a:visited,
  a:active {
    color: #c4c3ec;
    font-weight: bold;
  }
`

export const Blurb = styled.div`
  background: black;
  width: 100%;
  padding: 10px 30px;
  color: white;
  text-align: center;
`
