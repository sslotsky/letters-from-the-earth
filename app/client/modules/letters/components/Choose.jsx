import React from 'react';
import { Route } from 'react-router-dom';
import { Heading } from 'MODULES/shared/components/Layout/Header';
import { PageContainer, Page, ContentHeader, LinkButton, Paragraph, Letter } from 'MODULES/shared/components/Layout/Page';
import { TabContainer, Tabs, TabLink, TabContentContainer, TabContent } from 'MODULES/shared/components/Tabs/style';
import Nav from 'MODULES/shared/components/Nav';
import ConsumerLetters from './New/ConsumerLetters';
import BusinessLetters from './New/BusinessLetters';

export default function Choose({ match }) {
  return (
    <PageContainer>
      <Nav />
      <Page>
        <Heading>
          Choose Your Letter
        </Heading>
        <Letter>
          <TabContainer>
            <Tabs>
              <TabLink exact to={`${match.path}`}>Consumers</TabLink>
              <TabLink to={`${match.path}/business`}>Business</TabLink>
              <TabLink to={`${match.path}/vendor`}>Vendor</TabLink>
            </Tabs>
            <TabContentContainer>
              <TabContent>
                <Route path={`${match.path}`} exact component={ConsumerLetters} />
                <Route path={`${match.path}/business`} component={BusinessLetters} />
                <Route path={`${match.path}/vendor`} component={() => false} />
              </TabContent>
            </TabContentContainer>
          </TabContainer>
        </Letter>
      </Page>
    </PageContainer>
  )
}
