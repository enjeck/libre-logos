import styled from "styled-components"

export const ItemContain = styled.section`
  margin-left: 8%;
  width: 80%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;

  @media screen and (max-width: 650px) {
    margin-left: 0 !important;
    width: 95% !important;
  }
`
