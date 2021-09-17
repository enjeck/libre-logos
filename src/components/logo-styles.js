import styled from "styled-components"

export const ItemContain = styled.section`
  width: 90%;
  display: grid;
  justify-content: space-around;
  grid-template-columns: 1fr 2fr;

  img {
    width: 400px;
  }

  @media screen and (max-width: 850px) {
    margin-left: 0 !important;
    width: 95% !important;
    display: flex;
    flex-wrap: wrap;
  }
  img {
    width: 350px;
  }
`
