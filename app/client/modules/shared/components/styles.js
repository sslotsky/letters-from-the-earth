import styled, { css } from 'styled-components';
import { grow, shrink } from 'MODULES/shared/animations';

const expandCollapse = ({ open }) => open ? css`
  1s ${grow}
` : css`
  1s ${shrink}
`;

export const Container = styled.div`
  transform-origin: 0 0;
  animation: ${expandCollapse};
`;
