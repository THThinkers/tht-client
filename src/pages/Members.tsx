import React, { useEffect, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { getImageUrl } from '../api/imagebucket';
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
  width: 800px;
  max-height: 543px;
  margin: auto;
`;
const MembersTable = styled.img`
  width: 100%;
`;
// export interface IMembersProps extends RouteComponentProps {}  => 린터때문에...
const Members: React.SFC<RouteComponentProps> = ({ location }) => {
  const [membersImg, setMembersImg] = useState('');
  useEffect(() => {
    getImageUrl('members').then((imageUrl) => {
      setMembersImg(imageUrl);
    });
  }, []);
  const { pathname } = location;
  return (
    <>
      <PageLayout pathname={pathname}>
        <Header>트트인</Header>
        <SubHeader>THT 조직도</SubHeader>
        <MembersTableWrapper>{membersImg && <MembersTable src={membersImg} alt="조직도" />}</MembersTableWrapper>
        <SubHeader>트트인</SubHeader>
        <MemberList />
      </PageLayout>
    </>
  );
};

export default Members;
