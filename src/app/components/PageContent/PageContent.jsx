import React from 'react';
import PropTypes from 'prop-types';
import { pure } from 'recompose';
import './PageContent.css';

const PageContent = ({ children }) => (
  <div className="pageContent">
    {children}
  </div>
);

// TODO: check this
PageContent.propTypes = {
  children: PropTypes.node.isRequired
};


export default pure(PageContent);
