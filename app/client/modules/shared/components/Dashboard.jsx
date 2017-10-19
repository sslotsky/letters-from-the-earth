import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { Heading } from 'MODULES/shared/components/Layout/Header';
import { PageContainer, Page, Content, ContentHeader } from 'MODULES/shared/components/Layout/Page';
import Nav from 'MODULES/shared/components/Nav';
import Browse from 'MODULES/letters/components/Browse/Browse';

export default function Dashboard({ match }) {
  return (
    <PageContainer>
      <Nav />
      <Page>
        <Heading>
          Dashboard
        </Heading>
        <Content>
          <Switch>
            <Route path={match.path} exact component={Browse} />
          </Switch>
        </Content>
      </Page>
    </PageContainer>
  );
}
