import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin-left: 0;
    margin-right: 0; 
    padding-left: 0;
    padding-right: 0; 
    margin-bottom: 0;
    margin-top: 0; 
    padding-bottom: 0; 
    box-sizing: border-box;
    body {
      font-family: 'Varela Round', sans-serif;
    }
    a {
      color: inherit;
      text-decoration: none;
    }
    
    a:hover {
      color: #002400;
      text-decoration: underline;
    }
  }
`;