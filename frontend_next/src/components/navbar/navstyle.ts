import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";


export const NavHeader = styled.header`
position:fixed;
z-index:1000;
width:100%;
background:${props => props.theme.navbar};
box-shadow:${props => props.theme.boxShadow};
`

export const NavContentBox = styled.div`
display: flex;
align-items:center;
justify-content:space-between;
padding:1rem 5rem;
`;

export const HeaderLogoContainer = styled(Link)`
  
    text-decoration: none;
    transition:color 0.3s ease;
    display: flex;
    color:${props => props.theme.textColor};

    align-items: center;
    &:hover{
        color:${props => props.theme.highlightColor};
    }


`;

export const HeaderImageContainer = styled.div`
width:5rem;
height:5rem;
border-radius:50px;
overflow:hidden;
background-color:${props => props.theme.highlightColor};
border:2px solid ${props => props.theme.highlightColor};
margin-right:1.5rem;
`

export const HeaderImage = styled(Image)`
width:100%;
height:100%;
object-fit:cover;
object-position:center;
display:block;

`
export const Myname = styled.span`
font-size:1.8rem;
text-transform:uppercase;
font-weight:700;
letter-spacing:1px;
`


export const NavDiv = styled.div`

`

export const NavList = styled.ul`
display:flex;
`


export const NavItem = styled.li`
list-style:none;



`

export const Links = styled.a`
  padding: 2.2rem 3rem;
  display: inline-block;
  font-size: 1.6rem;
  color: ${props => props.theme.navLinkColor};
  text-transform: uppercase;
  letter-spacing: 1px;
  font-weight: 800;
  transition: color .3s;
  text-decoration: none;
  &:hover {
    color: ${props => props.theme.highlightColor};
  }
  cursor: pointer;
`