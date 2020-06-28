import * as React from 'react';
import styled from 'styled-components';
import propTypes from 'prop-types';

const StyledInput = styled.input`
  padding: 16px;
  background: #ffffff;
  border: 1px solid #7660de;
  border-radius: 5px;
  width: 100%;
`;

const Input = ({ label, name, onChange }) => (
  <div>
    {label && (
    <>
      <label html-for={name}>{label}</label>
      <br />
    </>
    )}
    <StyledInput
      name={name}
      onChange={onChange}
      className="input"
      type="text"
      placeholder={label}
    />
  </div>
);

Input.propTypes = {
  label: propTypes.string,
  onChange: propTypes.func,
};

export default Input;
