import styled from "styled-components";

export const TitleOuterBox = styled.div`
text-align:center;
`

export const TitleBoxHeading = styled.h1`
position: relative;
margin-bottom: 3.5rem;
font-size:4rem;
text-transform: uppercase;
letter-spacing:0.3rem;
display:block;

&::after {
    content: '';
    position: absolute;
    top: calc(100% + 1.5rem);
    height: 5px;
    width: 3rem;
    background: blue;
    left: 50%;
    transform: translateX(-50%);
    border-radius: 5px;
  }
`

export const SubTitleBox = styled.h2`
font-size:2rem;
color:${props => props.theme.lightTextColor};
line-height:1.5;
max-width:80rem;
margin:0 auto;
font-weight:500;
`