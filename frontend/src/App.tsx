import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyle";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <>
          <Navbar />
          <Home />
          <About />
          <Projects />
        </>
      ),
    },
    {
      path: "/about",
      element: <div>About</div>,
    },
  ]);

  return (
    <ThemeProvider theme={lightTheme}>
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
};

export default App;
