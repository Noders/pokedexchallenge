import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const StyledPanel = styled.section`
  padding: 32px;
  background: #ffffff;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.06), 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  width: 100%;
  position: relative;
`;

function Panel({ children }) {
  return <StyledPanel>{children}</StyledPanel>;
}

Panel.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Panel;
