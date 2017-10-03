import styled from 'styled-components';
import { colors } from 'APP_ROOT/styled/Layout';

export const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background-color: black;
  opacity: 0.7;
  height: 100%;
  width: 100%;
`;

export const ModalContainer = styled.div`
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  align-items: center;
  justify-content: space-around;
`;

export const Dialog = styled.div`
  flex: 1;
  background-color: white;
  max-width: 50%;
  min-height: 10rem;
  box-shadow: .3rem .3rem .8rem black;
  color: ${colors.main};
  display: flex;
  flex-direction: column;
`;

export const Header = styled.div`
  height: 2rem;
  display: flex;
  flex-direction: row-reverse;
  padding: 1rem;
  border-bottom: 1px solid #d2d2d2;

  h1 {
    flex: 1;
    font-size: 1.5rem;
    text-align: center;
    margin: 0;
  }
`;

export const Close = styled.button`
  cursor: pointer;
  border: none;
  background-color: transparent;
  color: ${colors.main};

  &:hover {
    opacity: 0.8;
  }
`;

export const Content = styled.div`
  padding: 2rem;
  max-height: 20rem;
  overflow: auto;
`;
