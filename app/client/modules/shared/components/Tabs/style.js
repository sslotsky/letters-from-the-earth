import React from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

const Tab = props => (
  <NavLink
    {...props}
    activeStyle={{
      backgroundColor: 'white',
      fontWeight: 'bold',
      opacity: 1
    }}
  />
);

export const Tabs = styled.div`
  display: flex;
  flex-direction: row;
`;

export const TabContainer = styled.div`
  margin: 2rem;
`;

export const TabLink = styled(Tab)`
  height: 2rem;
  background-color: lightgray;
  color: darkslategray;
  text-decoration: none;
  padding: .5rem;
  display: flex;
  align-items: center;

  &:hover {
    opacity: 0.8;
  }
`;

export const TabContentContainer = styled.section`
  background-color: white;
  min-height: 100vh;
`;

export const TabContent = styled.div`
  padding: 2rem;
`;
