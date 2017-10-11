import React from 'react';
import { tos } from 'MODULES/shared/decorators';
import dictionary from 'LIB/dictionary';
import { PageContainer, Page, MainContent } from 'MODULES/shared/components/Layout';
import { SiteHeader } from 'MODULES/shared/components';
import StandardConsumer from './StandardConsumer';
import Custom from './Custom';

const map = dictionary().set(
  'landlord_dispute',
  'creditor_dispute'
)(StandardConsumer);

export function LetterType({ letterType }) {
  const Template = map.get(letterType, Custom);

  return (
    <PageContainer>
      <Page>
        <SiteHeader title="Letter Details" />
        <MainContent>
          <Template />
        </MainContent>
      </Page>
    </PageContainer>
  );
}

export default tos(LetterType);
