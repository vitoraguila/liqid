import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }
  html, body, #root {
    height: 100%;
    background-color: #FFF;
    font-family: Arial;
    -moz-osx-font-smoothing: grayscale;
    -webkit-font-smoothing: antialiased;
    font-smoothing: antialiased;
    font-weight: 400;
    background-color: #FAFAFA;
  }
  a {
    color: #00AEF0;
    font-weight: bold;
    text-decoration: none;
    &:hover {
      color: #42CDFE;
    }
  }
`;
