import styled from "styled-components"

export const Boxes = styled.section`
  margin: 70px 0;
  display: flex;
  gap: 20px;

  div {
    border: 1px solid #ddd;
    text-align: center;
      padding: 40px 30px;
      flex: 1;
  }

  img{
    width: 80px;
    margin-top:20px;
    opacity: 0.7;
  }

  h4 {
    text-transform: uppercase;
    letter-spacing: 0.15em;
    margin: 0 0 10px 0;
    color: #333;
  }

  @media screen and (max-width: 900px) {
    div {
      padding: 20px 30px;
    }
  }

  @media screen and (max-width: 600px) {
    flex-wrap: wrap;
    justify-content: center;

    div {
      flex: none;
      width: 90%;
    }
  }

  @media screen and (min-width: 700px) {

   
  }

`
