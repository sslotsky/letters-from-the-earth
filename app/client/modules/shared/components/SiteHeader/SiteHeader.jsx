import React from 'react';
import { PageHeader, PageHeaderRight } from 'MODULES/shared/components/Layout';
import { Session } from 'MODULES/identity/components';

export default function SiteHeader({ title }) {
  return (
    <PageHeader>
      <h1>{title}</h1>
      <PageHeaderRight>
        <Session />
      </PageHeaderRight>
    </PageHeader>
  );
}

