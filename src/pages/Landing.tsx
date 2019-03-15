import FullPage from '@fullpage/react-fullpage';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
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

const ImageContainer = styled(Container)<{ backgroundImage: string }>`
  max-width: 100%;
  height: 100%;
  background-image:
    linear-gradient(rgba(0, 0, 0, 0.5),
    rgba(0, 0, 0, 0.5)), url('${({ backgroundImage }) => backgroundImage}');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const ImageHeader = styled.h1`
  font-size: 3em;
  color: white;
`;

class Landing extends Component {
  // componentDidMount() {
  //   window.history.pushState(null, 'landing', '/landing');
  // }

  render() {
    return (
      <FullPage
        render={() => (
          <FullPage.Wrapper>
            <div className="section">
              <ImageContainer backgroundImage="https://images.unsplash.com/photo-1547908442-d9fbd2297440?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">
                <Content>
                  <ImageHeader>THE HYBRID THINKERS</ImageHeader>
                  <div>한국외국어대학교 경영정보학회</div>
                </Content>
              </ImageContainer>
            </div>
            <div className="section">
              <ImageContainer backgroundImage="https://images.unsplash.com/photo-1547905433-832bc9e7f5f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">
                <Content>hi</Content>
              </ImageContainer>
            </div>
            <div className="section">
              <Container>
                <Content>
                  <Header>THThinkers</Header>
                  <p>THE HYBRID THINKERS</p>
                  <div>
                    <Link to="/signin">로그인</Link>
                  </div>
                  <div>
                    <Link to="/signup">회원가입</Link>
                  </div>
                </Content>
                <Content>
                  <img src={logo.logoSquare} width="480px" />
                </Content>
              </Container>
            </div>
          </FullPage.Wrapper>
        )}
      />
    );
  }
}

export default Landing;
