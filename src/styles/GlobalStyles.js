// src/styles/GlobalStyles.js
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: 'Poppins', sans-serif;
    background-color: #ffffff;
    color: #000000;
  }
  * {
    box-sizing: border-box;
  }
 .ui.fluid.card {
  width: 70vw;
  max-width: 707px;
  margin: 1rem 0;
} 
.ui.cards {
  flex-direction: column;
  justify-content: center;
  align-items: center;
  align-content: center;
}
.ui.text.container {
  width: auto;
  }
.ui.menu {
  margin: 0;
}
`;

export default GlobalStyles;
