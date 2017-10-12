import React from 'react';
import { RowContainer, LinkRow } from '../style';

const letterTypes = [{
  display: 'Collection Letter, 30 Days Delinquent',
  type: 'collection_30_day'
}, {
  display: 'Collection Letter, 60 Days Delinquent',
  type: 'collection_60_day'
}];

export default function BusinessLetters() {
  return letterTypes.map(t => (
    <RowContainer key={t.type}>
      <LinkRow to={`/letters/start/${t.type}`}>
        {t.display}
      </LinkRow>
    </RowContainer>
  ));
}
