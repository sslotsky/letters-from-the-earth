import styled from 'styled-components';
import { Link } from 'react-router-dom';

const headerHeight = '7rem';
const colors = {
  main: 'darkslategray'
};

export const PageContainer = styled.div`
  display: flex;
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background-color: ${colors.main};
`;

export const Logo = styled.div`
  height: ${headerHeight};
`;

export const Page = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

export const PageHeader = styled.header`
  text-align: center;
  color: floralwhite;
  height: ${headerHeight};
  background-color: ${colors.main};
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
