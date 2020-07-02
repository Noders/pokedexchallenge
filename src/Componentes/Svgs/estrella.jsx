import React from "react";
import PropTypes from "prop-types";

export const Estrella = ({ tamano }) => (
  <svg
    width={tamano}
    height={tamano}
    viewBox={`0 0 ${tamano} ${tamano}`}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 1L8.854 4.94953L13 5.58675L10 8.65931L10.708 13L7 10.9495L3.292 13L4 8.65931L1 5.58675L5.146 4.94953L7 1Z"
      fill="currentColor"
      stroke="black"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

Estrella.propTypes = {
  tamano: PropTypes.number,
};

Estrella.defaultProps = {
  tamano: 14,
};
