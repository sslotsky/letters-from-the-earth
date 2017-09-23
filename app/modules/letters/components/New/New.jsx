import React from 'react';
import { tos } from 'MODULES/shared/decorators';

export function New() {
  return <h1>Start a new letter</h1>;
}

export default tos(New);
