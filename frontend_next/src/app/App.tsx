"use client";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "../style/theme";
import GlobalStyle from "../style/globalStyle";

const App = () => {
  return (
    <ThemeProvider theme={lightTheme}>
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
