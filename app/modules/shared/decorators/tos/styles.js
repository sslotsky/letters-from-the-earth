import styled from 'styled-components';

export const Page = styled.div`
  min-height: 100vh;
  background-color: wheat;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem;
`;

export const Terms = styled.div`
  background-color: whitesmoke;
  display: flex;
  padding: 2rem;
  max-height: 25rem;
  overflow: auto;
`;

export const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;

  input {
    margin-bottom: 1rem;
  }

  button {
    margin-bottom: .2rem;
  }
`;
