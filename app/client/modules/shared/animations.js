import { keyframes } from 'styled-components';

export const grow = keyframes`
  from {
    transform: scaleY(0);
  }
  to {
    transform: scaleY(1);
  }
`;

export const shrink = keyframes`
  from {
    transform: scaleY(1);
  }
  to {
    transform: scaleY(0);
  }
`;


