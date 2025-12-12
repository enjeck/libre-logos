import styled from "styled-components"

export const Featured = styled.section`
  margin-top: 60px;

  .featureditems {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 20px 0 70px;
    gap: 10px;

    .item {
      border: 1px solid #eee;
      box-shadow: 0 3px 10px 0px #eee;
      padding: 10px 20px 30px;
     
    }
    img{
      width:100%;
    }
  }

  h4 {
    color: #d96528;
    margin: 10px 0;
  }

  h2 {
    color: #FF3700;
    text-align: center;
    overflow: hidden;
  }

  h2 span {
    display: inline-block;
    position: relative;
  }

  h2 span:after,
  h2 span:before {
    content: " ";
    display: block;
    height: 1px;
    width: 1000px;
    background: #FF3700;
    position: absolute;
    top: 50%;
  }

  h2 span:before {
    left: -1010px;
  }

  h2 span:after {
    right: -1010px;
  }

  @media screen and (max-width: 800px) {
    .featureditems {
      width: 83vw;
      margin-left: 5vw;

    .item {
      width: 250px;
    }

      div {
        padding: 10px 20px;
        margin-bottom: 10px;
      }
    }

    img {
      width: initial;
    }
  }

  @media screen and (min-width: 800px) {
    .featureditems {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr 1fr;
      grid-template-rows: 1fr;
      grid-column-gap: 20px;
      grid-row-gap: 0px;

      div {
        padding: 40px 50px;
      }
    }

    img {
      width: 100%;
    }
  }
`
