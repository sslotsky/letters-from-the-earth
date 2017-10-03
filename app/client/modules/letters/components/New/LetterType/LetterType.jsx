import React from 'react';
import { tos } from 'MODULES/shared/decorators';
import dictionary from 'LIB/dictionary';
import { Page, PageHeader, MainContent } from 'APP_ROOT/styled/Layout';
import StandardConsumer from './StandardConsumer';

const map = dictionary().set(
  'landlord_dispute',
  'creditor_dispute'
)(StandardConsumer);

export function LetterType({ letterType }) {
  const Template = map.get(letterType);

  return (
    <Page>
      <PageHeader>
        <h1>Letter Details</h1>
      </PageHeader>
      <MainContent>
        <Template />
      </MainContent>
    </Page>
  );
}

export default tos(LetterType);
