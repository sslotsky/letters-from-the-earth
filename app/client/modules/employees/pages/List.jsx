import React from "react";
import { Heading } from "MODULES/shared/components/Layout/Header";
import {
  PageContainer,
  Page,
  Content,
  ContentHeader,
  LinkButton
} from "MODULES/shared/components/Layout/Page";
import Nav from "MODULES/shared/components/Nav";

export default function Employees({ match }) {
  return (
    <PageContainer>
      <Nav />
      <Page>
        <Heading>
          Employees
        </Heading>
        <Content>
          <ContentHeader>
            <LinkButton to="/employees/new">
              Add New Employee
            </LinkButton>
          </ContentHeader>
        </Content>
      </Page>
    </PageContainer>
  );
}
