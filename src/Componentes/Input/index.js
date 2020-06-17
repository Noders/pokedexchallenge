import React from "react";
import styled from "styled-components";

const StyleInput = styled.input`
    padding: 16px;
    background: #ffffff;
    border: 1px solid #7660de;
    border-radius: 5px;
`

class Input extends React.Component {
    state = {};
    render() {
      const { label } = this.props;
      const onChange = (evento) => {
        this.setState({
          texto: evento.target.value,
        });
      };
  
      return (
          <div>
            <label>{label}</label>
            <br />
            <StyleInput
              onChange={onChange}
              className="input"
              type="text"
              placeholder={label}
            />
          </div>
        
      );
    }
  }

export default Input;
