import styled from "styled-components";

export const StyledButton = styled.button`
 padding: 1rem 2rem;
  font-size: 1.6rem;
  cursor: pointer;
  border: none;
  border-radius: .5rem;
  background-color:${props => props.theme.buttonColor};
  color: white;
  &:hover {
    transform: translateY(-1px);
  }
  transition: all 0.3s ease;
  outline: none;
`