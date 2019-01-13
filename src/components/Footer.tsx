import React, { Component } from 'react';
import styled from 'styled-components';
import colors from '../constants/colors';

const FooterWrappper = styled.div`
  width: 100%;
  min-width: 1366px;
  height: 180px;
  background-color: #dddddd;
  border-top: solid 2px #cccccc;
`;

const FooterContentWrapper = styled.div`
  width: 1366px;
  margin-top: 30px;
  margin-right: auto;
  margin-left: auto;
`;

const FooterHeader = styled.div`
  font-size: 24px;
  padding-bottom: 15px;
`;

const FooterContent = styled.div`
  font-size: 20px;
`;

export default class Footer extends Component {
  render() {
    return (
      <FooterWrappper>
        <FooterContentWrapper>
          <FooterHeader>THT</FooterHeader>
          <FooterContent>한국외대의 IT 경영 학회입니다.</FooterContent>
        </FooterContentWrapper>
      </FooterWrappper>
    );
  }
}
