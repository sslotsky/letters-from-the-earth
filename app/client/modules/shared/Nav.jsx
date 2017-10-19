import React from 'react';
import { Heading } from 'MODULES/shared/components/Layout/Header';
import { SiteHeader } from 'MODULES/shared/components';
import { PageContainer, Page, Nav as Navbar, Content, ContentHeader, LinkButton, Paragraph, Letter } from 'MODULES/shared/components/Layout/Page';
import { Session } from 'MODULES/identity/components';

export default function Nav() {
  return (
    <Navbar>
      <Session />
    </Navbar>
  );
}


