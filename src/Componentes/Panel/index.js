import React from "react";
import "./index.css";

function Panel(props) {
  return <section class="panel">{props.children}</section>;
}

export default Panel;
