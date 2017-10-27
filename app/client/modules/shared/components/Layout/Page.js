import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const PageContainer = styled.div`
  position: relative;
`;

export const Page = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  position: absolute;
  top: 3.5rem;
  left: 0;
  width: 100%;
`;

export const Nav = styled.nav`
  position: fixed;
  background-color: darkslategray;
  color: white;
  height: 3.5rem;
  width: 100%;
  z-index: 1;
  display: flex;
  flex-direction: space-between;
  align-items: center;
`;

export const NavSection = styled.div`;
  flex: 1;
  height: 100%;
  display: flex;
  align-items: center;
`;

export const Content = styled.main`
  flex: 1;
  width: 80%;
  font-size: 1.5rem;
  color: darkslategray;
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const ContentHeader = styled.div`
  display: flex;
`;

const buttonStyles = css`
  background-color: transparent;
  color: darkred;
  border-radius: .3rem;
  cursor: pointer;
  border: 3px solid darkred;
  padding: .75rem;
  font-weight: bold;

  &:hover, &:focus {
    opacity: 0.5;
  }

  &:active {
    opacity: 0.2;
  }

  &[disabled] {
    cursor: not-allowed;
    opacity: 0.3;
  }
`;

export const Submit = styled.button.attrs({
  type: 'submit'
})`
  ${buttonStyles}
`;

export const LinkButton = styled(Link)`
  ${buttonStyles}
  text-decoration: none;
`;

export const Paragraph = styled.p`
  margin: 1rem 0 0 0;
`;

export const Letter = Content.extend`
  background-image: url("/assets/green_cup.png");
  font-size: 1rem;
`;
