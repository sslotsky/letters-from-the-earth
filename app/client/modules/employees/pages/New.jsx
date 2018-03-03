import React from "react";
import { Heading } from "MODULES/shared/components/Layout/Header";
import {
  PageContainer,
  Page,
  Content
} from "MODULES/shared/components/Layout/Page";
import Nav from "MODULES/shared/components/Nav";
import { NewEmployeeForm } from "MODULES/employees/components";

export default function New({ match }) {
  return (
    <PageContainer>
      <Nav />
      <Page>
        <Heading>
          Add Employee
        </Heading>
        <Content>
          <NewEmployeeForm />
        </Content>
      </Page>
    </PageContainer>
  );
}
