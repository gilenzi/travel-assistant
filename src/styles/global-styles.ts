import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    body{
        margin: 0 auto;
        padding: 1.5rem;
        font-family: ${({ theme: { fonts } }) => fonts.primary};
        background: radial-gradient(circle, #1a1a2e, #0f0f1f, #0a0a14);
    }
`;

export default GlobalStyles;
