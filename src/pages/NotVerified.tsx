import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import { logout } from '../actions/auth';
import { Button } from '../components/shared';
import color from '../constants/colors';

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
`;
const Wrapper = styled.div`
  text-align: center;
`;
const Header = styled.h1`
  font-size: 2em;
  margin-bottom: 2em;
`;
const SubHeader = styled.h2`
  font-size: 1.5rem;
  color: ${color.negative};
  margin-bottom: 2em;
`;
const CustomButton = styled(Button)`
  margin: auto;
`;
interface INotVerifiedProps {
  logoutAction: typeof logout;
}

const NotVerified: React.SFC<INotVerifiedProps> = ({ logoutAction }) => {
  return (
    <Container>
      <Wrapper>
        <Header>로그인 실패</Header>
        <SubHeader>
          회원가입 승인이 안되어있어요.
          <br />
          학회장한테 문의하세요.
        </SubHeader>
        <CustomButton invert onClick={logoutAction}>
          되돌아가기
        </CustomButton>
      </Wrapper>
    </Container>
  );
};

export default connect(
  null,
  {
    logoutAction: logout,
  },
)(NotVerified);
