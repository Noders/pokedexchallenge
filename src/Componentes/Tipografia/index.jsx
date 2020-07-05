import PropTypes from "prop-types";
import styled from "styled-components";

export const Title = styled.span`
  ${({ theme }) => theme.tipografias["32m"]}
`;

Title.propTypes = {
  children: PropTypes.node.isRequired,
};

export const Body14 = styled.span`
  ${({ theme }) => theme.tipografias["14"]}
`;

Body14.propTypes = {
  children: PropTypes.node.isRequired,
};
