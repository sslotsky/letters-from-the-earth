import React from 'react';
import { Link, Route } from 'react-router-dom';
import { Page, PageHeader, MainContent } from 'APP_ROOT/styled/Layout';
import { LinkRow, RowContainer } from './style';
import LetterGroup from './LetterGroup';

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
        <LetterGroup title="Consumer Letters" types={letterTypes} />
      </MainContent>
    </Page>
  );
}
