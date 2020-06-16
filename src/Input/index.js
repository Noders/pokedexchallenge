import React from "react";
import "./index.css";

class Input extends React.Component {
  state = {};
  render() {
    const { label } = this.props;
    const onChange = (evento) => {
      this.setState({
        texto: evento.target.value,
      });
    };

    const onClick = () => {
      console.log(this.state);
    };

    return (
      <div>
        <label>{label}</label>
        <br />
        <input
          onChange={onChange}
          class="input"
          type="text"
          placeholder={label}
        />
        <button onClick={onClick}>Logeame</button>
      </div>
    );
  }
}

export default Input;
