import React from "react";
import { StyledButton } from "./style";

type ButtonProps = {
  label: string;
  onClick: () => void;
  style?: React.CSSProperties;
};

const Button = ({ label, onClick, style }: ButtonProps) => {
  return (
    <StyledButton
      style={style}
      onClick={onClick}
    >
      {label}
    </StyledButton>
  );
};

export default Button;
