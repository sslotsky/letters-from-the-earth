import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageHeader = styled.header`
  text-align: center;
  border-bottom: 1px solid #d2d2d2;
  color: darkslategray;
`;

export const MainContent = styled.main`
  flex: 1 100%;
  font-size: 1.5rem;
  padding: 2rem 5rem;
  color: darkslategray;
  transform-origin: 0 0;
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
