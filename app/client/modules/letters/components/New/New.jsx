import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Page, PageHeader, MainContent } from 'APP_ROOT/styled/Layout';
import { LinkRow, RowContainer } from './style';

const letterTypes = [{
  display: 'Landlord Dispute',
  type: 'landlord_dispute'
}, {
  display: 'Creditor Dispute',
  type: 'creditor_dispute'
}];

export default function New() {
  return (
    <Page>
      <PageHeader>
        <h1>What type of letter?</h1>
      </PageHeader>
      <MainContent>
        {letterTypes.map(t => (
          <RowContainer key={t.type}>
            <LinkRow to={`/letters/new/${t.type}`}>
              {t.display}
            </LinkRow>
          </RowContainer>
        ))}
      </MainContent>
    </Page>
  );
}
