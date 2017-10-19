import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const headerHeight = '7rem';
export const colors = {
  main: 'darkslategray',
  secondary: 'floralwhite'
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
  display: flex;
  justify-content: space-between;

  h1 {
    flex: 1;
  }
`;

export const PageHeaderRight = styled.div`
  display: flex;
  align-items: center;
  margin-right: 1rem;
`;

export const MainContent = styled.main`
  flex: 1 100%;
  font-size: 1.5rem;
  padding: 2rem 5rem;
  color: darkslategray;
  transform-origin: 0 0;
`;

const buttonStyles = css`
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

export const Button = styled.button.attrs({
  type: 'button'
})`
  ${buttonStyles}
`;


export const LinkButton = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;

export const ButtonLink = Button.extend`
  border: none;
  box-shadow: none;
  background-color: transparent;
  color: steelblue;
  padding: 0;
  margin: 0 .5rem;

  &:hover {
    opacity: 0.6;
  }

  &:active {
    opacity: 0.3;
  }
`;


export const Buttons = styled.div`
  padding: 0 .5rem;

  button:not(:first-child) {
    margin-left: .5rem;
  }
`;

export const Secondary = styled.div`
  display: flex;
  align-items: center;
`;
