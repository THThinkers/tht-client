import React, { useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { getMembers } from '../actions/member';
import { dotCircle } from '../assets/images/index';
import { Avatar, PageLayout } from '../components/shared';
import colors from '../constants/colors';
import { IMemberUser } from '../models/user';
import { IRootState } from '../reducers';

const Header = styled.h1`
  color: ${colors.prime};
  text-align: center;
  font-size: 1.5em;
`;
export interface IMembersProps extends RouteComponentProps {
  members: IMemberUser[];
  error: string;
  status: State;
  getMembersAction: typeof getMembers;
}
const Members: React.SFC<IMembersProps> = ({ location, members, error, status, getMembersAction }) => {
  const { pathname } = location;
  const [active, setActive] = useState(true);
  const getMembersByActive = useCallback(() => {
    getMembersAction({ limit: 10, offset: members.length, isActive: active });
  }, [active, members]);
  useEffect(() => {
    getMembersByActive();
  }, []);
  return (
    <>
      <PageLayout pathname={pathname}>
        <Header>트트인</Header>
        {members.map((member) => (
          <div>{member.name}</div>
        ))}
      </PageLayout>
    </>
  );
};

const mapStateToProps = (state: IRootState) => ({
  ...state.member.getMembers,
});
export default connect(
  mapStateToProps,
  {
    getMembersAction: getMembers,
  },
)(Members);
