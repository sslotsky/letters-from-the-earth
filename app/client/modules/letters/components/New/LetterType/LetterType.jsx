import React from 'react';
import { tos } from 'MODULES/shared/decorators';
import dictionary from 'LIB/dictionary';
import { SiteHeader } from 'MODULES/shared/components';
import { Heading } from 'MODULES/shared/components/Layout/Header';
import { PageContainer, Page, ContentHeader, Content, LinkButton, Paragraph, Letter } from 'MODULES/shared/components/Layout/Page';
import Nav from 'MODULES/shared/components/Nav';
import StandardConsumer from './StandardConsumer';
import BusinessLetter from './BusinessLetter';
import Custom from './Custom';
import { letterTypes as consumerLetters } from '../ConsumerLetters';
import { letterTypes as businessLetters } from '../BusinessLetters';

const map = dictionary().set(
  ...consumerLetters.map(l => l.type)
)(StandardConsumer).set(
  ...businessLetters.map(l => l.type)
)(BusinessLetter);

export function LetterType({ letterType }) {
  const Template = map.get(letterType, Custom);

  return (
    <PageContainer>
      <Nav />
      <Page>
        <Heading>
          Letter Details
        </Heading>
        <Content>
          <Template />
        </Content>
      </Page>
    </PageContainer>
  );
}

export default tos(LetterType);
