import * as React from "react";
import styled from "styled-components";

const StyledInput = styled.input`
  padding: 16px;
  background: #ffffff;
  border: 1px solid #7660de;
  border-radius: 5px;
  width: 100%;
  outline: 0;
  transition: background-color 150ms ease-in-out, border-color 150ms ease-in-out,
    box-shadow 150ms ease-in-out;
  &:focus {
    box-shadow: 0px 0px 8px rgba(135, 206, 250, 0.75);
  }
`;

const Input = ({
  label,
  name,
  onChange,
  type = "text",
}: {
  label: string;
  name: string;
  onChange: (evento: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
}) => (
  <div>
    {label && (
      <React.Fragment>
        <label htmlFor={name}>{label}</label>
        <br />
      </React.Fragment>
    )}
    <StyledInput
      name={name}
      onChange={onChange}
      className="input"
      type={type}
      placeholder={label}
    />
  </div>
);

export default React.memo(Input);
