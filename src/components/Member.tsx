import React from 'react';
import styled from 'styled-components';
import { IUser } from '../models/user';

const MemberWrapper = styled.div`
  width: 300px;
  display: flex;
  align-items: center;
`;
const MembersImage = styled.img`
  width: 100%;
`;
const MemberDescription = styled.div`
  margin-left: 20px;
  div {
    margin: 20px 0;
  }
`;
const MemberName = styled.div`
  font-weight: bold;
`;

export type IMemberProps = Pick<IUser, 'name' | 'major' | 'studentId' | 'profilePicture'>;
const Member: React.SFC<IMemberProps> = ({ name, major, studentId, profilePicture }) => {
  return (
    <MemberWrapper>
      <MembersImage src={profilePicture} alt="프로필" />
      <MemberDescription>
        <MemberName>{name}</MemberName>
        <div>
          {major} {studentId}
        </div>
      </MemberDescription>
    </MemberWrapper>
  );
};

export default Member;
