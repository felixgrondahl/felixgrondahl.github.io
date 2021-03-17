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

    a {
        color: #49bf9d;
    }

    button:focus {
        outline: 1px solid white;
    }

    p {
        color: white;
        font-weight: 300;
        letter-spacing: 0.075em;
        margin-top: 6px;
        line-height: 1.45em;
    }

    h1 {
        color: white;
        font-size: 3em;
        font-weight: 200;
        letter-spacing: 0.14em;

        @media (max-width: 768px) {
            font-size: 1.9em;
            letter-spacing: 0.25em;
        }
    }

    h2 {
        color: white;
        font-size: 2rem;
        font-weight: 300;
        margin: 0;
        letter-spacing: 0.16em;

        @media (max-width: 768px) {
            font-size: 1.1em;
            letter-spacing: 0.1em;
        }
    }

    h3 {
        color: white;
        font-size: 1.2rem;
        font-weight: 300;
        margin: 0px;
        margin-bottom: 4px;
        letter-spacing: 0.2em;
        
        @media (max-width: 768px) {
            font-size: 1em;
            letter-spacing: 0.1em;
        }
    }
`;

export default GlobalStyle;
