import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { PageContainer, Page, MainContent } from 'MODULES/shared/components/Layout';
import { SiteHeader } from 'MODULES/shared/components';
import Browse from 'MODULES/letters/components/Browse/Browse';

export default function Dashboard({ match }) {
  return (
    <PageContainer>
      <Page>
        <SiteHeader title="Letters From The Earth" />
        <MainContent>
          <Switch>
            <Route path={match.path} exact component={Browse} />
          </Switch>
        </MainContent>
      </Page>
    </PageContainer>
  );
}
