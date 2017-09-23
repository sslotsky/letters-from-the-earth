import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PageHeader = styled.header`
  flex: 1 100%;
  text-align: center;
`;

export const MainContent = styled.main`
  flex: 1 100%;
  font-size: 1.5rem;
  padding: 2rem 5rem;
`;

const likeAButton = elem => styled(elem)`
  background-color: darkmagenta;
  color: white;
  border-radius: .3rem;
  cursor: pointer;
  border: none;
  padding: .75rem;
  box-shadow: .2rem .2rem .5rem darkorange;

  &:hover, &:focus {
    opacity: 0.9;
  }

  &:active {
    opacity: 0.8;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const Button = likeAButton('button');
export const LinkButton = styled(likeAButton(Link))`
  text-decoration: none;
`;
