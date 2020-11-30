import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    box-sizing: border-box;    
  }

  html, body, #root {
    width: 100%;
    height: 100%;
    background: ${(props) => props.theme.colors.background};
  
    -webkit-font-smoothing: antialiased;
  }

  input, button { 
    font-family: 'Roboto', serif;
    font-size: 16px; 
  }

  h1,h2,h3,h4,h5,h6 { 
    font-weight: 500;
  }

  button {
    cursor: pointer;    
  }
`;
