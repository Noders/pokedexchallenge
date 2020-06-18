import React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 16px;
  background: #ffffff;
  border: 1px solid #7660de;
  border-radius: 5px;
  width: 100%;
`;

const Input = ({ label, onChange }) => {
  return (
    <div>
      <label>{label}</label>
      <br />
      <StyledInput
        onChange={onChange}
        className="input"
        type="text"
        placeholder={label}
      />
    </div>
  );
};

export default Input;
