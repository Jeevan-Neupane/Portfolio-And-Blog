import styled from "styled-components";
import { WrapperContainer } from "../../style/Containers";
import { Link } from "react-router-dom";

export const ProjectsWrapper = styled(WrapperContainer)`
background-color:${props => props.theme.projectsBackground};
`

export const ProjectsContainer = styled.div`
max-width: 150rem;
margin: auto;
width: 92%;
`

export const ProjectsDiv = styled.div`
`




//*Single Project Section*//    

export const SingleProjectDiv = styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 5rem;
  margin-bottom: 11rem;

`

export const SingleProjectImageDiv = styled.div`

`


export const SingleProjectImage = styled.img`
width: 100%;
height: 100%;
display: block;
-o-object-fit: cover;
object-fit: cover;
`


export const SingleProjectDetailsDiv = styled.div`
padding: 2rem 0;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
`

export const SingleProjectTitle = styled.h3`
font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 2rem;
`
export const SingleProjectDettail = styled.p`
font-size: 1.8rem;
  color: #666;
  max-width: 60rem;
  line-height: 1.7;
  margin-bottom: 3rem;
  text-align:justify;
  font-weight: 500;
`
export const SingleProjectButton = styled(Link)`
text-decoration: none;
`