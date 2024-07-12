import styled from "styled-components";


export const FooterWrapper = styled.footer`
background-color:${props => props.theme.footerBackground};
color:${props => props.theme.footerColor};
`

export const FooterContainer = styled.div`
max-width: 150rem;
margin: auto;
width: 92%;
`

export const FooterUpperContainer = styled.div`
display: flex;
  justify-content: space-between;
  padding: 8rem 0;
`

export const SocialMediaDiv = styled.div`
order:2;
`

export const SocialMediaDivTitle = styled.h3`
font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`
export const SocialMediaIcon = styled.div`

display: flex;
justify-content: center;
align-items: center;
gap: 1rem;
margin-top:1rem;
`

export const SocialMediaIconLink = styled.a`
font-size: 3rem;
padding: 1rem;
transition: background .3s;
border-radius: 5px;
color:${props => props.theme.footerColor};
 
   
   

    &:hover {
      background: ${props => props.theme.hoverColor};  
      color:${props => props.theme.textColor};
    }
`

export const ShortIntroDiv = styled.div`
width: 40%;
order:1;
max-width: 50rem;
`

export const ShortIntroTitle = styled.h3`
font-size: 2.2rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`

export const ShortIntroDescription = styled.p`
margin-top: 2rem;
color: ${props => props.theme.footerColor};
font-size: 1.5rem;
line-height: 1.7;
`

export const FooterLowerContainer = styled.div`
 padding: 4rem 0;
  border-top: 1px solid #444;
  color: #eee;
  font-size: 1.4rem;
  text-align: left;
  text-align: center;

`
export const MadeByName = styled.a`
text-decoration: underline;
  font-weight: bold;
  margin-left: 2px;
  color: ${props => props.theme.footerColor};
`