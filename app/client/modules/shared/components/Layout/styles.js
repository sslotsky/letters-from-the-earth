import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

export const colors = {
  main: 'darkslategray',
  secondary: 'floralwhite'
};

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
  flex: 1;
  display: flex;
  justify-content: flex-end;

  button:not(:first-child) {
    margin-left: .5rem;
  }
`;

export const Secondary = styled.div`
  display: flex;
  align-items: center;
`;
