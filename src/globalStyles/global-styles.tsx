import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        font-family: 'Roboto', sans-serif; 
    }

    html {
        position: relative;
        min-height: 100%;
    }

    body {
        margin: 0;
        height: 100vh;
        width: 100vw;
    }

    p {
        color: white;
        font-weight: 300;
        letter-spacing: 0.075em;
        margin-top: 6px;
    }

    h1 {
        color: white;
        font-size: 3em;
        font-weight: 200;
        letter-spacing: 0.14em;
    }

    h2 {
        color: white;
        font-size: 2rem;
        font-weight: 300;
        margin: 0;
        letter-spacing: 0.075em;
    }
`;

export default GlobalStyle;
