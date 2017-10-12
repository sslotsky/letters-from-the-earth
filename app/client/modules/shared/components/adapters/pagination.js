import styled from 'styled-components';

export const Pagination = styled.div`
  ul.pagination {
    display: flex;

    list-style: none;

    li {
      flex: 1;
      max-width: 2.5rem;
      text-align: center;
    }

    button {
      background-color: transparent;
      padding: 0;
      border: none;

      &:hover {
        opacity: .5;
      }

      &:disabled {
        opacity: 1;
        cursor: not-allowed;
      }
    }
  }
`;
