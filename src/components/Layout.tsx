import React from 'react';
import styled from 'styled-components';
import { flexBox } from '../styles/mixin';
import PageTitle from './PageTitle';
import SideBar from './SideBar';
import TopBar from './TopBar';

type LayoutProps = {
  children: React.ReactNode;
};

function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <SideBar />
      <Main>
        <TopBar />
        <PageTitle />
        {children}
      </Main>
    </Container>
  );
}

export default Layout;

const Container = styled.div`
  width: 1440px;
  height: 100vh;
  ${flexBox('row', 'start')};
`;

const Main = styled.div`
  width: 100%;
  height: 100vh;
  padding: 0 40px 80px 40px;
  background-color: ${({ theme }) => theme.bg_g};
  overflow-y: scroll;
`;
