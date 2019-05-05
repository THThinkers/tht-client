/* tslint:disable */
import FullPage from '@fullpage/react-fullpage';
import React, { Component } from 'react';
import {
  landingTHT,
  landingTogether,
  landingNetwork,
  landingGoFoward,
  landingStudy,
  landingCreative,
} from '../assets/landing';
import {
  Content,
  ImageContainer,
  ImageHeader,
  ArrowBox,
  Arrow,
  ImageSubHeader,
  LinkBox,
  CustomLink,
} from '../styles/LandingStyles';

const Landing = () => (
  <FullPage
    render={() => (
      <FullPage.Wrapper>
        <div className="section">
          <ImageContainer backgroundImage={landingTHT}>
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
          <ImageContainer backgroundImage={landingTogether}>
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
          <ImageContainer backgroundImage={landingStudy}>
            <Content position="middle-left">
              <ImageHeader>DO THT, THE HYBRID THINKERS!</ImageHeader>
              <ImageSubHeader>
                <div>#Business envrionment analysis #Block chain</div>
                <div>#Edge computing #Data mining #Growth hacking</div>
              </ImageSubHeader>
            </Content>
            <ArrowBox>
              <Arrow />
            </ArrowBox>
          </ImageContainer>
        </div>
        <div className="section">
          <ImageContainer backgroundImage={landingCreative}>
            <Content position="middle-left">
              <ImageHeader>DEVELOP YOUR CAPABILITY WITH US</ImageHeader>
              <ImageSubHeader>#스터디 #발표 #공모전 #학술제 #Hybrid Day</ImageSubHeader>
            </Content>
            <ArrowBox>
              <Arrow />
            </ArrowBox>
          </ImageContainer>
        </div>
        <div className="section">
          <ImageContainer backgroundImage={landingNetwork}>
            <Content position="middle-left">
              <ImageHeader>MEET & CONNECT</ImageHeader>
              <ImageSubHeader>Hybrid Day 와 함께 당신의 인적 네트워크를 넓히세요</ImageSubHeader>
            </Content>
            <ArrowBox>
              <Arrow />
            </ArrowBox>
          </ImageContainer>
        </div>
        <div className="section">
          <ImageContainer backgroundImage={landingGoFoward}>
            <Content>
              <ImageHeader>Spread it out, your dreams</ImageHeader>
              <ImageSubHeader>당신이 다루고 싶은 모든 것을 THT에서 펼치세요</ImageSubHeader>
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

export default Landing;
