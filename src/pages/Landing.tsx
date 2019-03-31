import FullPage from '@fullpage/react-fullpage';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';

const arrow = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0
    transform: translate(-10px, -10px)
  }
`;
const Container = styled.div`
  align-items: center;
  display: flex;
  margin: 0 auto;
  max-width: 1220px;
`;
const Header = styled.h1`
  font-size: 56px;
`;
const Content = styled('div')<{ position?: 'bottom-center' | 'middle-left' | 'middle-right' }>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  padding-bottom: 200px;

  ${(props) => {
    switch (props.position) {
      case 'middle-left': {
        return `
          align-items: flex-start;
          padding-left: 200px;
          padding-bottom: 0;
          justify-content: center;
        `;
      }
      case 'middle-right': {
        return `
          align-items: flex-end;
          padding-right: 200px;
          padding-bottom: 0;
          justify-content: center;
        `;
      }
      default: {
        return ``;
      }
    }
  }}
`;
const LinkBox = styled.div`
  display: flex;
`;
const CustomLink = styled(Link)`
  border: 1px solid #ccc;
  width: 120px;
  margin: 20px;
  padding: 20px 10px;
  text-align: center;
  color: white;
  text-decoration: none;
`;
const ArrowBox = styled.div`
  position: absolute;
  width: 40px;
  left: 50%;
  bottom: 30px;
`;
const Arrow = styled.div`
  width: 100%;
  height: 40px;
  margin: -20px 0 0 -20px;
  transform: rotate(45deg);
  position: relative;
  &:before {
    position: absolute;
    left: 50%;
    content: '';
    width: 20px;
    height: 20px;
    top: 50%;
    margin: -10px 0 0 -10px;
    border-left: none;
    border-top: none;
    border-right: 2px #fff solid;
    border-bottom: 2px #fff solid;
    animation: ${arrow} 2s infinite;
  }
  border-left: none;
  border-top: none;
  border-right: 5px #fff solid;
  border-bottom: 5px #fff solid;
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
const ImageSubHeader = styled(ImageHeader)`
  font-size: 2em;
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
                  <ImageSubHeader>한국외국어대학교 경영정보학회</ImageSubHeader>
                </Content>
              </ImageContainer>
              <ArrowBox>
                <Arrow />
              </ArrowBox>
            </div>
            <div className="section">
              <ImageContainer backgroundImage="https://images.unsplash.com/photo-1547905433-832bc9e7f5f8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80">
                <Content position="middle-left">
                  <ImageHeader>THE HYBRID THINKERS,SHOW HOW GREAT YOU ARE</ImageHeader>
                  <ImageSubHeader>당신의 잠재력을, THT에서 찾아보세요.</ImageSubHeader>
                </Content>
                <ArrowBox>
                  <Arrow />
                </ArrowBox>
              </ImageContainer>
            </div>
            <div className="section">
              <ImageContainer backgroundImage="https://images.unsplash.com/photo-1552568418-2c657cc8e7d4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80">
                <Content>
                  <ImageHeader>THThinkers</ImageHeader>
                  <ImageSubHeader>THE HYBRID THINKERS</ImageSubHeader>
                  <LinkBox>
                    <CustomLink to="/signin">로그인</CustomLink>
                    <CustomLink to="/signup">회원가입</CustomLink>
                  </LinkBox>
                </Content>
              </ImageContainer>
            </div>
          </FullPage.Wrapper>
        )}
      />
    );
  }
}

export default Landing;
