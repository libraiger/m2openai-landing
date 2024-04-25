import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Roboto", sans-serif;
}

body {
    background-color: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    transition: all 0.5s linear;
}

#root {
    overflow-x: hidden;
    max-width: 100vw;
}
`;

export const lightTheme = {
  body: "#fff",
};

export const darkTheme = {
  body: "#000",
};
