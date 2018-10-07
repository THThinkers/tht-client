import React from 'react';
import styled from 'styled-components';
import { googleSigninBtn, kakaoSigninBtn } from '../assets/images';
import * as logo from '../assets/logo';

const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1220px;
`;
const Header = styled.h1`
  font-size: 56px;
`;
const Content = styled.div`
  margin-top: 100px;
  width: 50%;
  text-align: center;
`;
const Landing = () => {
  return (
    <Container>
      <Content>
        <Header>THThinkers</Header>
        <p>THE HYBRID THINKERS</p>
        <div>
          <a href="/api/auth/oauth/google">
            <img src={googleSigninBtn} width="180px" />
          </a>
        </div>
        <div>
          <a href="/api/auth/oauth/kakao">
            <img src={kakaoSigninBtn} width="180px" />
          </a>
        </div>
      </Content>
      <Content>
        <img src={logo.logoSquare} width="480px" />
      </Content>
    </Container>
  );
};

export default Landing;
