import styled from "styled-components"

export const DisplayHomeContainer = styled.div`
  text-align: center;
  margin: auto;
  max-width: 70vw;

  h1 {
    color: brown;
    font-family: "Nunito Sans", sans-serif;
  }

  h2 {
    color: brown;
    font-family: "Nunito Sans", sans-serif;
  }

  @media (max-width: 600px) {
    select {
      width: 200px;
    }
  }
`
