import React from 'react';
import { decorators } from '@orange-marmalade/paginate-this';
import { inject } from 'MODULES/shared/decorators';
import { RowContainer, LinkRow } from 'MODULES/letters/components/style';

export function Browse({ results }) {
  const requests = results.map(r => (
    <RowContainer key={r.id}>
      <LinkRow to={`/letter_requests/${r.id}`}>
        <div>Purpose: {r.request.purpose}</div>
        <div>Status: {r.request.status}</div>
      </LinkRow>
    </RowContainer>
  ));

  return (
    <div>
      <h2>Letter Requests</h2>
      {requests}
    </div>
  );
}

const withListId = inject(() => ({
  listId: 'letterRequests'
}));

export default withListId(decorators.tabulate(Browse));
