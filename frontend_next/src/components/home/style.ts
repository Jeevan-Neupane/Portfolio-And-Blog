import styled from "styled-components";

import backgroundimg from "../../../public/assets/background.png";
import { css } from "styled-components";

export const HomeHero = styled.div`

position:relative;
height:100vh;
background-position:center;
min-height: 80rem;
  max-height: 120rem;
`;

export const HomeContent = styled.div`
position:absolute;
top:50%;
left:50%;
transform:translate(-50%, -50%);
max-width: 95rem;
width: 92%;

`

export const HomeTitle = styled.h1`
font-size:6rem;
text-transform:uppercase;
letter-spacing:3px;
color:${props => props.theme.textColor};
font-weight:800;
`

export const HomeInfoDiv = styled.div`
margin: 3rem auto 0 auto;
max-width: 80rem;
`

export const HomeInfo = styled.p`
color: ${props => props.theme.lightTextColor};
font-size: 2.2rem;
text-align: center;
width: 100%;
line-height: 1.6;
`

export const HomeHeroButtonsDiv = styled.div`
margin-top: 5rem;
text-align: center;
display: flex;
justify-content: center;
gap: 5rem;

`




//*Social Media*//

export const HomeSocialMediaDiv = styled.div`
position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: ${props => props.theme.navbar};
  box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  padding: .5rem;
`

export const SocialMediaIcon = styled.div`
width: 5rem;
font-size: 3rem;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;

`

export const SocialMediaIconLink = styled.a`
width: 100%;
  display: block;
  padding: 1rem;
  transition: background .3s;
  border-radius: 5px;
 
   
    margin: 0.5rem;
    color: ${props => props.theme.navLinkColor};

    &:hover {
      background: ${props => props.theme.hoverColor};  ;
    }
`


//*Scroll Down*//

export const ScrollDownDiv = styled.div`

position: absolute;
bottom: 3%;
left: 50%;
transform: translateX(-50%);
`

export const ScrollDownMouseIcon = styled.div`
width: 25px;
  height: 40px;
  border: 2px solid #333;
  border-radius: 60px;
  position: relative;
  overflow: hidden;





@keyframes wheel {
  0% {
    transform: translateY(0);
    opacity: 1;
  }
  100% {
    transform: translateY(25px);
    opacity: 0;
  }
}

&::after{
  content: '';
  width: 5px;
  height: 5px;
  position: absolute;
  top: 0;
  left: 40%;
  transform: translateX(-50%);
  background-color: #333;
  border-radius: 50%;
  opacity: 1;
  animation: wheel 1.3s infinite;
}
`

