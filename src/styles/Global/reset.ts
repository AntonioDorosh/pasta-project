import { css } from 'styled-components';

export const reset = css`
    *,
    *::before,
    *::after {
        box-sizing: border-box;
    }

    ul[class],
    ol[class] {
        padding: 0;
    }

    body,
    h1,
    h2,
    h3,
    h4,
    p,
    li,
    figure,
    figcaption,
    blockquote,
    dl,
    dd {
        margin: 0;
    }

    body {
        min-height: 100vh;
        scroll-behavior: smooth;
        text-rendering: optimizeSpeed;
        line-height: 1.5;
        background: #ffdf8c;
        font-weight: 400;
        font-family: 'Inter', sans-serif;
    }

    ul[class],
    ol[class] {
        list-style: none;
    }

    a:not([class]) {
        text-decoration-skip-ink: auto;
    }

    a {
        text-decoration: none;
    }

    img {
        display: block;
        max-width: 100%;
    }

    article > * + * {
        margin-top: 1em;
    }

    input,
    button,
    textarea,
    select {
        font: inherit;
    }

    @media (prefers-reduced-motion: reduce) {
        * {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
            scroll-behavior: auto !important;
        }
    }
`;
