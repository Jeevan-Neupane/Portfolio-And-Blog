"use client";
import React from "react";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../../style/theme";
import GlobalStyle from "../../style/globalStyle";

type Props = {
  children: React.ReactNode;
};

const ThemeProviderWrapper = ({ children }: Props) => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
      {children}

    </ThemeProvider>
  );
};

export default ThemeProviderWrapper;
