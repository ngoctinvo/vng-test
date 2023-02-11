import { styled } from "@linaria/react";
import React from "react";

const Wrapper = styled.div`
  width: 100%;
  margin: 10px 0 10px 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  span {
    font-size: 14px;
    font-weight: 700;
    display: block;
    width: 30%;
  }
  input {
    width: 70%;
    padding: 10px;
    height: 36px;
    font-size: 16px;
    font-weight: 400;
  }
`;

const Input = ({ value, onChange, placeholder, label, disabled }) => {
  return (
    <Wrapper>
      <span>{label}</span>
      <input
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
      />
    </Wrapper>
  );
};

export default Input;
