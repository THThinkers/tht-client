import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { PageLayout } from '../components/shared';
import colors from '../constants/colors';
import { MemberList } from '../containers/Members';

const Header = styled.h1`
  color: ${colors.prime};
  text-align: center;
  font-size: 1.5em;
  margin: 2rem 0;
`;
const SubHeader = styled.h2`
  font-size: 1.2em;
  text-align: center;
  margin: 2rem 0;
`;
const MembersTableWrapper = styled.div`
  width: 900px;
  margin: auto;
`;
const MembersTable = styled.img`
  width: 100%;
`;
export interface IMembersProps extends RouteComponentProps {}
const Members: React.SFC<IMembersProps> = ({ location }) => {
  const { pathname } = location;
  return (
    <>
      <PageLayout pathname={pathname}>
        <Header>트트인</Header>
        <SubHeader>THT 조직도</SubHeader>
        <MembersTableWrapper>
          <MembersTable
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80"
            alt="조직도"
          />
        </MembersTableWrapper>
        <SubHeader>트트인</SubHeader>
        <MemberList />
      </PageLayout>
    </>
  );
};

export default Members;
