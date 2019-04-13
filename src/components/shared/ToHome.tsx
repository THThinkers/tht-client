import React from 'react';
import styled from 'styled-components';
import { logoSquare } from '../../assets/logo';
import colors from '../../constants/colors';

const LogoWrapper = styled.a`
  position: absolute;
  top: 30px;
  left: 30px;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  font-size: 36px;
  font-weight: bold;
  line-height: 50px;
  text-decoration: none;
  &:visited {
    color: ${colors.prime};
  }
  & > span {
    font-weight: 800;
  }
`;

const LogoImage = styled.img`
  width: 49px;
  height: 48px;
  margin-right: 12px;
`;

const ToHome = () => (
  <LogoWrapper href="/">
    <LogoImage src={logoSquare} />
    <span>THT</span>
  </LogoWrapper>
);

export default ToHome;
