import React from 'react';
import PropTypes from 'prop-types';
import './index.css';

export const Title = ({ children }) => <span className="tipografia title h1">{children}</span>;
Title.propTypes = {
  children: PropTypes.element.isRequired,
};

export const Body14 = ({ children }) => <span className="tipografia body14">{children}</span>;
Body14.propTypes = {
  children: PropTypes.element.isRequired,
};
