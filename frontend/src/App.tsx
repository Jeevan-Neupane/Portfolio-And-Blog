import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import darkTheme, { lightTheme } from "./style/theme";
import GlobalStyle from "./style/globalStyle";
import Button from "./reusable/buttons/Button";

const App = () => {


  const router = createBrowserRouter([
    {
      path: "/",
      element: <div>Home</div>,
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
      <Button label="Click Me" onClick={()=>{
        console.log("Button Clicked");
      }} 
      
      />
    </ThemeProvider>
  );
};

export default App;
