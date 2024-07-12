import styled from "styled-components";
import { WrapperContainer } from "../../style/Containers";

export const AboutWrapper=styled(WrapperContainer)`
background-color:${props=>props.theme.aboutComponentBackground};
`


export const AboutContainer=styled.div`
max-width: 150rem;
margin: auto;
width: 92%;
`
export const AboutContent=styled.div`
display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 10rem;
`

//Know Me Section

export const KnowMeDiv=styled.div`

`

export const KnowMeHeading=styled.h3`
font-weight: 700;
font-size: 2.8rem;
margin-bottom: 3rem;
`

export const KnowMeDetails=styled.div`

`

export const KnowMeParagraph=styled.p`
font-size: 1.8rem;
color: #666;
max-width: 60rem;
line-height: 1.7;
font-weight: 500;
margin-bottom: 1rem;
`
export const ContactButton=styled.a`
margin-top: 2rem;
display: inline-block;

`


//*My Skills Section*//

export const MySkillsDiv=styled.div`
`

export const MySkillsHeading=styled.h3`
font-weight: 700;
  font-size: 2.8rem;
  margin-bottom: 3rem;

`

export const SkillsDiv=styled.div`
display: flex;
flex-wrap: wrap;
`

export const SkillsBox=styled.div`
padding: 1rem 2rem;
  margin-bottom: 1.5rem;
  margin-right: 1.5rem;
  font-size: 1.6rem;
  background: ${props=>props.theme.skillsBoxBackground};
  border-radius: 5px;
  font-weight: 600;
  color: ${props=>props.theme.skillsBoxColor};
`