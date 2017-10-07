import React from 'react';
import { Route } from 'react-router-dom';
import { Logo, PageContainer, Nav, Page, MainContent, NavLink } from 'MODULES/shared/components/Layout';
import { SiteHeader } from 'MODULES/shared/components';
import ConsumerLetters from './ConsumerLetters';
import BusinessLetters from './BusinessLetters';

export default function New({ match }) {
  return (
    <PageContainer>
      <Nav>
        <Logo />
        <NavLink to={`${match.path}`} exact>
          Letters from a Consumer
        </NavLink>
        <NavLink to={`${match.path}/business`}>
          Letters from a Business
        </NavLink>
        <NavLink to={`${match.path}/vendor`}>
          Letters to a Vendor
        </NavLink>
      </Nav>
      <Page>
        <SiteHeader title="What type of letter?" />
        <MainContent>
          <Route path={`${match.path}`} exact component={ConsumerLetters} />
          <Route path={`${match.path}/business`} component={BusinessLetters} />
        </MainContent>
      </Page>
    </PageContainer>
  );
}
