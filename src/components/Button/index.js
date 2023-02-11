import { styled } from "@linaria/react";
import React from "react";

const StyledButton = styled.button`
  background-color: #134b5f;
  padding: 10px;
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  color: white;
  text-align: center;
  width: ${({ width }) => width};
  cursor: pointer;
  border: none;
  &:hover {
    background-color: #165a72;
  }
  svg {
    width: 16px;
    height: 16px;
  }
`;

const Button = ({ children, width = "fit-content", onClick }) => {
  return (
    <StyledButton width={width} onClick={onClick}>
      {children}
    </StyledButton>
  );
};

export default Button;
