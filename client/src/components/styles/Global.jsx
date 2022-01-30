import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

@font-face {
  font-family: "rubik";
  src: url("../../assets/fonts/Rubik-VariableFont_wght.ttf") format("ttf");
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: "rubik", sans-serif;
  background: #fafafa;
}

ul,
li {
  list-style: none;
}

img {
  max-width: 100%;
}

a{
  text-decoration: none;
}
`

export default GlobalStyle;