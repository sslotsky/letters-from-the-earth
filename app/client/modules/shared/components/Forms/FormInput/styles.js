import styled from 'styled-components';
import { colors } from 'APP_ROOT/styled/Layout';

export const FormLabel = styled.label`
  flex: 1;
  display: flex;
  flex-direction: column;
  font-weight: bold;

  &:not(:first-child) {
    margin-left: 1rem;
  }

  input {
    color: ${colors.main};
    padding: 0.5rem;
    margin-top: 0.5rem;
  }

  i {
    margin-left: 1rem;

    &.fa-spinner {
      color: orange;
    }

    &.fa-check {
      color: green;
    }
  }
`;

export const Error = styled.p`
  color: darkred;
  font-size: 1rem;
`;
