import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { dotCircle } from '../assets/images/index';
import { Avatar, PageLayout } from '../components/shared';
import colors from '../constants/colors';

const Header = styled.h1`
  color: ${colors.prime};
  text-align: center;
  font-size: 1.5em;
`;
const MembersImage = styled.img`
  width: 100%;
`;
const MemberWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
`;
const MemberDescription = styled.div`
  margin-left: 20px;
  div {
    margin: 20px 0;
  }
`;
export interface IMembersProps extends RouteComponentProps {}
const Members: React.SFC<IMembersProps> = ({ location }) => {
  const { pathname } = location;
  return (
    <>
      <PageLayout pathname={pathname}>
        <Header>트트인</Header>
        <MembersImage src="aaa" alt="조직도" />
        <MemberWrapper>
          <Avatar src={dotCircle} />
          <MemberDescription>
            <div>이태희</div>
            <div>수정과</div>
          </MemberDescription>
        </MemberWrapper>
      </PageLayout>
    </>
  );
};

export default Members;
