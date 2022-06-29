import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
`

export const Button = styled.button`
  color: darkred;
  border: none;
  width: 200px;
  height: 60px;
  border-radius: 5px;
`