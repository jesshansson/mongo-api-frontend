import styled from "styled-components/macro";

export const Title = styled.h1`
  text-align: center;
  font-size: 50px;
  font-family: 'Delicious Handrawn', cursive;
  font-weight: 400;
  
  @media (max-width: 700px) {
    font-size: 35px;
  }
`

export const Wrap = styled.div`
  margin: 20px;
  padding: 20px;
  background-color: #FCF8E8;
  border-radius: 10px;
`

export const Bold = styled.p`
  font-weight: 500;
  font-family: 'Delicious Handrawn', cursive;
  font-size: 20px;
  margin: 5px 0px;
`
