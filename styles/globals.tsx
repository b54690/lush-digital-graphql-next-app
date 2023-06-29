import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{}>`
    *,
    *::after,
    *::before {
        margin: 0;
        padding: 0;
        box-sizing: inherit;
    },

    button,
    body {
        box-sizing: border-box;
        font-family: 'Nunito', sans-serif;
        font-weight: 400;
        line-height: 1.6;
        font-size: 1.6rem;
        background: #F9F9F9;
        color: #333;
    },

    html {
        /* desired fontsize / default font size (16px)*/
        font-size: 62.5% !important;
    
        @media screen and (max-width: 768px) {
            font-size: 50%;
        }
    }

    button {
        padding: 20px;
        min-width: 150px;
        margin: 30px auto;
        display: flex;
        justify-content: center;
        background-color: lightpink;
        font-size: 1.3rem;
        cursor: pointer;
    }

    .heading-primary {
        font-size: 3rem;
        font-weight: 300;
        text-transform: uppercase;
        text-align: right;
        padding-left: 20px;
    }
`;

export default GlobalStyle;
