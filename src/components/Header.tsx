import React, { Component } from 'react';
import styled from 'styled-components';
import * as logo from '../assets/logo';

const HeaderBar = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 60px;
  box-shadow: 0px 1.5px #cccccccc;
`;

const HeaderImage = styled.img`
  width: 50px;
  height: 50px;
  padding-right: 7px;
`;

const HeaderContent = styled.div`
  width: 1366px;
  height: 100%;
  display: flex;
`;

const MainLogo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 36px;
  color: #1069ef;
  font-weight: bolder;
`;

const Menus = styled.div``;

class Header extends Component {
  public render() {
    return (
      <HeaderBar>
        <HeaderContent>
          <MainLogo>
            <HeaderImage src={logo.logoSquare} />
            THT
          </MainLogo>
          <Menus>hdi</Menus>
        </HeaderContent>
      </HeaderBar>
    );
  }
}

export default Header;
