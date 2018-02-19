import React from 'react';
import { BUSINESS } from 'MODULES/letters/letterTypes';
import { RowContainer, LinkRow } from '../style';

export const letterTypes = Object.entries(BUSINESS).map(([k, v]) => ({
  type: k,
  display: v.label
}));

export default function BusinessLetters() {
  return letterTypes.map(t => (
    <RowContainer key={t.type}>
      <LinkRow to={`/letters/start/${t.type}`}>
        {t.display}
      </LinkRow>
    </RowContainer>
  ));
}
