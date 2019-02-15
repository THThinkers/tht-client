/* 임시 페이지 */
import React, { MouseEvent } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../actions/auth';
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
  logout: () => void;
}

class OauthSignup extends React.Component<IOauthSignupProps> {
  componentDidMount() {
    window.history.pushState(null, 'singup', '/auth/signup');
  }

  handleUpdate = (user: PartialUser) => {
    const updateUser = {
      _id: this.props.userId,
      ...user,
    };
    // this.props.updateProfile(updateUser);
  };

  handleLogout = (e: MouseEvent<HTMLButtonElement>) => {
    const { logout } = this.props;
    logout();
  };

  render() {
    const { handleLogout, handleUpdate } = this;
    return (
      <Container>
        <HeaderWrapper>
          <h1>THThinkers</h1>
          <h2>서비스를 이용하기 위해 다음 항목을 작성해주세요.</h2>
        </HeaderWrapper>
        <SignupDetail handleUpdate={handleUpdate} />
        <button onClick={handleLogout}>취소하기</button>
      </Container>
    );
  }
}

export default connect(
  null,
  {
    logout,
  },
)(OauthSignup);
