import { px2vw } from "@/utils";
import { createGlobalStyle } from "styled-components";

export const Global = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0
    }

    :root {
        font-size: ${px2vw(24)};

        @media (min-width: 768px) {
            font-size: ${px2vw(18)};
        }

        @media (min-width: 1024px) {
            font-size: ${px2vw(13)};
        }
    }

    body {
        background-color: #FFBF9B;
        font-family: 'Roboto', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 1.5;
        color: #000;
    }

    a {
        text-decoration: none;
    }
`;
