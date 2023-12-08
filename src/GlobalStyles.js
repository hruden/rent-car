import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`

@font-face {
    font-display: swap;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/manrope-v15-latin-regular.woff2') format('woff2');
  }
  

  @font-face {
    font-display: swap;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    src: url('./assets/fonts/manrope-v15-latin-500.woff2') format('woff2');
  }
  

  @font-face {
    font-display: swap;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 600;
    src: url('./assets/fonts/manrope-v15-latin-600.woff2') format('woff2');
  }
  

  @font-face {
    font-display: swap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 400;
    src: url('./assets/fonts/montserrat-v26-latin-regular.woff2') format('woff2');
  }
  

  @font-face {
    font-display: swap;
    font-family: 'Montserrat';
    font-style: normal;
    font-weight: 600;
    src: url('./assets/fonts/montserrat-v26-latin-600.woff2') format('woff2');
  }

  :root{
    font-family: 'Manrope', sans-serif;
  line-height: 1.5;
  font-weight: 400;

--black: #000000;
  --white: #ffffff;
  --brand: #3470ff;
  --accent: #0b44cd;
  --textInfo: rgba(18, 20, 23, 0.50);
  --textDivider: rgba(18, 20, 23, 0.1);
  --transition: 300ms cubic-bezier(0.4, 0, 0.2, 1);

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
    background-color: var(--white);
    color: var(--black);
  }

  code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a{
  text-decoration: none;
}
ul, ol {
    list-style: none;
    margin: 0;
    padding: 0;
  }

  img {
    display: block;
    max-width: 100%;
    height: auto;
  }

   input, button, textarea, select {
    font: inherit;
  }

  }
`;
