import React from 'react';
import { PageContainer, Page, MainContent } from 'MODULES/shared/components/Layout';
import { SiteHeader } from 'MODULES/shared/components';

export default function Dashboard() {
  return (
    <PageContainer>
      <Page>
        <SiteHeader title="Dashboard" />
        <MainContent>
          <h1>Dashboard</h1>
        </MainContent>
      </Page>
    </PageContainer>
  );
}
