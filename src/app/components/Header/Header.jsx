import React from 'react';
import { pure } from 'recompose';
import { NavLink } from 'react-router-dom';
import './Header.css';

// TODO: rework this header
const PageContent = () => (
  <div className="header">
    <NavLink to="/">
      <div className="icon"> Empty App </div>
    </NavLink>
  </div>
);

export default pure(PageContent);
