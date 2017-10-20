import React from 'react';
import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';

const glyphStyles = css`
  border: none;
  background-color: transparent;
  color: ${props => props.color};
  height: 100%;
  padding: 0;

  i {
    height: 100%;
    font-size: 2rem;
    padding: 0 1rem;
    display: flex;
    align-items: center;
  }

  &:hover {
    opacity: 0.5;
    cursor: pointer;
  }
`;

const activeStyle = { backgroundColor: 'darkred', opacity: 1 };

export const GlyphLink = styled(props => (
  <NavLink {...props} activeStyle={activeStyle} />
))`
  ${glyphStyles}
  text-decoration: none;
`;
