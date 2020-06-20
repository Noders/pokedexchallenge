import React from "react";
import "./index.css";

export const Title = (props) => {
  return <span className="tipografia title h1">{props.children}</span>;
};

export const Body14 = (props) => {
  return <span className="tipografia body14">{props.children}</span>;
};
