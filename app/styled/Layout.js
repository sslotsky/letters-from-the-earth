import styled from 'styled-components';

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

export const Button = styled.button`
  background-color: darkmagenta;
  color: white;
  border-radius: .3rem;
  cursor: pointer;
  border: none;
  padding: .75rem;
  box-shadow: .2rem .2rem .5rem darkorange;

  &:active {
    opacity: 0.8;
  }
`;
