import { styled } from "@linaria/react";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const StyledLabel = styled.span`
  font-size: 16px;
  font-weight: 700;
  display: block;
  width: ${({ width }) => (width ? `${width[0]}% ` : "30%")};
  min-width: fit-content;
`;

const StyledInput = styled.input`
  width: ${({ width }) => (width ? `${width[1]}% ` : "70%")};
  padding: 10px;
  height: 36px;
  font-size: 16px;
  font-weight: 400;
`;

const Input = ({ value, onChange, placeholder, label, disabled, width }) => {
  return (
    <Wrapper>
      <StyledLabel width={width}>{label}</StyledLabel>
      <StyledInput
        width={width}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default Input;
