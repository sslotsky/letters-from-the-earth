import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10rem;
  background-color: wheat;
`;

export const Terms = styled.div`
  background-color: whitesmoke;
  flex: 1;
  padding: 2rem;
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
