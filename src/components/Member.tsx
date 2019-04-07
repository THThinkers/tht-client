import React from 'react';
import styled from 'styled-components';
import { IUser } from '../models/user';
import { Avatar } from './shared';

const MemberWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
  margin: 20px 0;
`;
const MemberDescription = styled.div`
  margin-left: 30px;
  div {
    margin: 20px 0;
  }
`;
const MemberName = styled.div`
  font-weight: bold;
  font-size: 1.2em;
`;

export type IMemberProps = Pick<IUser, 'name' | 'major' | 'studentId' | 'profilePicture'>;
const Member: React.SFC<IMemberProps> = ({ name, major, studentId, profilePicture }) => {
  return (
    <MemberWrapper>
      <Avatar
        size="large"
        // tslint:disable-next-line: max-line-length
        src="https://images.unsplash.com/photo-1490718720478-364a07a997cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=633&q=80"
        alt="프로필"
      />
      <MemberDescription>
        <MemberName>{name}</MemberName>
        <div>
          {major && major.name} {studentId}
        </div>
      </MemberDescription>
    </MemberWrapper>
  );
};

export default Member;
