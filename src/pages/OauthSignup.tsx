/* 임시 페이지 */
import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { putProfile } from '../actions/auth';
import { SignupDetail } from '../containers';
import { PartialUser } from '../models/user';

const Container = styled.div`
  width: 100%;
  height: 100%;
`;
const HeaderWrapper = styled.div`
  text-align: center;
  margin: 1.5rem 0;
`;
interface IOauthSignupProps {
  userId: string;
  updateProfile: (user: PartialUser) => void;
}
class OauthSignup extends React.Component<IOauthSignupProps> {
  handleUpdate = (user: PartialUser) => {
    const updateUser = {
      _id: this.props.userId,
      ...user,
    };
    this.props.updateProfile(updateUser);
  };
  render() {
    return (
      <Container>
        <HeaderWrapper>
          <h1>THThinkers</h1>
          <h2>서비스를 이용하기 위해 다음 항목을 작성해주세요.</h2>
        </HeaderWrapper>
        <SignupDetail handleUpdate={this.handleUpdate} />
      </Container>
    );
  }
}

export default connect(
  null,
  {
    updateProfile: putProfile,
  },
)(OauthSignup);
