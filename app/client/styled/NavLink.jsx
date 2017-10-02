import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(props => (
  <Link {...props} activeStyle={{ opacity: 0.5 }} />
))`
  color: floralwhite;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    opacity: 0.85;
  }
`;
