import React from "react";
import { decorators, Paginator } from "@orange-marmalade/paginate-this";
import styled from "styled-components";
import { inject } from "MODULES/shared/decorators";
import { RowContainer, LinkRow } from "MODULES/letters/components/style";
import { Pagination } from "MODULES/shared/components/adapters/pagination";

const Container = styled.div`
  margin-top: 1rem;
`;

export function List({ results, listId }) {
  const requests = results.map(r => (
    <RowContainer key={r.id}>
      <LinkRow to={`/employees/${r.id}`}>
        <div>
          {r.last_name}, {r.first_name}
        </div>
      </LinkRow>
    </RowContainer>
  ));

  return (
    <Container>
      {requests}
      <Pagination>
        <Paginator listId={listId} />
      </Pagination>
    </Container>
  );
}

const withListId = inject(() => ({
  listId: "employees"
}));

export default withListId(decorators.tabulate(List));
