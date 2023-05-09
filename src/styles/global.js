import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    outline: none;
  }

  body {
    background: #D9D9D9;
    color: E6E7E8;
    -webkit-font-smoothing: antialiased;
  }

  .container-body{
    align-items: center;
    display: flex;
    height: 90vh;
    justify-content: center;
  }

  body, input, textarea, button {
    font-family: 'Inter';
    font-size: 18px;
    font-weight: 400;
  }

  button {
    cursor: pointer;
  }

  a {
    text-decoration: none;
  }

  input::-webkit-outer-spin-button,
  input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  input[type="number"] {
    -moz-appearance: textfield;
  }

  ::-webkit-scrollbar {
    width: 0.4rem;
  }

  .containerMain {
    diplay: flex;
  }
`;