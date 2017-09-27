import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RowContainer = styled.div`
  margin-bottom: 1rem;
  box-shadow: .2rem .2rem .5rem darkslategray;
  display: flex;
`;

const rowContent = elem => styled(elem)`
  flex: 1;
  padding: 2rem;
  height: 5rem;
  text-decoration: none;
  color: darkslategray;
`;

export const LinkRow = rowContent(Link);

export const RowContent = rowContent('div').extend`
  cursor: pointer;
`;

export const Grouping = styled.div`
  padding-left: 5rem;
`;
