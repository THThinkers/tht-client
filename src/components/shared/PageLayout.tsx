import React from 'react';
import styled from 'styled-components';
import { LocationBreadCrumb } from '../';
const Page = styled.div`
  width: 90%;
  max-width: 1366px;
  margin: 3rem auto;
`;
interface IPageLayoutProps {
  children: React.ReactNode;
  pathname?: string;
}
const PageLayout: React.SFC<IPageLayoutProps> = ({ children, pathname }) => {
  return (
    <>
      {pathname && <LocationBreadCrumb pathname={pathname} />}
      <Page>{children}</Page>
    </>
  );
};
export default PageLayout;
