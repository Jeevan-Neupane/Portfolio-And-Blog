import styled from "styled-components";
import { WrapperContainer } from "../../style/Containers";

export const ContactWrapper = styled(WrapperContainer)`

background-size: cover;
background-position: center;

`


export const ContactContainer = styled.div`
max-width: 150rem;
margin: auto;
width: 92%;
`

//Form Container

export const ContactFormContainer = styled.div`
box-shadow: rgba(100,100,111,0.2) 0px 7px 29px 0px;
  background: ${props => props.theme.formBackground};
  padding: 4rem;
  margin-top: 6rem;
  max-width: 90rem;
  text-align: right;
  width: 95%;
  border-radius: 5px;
  margin: 5rem auto 0 auto;
`

export const ContactForm=styled.form`

`

export const ContactFormField=styled.div`
margin-bottom: 4rem;
`

export const Label=styled.label`

color: #666;
  font-size: 1.4rem;
  letter-spacing: 1px;
  font-weight: 700;
  margin-bottom: 1rem;
  display: block;
  text-align: left;
`


export const Input=styled.input`
color: #333;
  padding: 2rem;
  width: 100%;
  border: 1px solid #ebebeb;
  font-size: 1.6rem;
  letter-spacing: 0px;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;
`

export const MessageArea=styled.textarea`
color: #333;
  padding: 2rem;
  width: 100%;
  border: 1px solid #ebebeb;
  font-size: 1.6rem;
  letter-spacing: 0px;
  background: #f0f0f0;
  border-radius: 5px;
  font-weight: 600;
  height: 20rem;
  resize: none;


`