import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RowContainer = styled.div`
  margin-bottom: 1rem;
  box-shadow: .2rem .2rem .5rem darkslategray;
  display: flex;
`;

export const LinkRow = styled(Link)`
  flex: 1;
  padding: 2rem;
  height: 5rem;
  text-decoration: none;
  color: darkslategray;
`;
