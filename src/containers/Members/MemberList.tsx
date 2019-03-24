import React, { useCallback, useEffect, useReducer, useState } from 'react';
import { RouteComponentProps } from 'react-router-dom';
import styled from 'styled-components';
import { getMembers } from '../../api/member';
import { Member } from '../../components';
import { Button } from '../../components/shared';
import colors from '../../constants/colors';
import { IMemberUser } from '../../models/user';
import cache from '../../utils/cache';

const Container = styled.div`
  width: 60%;
  max-width: 900px;
  margin: auto;
`;
const ErrorContainer = styled.div`
  margin-top: 200px;
  width: 100%;
  text-align: center;
`;
const ListContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;
const MemberWrapper = styled.div`
  width: 50%;
`;
const TabBox = styled.div`
  display: flex;
  justify-content: flex-end;
`;
const Tab = styled.div`
  width: 254px;
  height: 39px;
  display: flex;
  object-fit: contain;
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background-color: #ffffff;
  cursor: pointer;
`;
const TabItem = styled('div')<{ hasline?: boolean; selected?: boolean }>`
  border-right: ${(props) => (props.hasline ? '1px solid black' : 'none')};
  color: ${(props) => (props.selected ? colors.positive : 'black')};
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
interface IMemberState {
  activeMembers: IMemberUser[];
  inActiveMembers: IMemberUser[];
}
interface IMemberAction {
  type: 'activeMembers' | 'inActiveMembers';
  members: IMemberUser[];
}
const memberReducer = (state: IMemberState, action: IMemberAction) => {
  return {
    ...state,
    [action.type]: action.members,
  };
};
const MemberList: React.SFC<{}> = () => {
  /* 탭, 에러, 멤버 state */
  const [active, setActive] = useState(true);
  const [error, setError] = useState('');
  const [members, setMembers] = useReducer(memberReducer, { activeMembers: [], inActiveMembers: [] });
  /* 이벤트 핸들러 */
  const handleTabClick = (tab: boolean) => () => setActive(tab);
  const loadMembers = useCallback(() => {
    if (cache.has('activeMembers') && cache.has('inActiveMembers')) {
      setMembers({ type: 'activeMembers', members: cache.get('activeMembers') });
      setMembers({ type: 'inActiveMembers', members: cache.get('inActiveMembers') });
    } else {
      const activeMember: IMemberUser[] = [];
      const inActiveMember: IMemberUser[] = [];
      getMembers({})
        .then((payload) => {
          payload.forEach((member) => {
            member.isActive ? activeMember.push(member) : inActiveMember.push(member);
          });
          cache.set('activeMembers', activeMember);
          cache.set('inActiveMembers', inActiveMember);
          setMembers({ type: 'activeMembers', members: cache.get('activeMembers') });
          setMembers({ type: 'inActiveMembers', members: cache.get('inActiveMembers') });
          setError('');
        })
        .catch((err) => {
          setError(err.data ? err.data.error : '트트인들을 불러오는데 실패하였습니다');
        });
    }
  }, []);
  /* mount시 fetch OR cache get */
  useEffect(() => {
    loadMembers();
  }, []);
  if (error) {
    return (
      <ErrorContainer>
        <h1>{error}</h1>
        <Button onClick={loadMembers}>다시 시도하기.</Button>
      </ErrorContainer>
    );
  }
  const { activeMembers, inActiveMembers } = members;
  const currentTabMembers = active ? activeMembers : inActiveMembers;
  return (
    <Container>
      <TabBox>
        <Tab>
          <TabItem hasline selected={active} onClick={handleTabClick(true)}>
            현 트트인
          </TabItem>
          <TabItem selected={!active} onClick={handleTabClick(false)}>
            전 트트인
          </TabItem>
        </Tab>
      </TabBox>
      <ListContainer>
        {currentTabMembers.map((member) => (
          <MemberWrapper key={member._id}>
            <Member {...member} />
          </MemberWrapper>
        ))}
      </ListContainer>
    </Container>
  );
};

export default MemberList;
