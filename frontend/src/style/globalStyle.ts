import { createGlobalStyle } from "styled-components";


const GlobalStyle = createGlobalStyle`

*,*::after,*::before{
    margin: 0;
    padding: 0;
    box-sizing:border-box;
    scroll-behavior:smooth;
}

html{
    font-size:50.5%;
}


body{
    font-family:${props => props.theme.font_family_one},sans-serif;
    background:${props => props.theme.backgroundColor};
  
    color:${props => props.theme.textColor};
    
      overflow-x:hidden;
}

`

export default GlobalStyle;