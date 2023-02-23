import React from "react";
import { ThemeProvider } from "styled-components";

const main = {
  colors: {
    main: "#FAA619",
    dark: "#4C4D4F",
    mediumDark: "#54595F",
    lightDark: "#7A7A7A",
    white: "#FFFFFF",
    lightBlue: "#6EC1E4",
    lightGreen: "#61CE70",
    transparent: "transparent",
  },
  fonts: {
    light: "Effra-Light, sans-serif",
    medium: "Effra-Medium, sans-serif",
    heavy: "Effra-Heavy, sans-serif",
  }, 
  fontSizes: {
    xs: ".5em",
    sm: ".9em",
    md: "1.3em",
    lg: "2em",
  }
};

const Theme = ({ children }) => (
  <ThemeProvider theme={main}>{children}</ThemeProvider>
);

export default Theme;