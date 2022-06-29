import {createGlobalStyle} from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@0,400;0,700;1,400&display=swap');

*{ 
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html, body{
    font-family: 'Source Sans Pro', sans-serif;
}
`;