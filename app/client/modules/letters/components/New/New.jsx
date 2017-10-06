import React from 'react';
import { Route } from 'react-router-dom';
import { Logo, PageContainer, Nav, Page, PageHeader, PageHeaderRight, MainContent, NavLink } from 'MODULES/shared/components/Layout';
import { SignUp } from 'MODULES/identity/components';
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
        <PageHeader>
          <h1>What type of letter?</h1>
          <PageHeaderRight>
            <SignUp />
          </PageHeaderRight>
        </PageHeader>
        <MainContent>
          <Route path={`${match.path}`} exact component={ConsumerLetters} />
          <Route path={`${match.path}/business`} component={BusinessLetters} />
        </MainContent>
      </Page>
    </PageContainer>
  );
}
