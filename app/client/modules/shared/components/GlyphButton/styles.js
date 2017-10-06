import styled from 'styled-components';
import { colors } from 'MODULES/shared/components/Layout';

export const Button = styled.button`
  background-color: transparent;
  border-color: ${colors.secondary};
  color: ${colors.secondary};
  border-radius: 0.5rem;
  cursor: pointer;
  padding: 0.5rem;

  &:hover {
    opacity: 0.8;
  }

  i {
    margin-left: 0.5rem;
  }
`;
