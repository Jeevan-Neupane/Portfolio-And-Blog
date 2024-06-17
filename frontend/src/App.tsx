import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { lightTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyle";
import Homepage from "./pages/homepage/Homepage";
import Blogs from "./pages/blogs/Blogs";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/blogs",
      element: <Blogs />,
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
