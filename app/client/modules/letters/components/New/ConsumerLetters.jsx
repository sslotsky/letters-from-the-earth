import React from 'react';
import { RowContent, RowContainer, LinkRow, Grouping } from './style';

const letterTypes = [{
  display: 'Landlord Dispute',
  type: 'landlord_dispute'
}, {
  display: 'Creditor Dispute',
  type: 'creditor_dispute'
}];

export default function ConsumerLetters() {
  return letterTypes.map(t => (
    <RowContainer key={t.type}>
      <LinkRow to={`/letters/start/${t.type}`}>
        {t.display}
      </LinkRow>
    </RowContainer>
  ));
}
