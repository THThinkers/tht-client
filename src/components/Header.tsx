import React, { Component } from 'react';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { ThemedBaseStyledInterface } from 'styled-components';
import { connect } from 'react-redux';
import { logout } from '../actions/auth';
import * as logo from '../assets/logo';

const HeaderBar = styled.div`
  display: flex;
  z-index: 10;
  position: relative;
  padding-bottom: 2px;
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

const HeaderArea = styled.div`
  width: 1366px;
  height: 100%;
  display: flex;
  align-items: center;
`;

const HeaderContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const MainLogo = styled.div`
  display: flex;
  position: absolute;
  flex-direction: row;
  align-items: center;
  font-size: 36px;
  color: #1069ef;
  font-weight: bolder;
`;

const MenuContainer = styled.div`
  width: 800px;
`;

interface IMenuProps {
  name: string;
  currentSection: string;
}

const Menu = styled.div`
  display: inline-block;
  width: 200px;
  color: ${({ name, currentSection }: IMenuProps): string =>
    name === currentSection ? '#1069ef' : '#000000'};
  text-align: center;
  font-weight: 500;
  font-size: 20px;
`;

const MenuDropDown = styled.div`
  position: absolute;
  display: none;
  z-index: 9;
  height: 150px;
  width: 100%;
  justify-content: center;
  background-color: #ffffff;
  border-bottom: 1px solid #cccccc;
  ${HeaderContent}:hover & {
    display: flex;
    top: 63px;
  }
`;

const MenuDropDownContentWrapper = styled.div`
  width: 800px;
  padding-top: 15px;
`;

const MenuDropDownItemList = styled.div`
  display: inline-block;
  width: 200px;
  & > a {
    text-decoration: none;
    display: inline-block;
    height: 20px;
    padding: 5px;
    width: 190px;
    color: #000000;
    &:hover {
      background-color: #9cbced;
    }
  }
`;

interface IHeaderProps extends RouteComponentProps<any> {
  // 헤더컴포넌트 로그인데이터 확정나면 넣음될듯
  // 프레젠테이션? 컨테이너?
  user?: string;
  handleLogout: () => void;
}

class Header extends Component<IHeaderProps> {
  public render() {
    const paths = this.props.location.pathname.split('/');
    const currentSection: string = paths[1];
    const currentLocation: string = paths[2];
    console.log(currentSection);
    return (
      <HeaderBar>
        <HeaderArea>
          <MainLogo>
            <HeaderImage src={logo.logoSquare} />
            THT
          </MainLogo>
          <HeaderContent>
            <MenuDropDown>
              <MenuDropDownContentWrapper>
                {/* About THT */}
                <MenuDropDownItemList>
                  <Link to="/info/introduction">THT</Link>
                  <Link to="/info/introduction">THT History</Link>
                  <Link to="/info/introduction">트트인</Link>
                </MenuDropDownItemList>
                {/* Events */}
                <MenuDropDownItemList>
                  <Link to="/info/introduction">일정공지</Link>
                  <Link to="/info/introduction">일정공지</Link>
                  <Link to="/info/introduction">일정공지</Link>
                </MenuDropDownItemList>
                {/* Column */}
                <MenuDropDownItemList />
                {/* Mentoring */}
                <MenuDropDownItemList>
                  <Link to="/info/introduction">일정공지</Link>
                  <Link to="/info/introduction">일정공지</Link>
                </MenuDropDownItemList>
              </MenuDropDownContentWrapper>
            </MenuDropDown>
            <MenuContainer>
              <Menu name="info" currentSection={currentSection}>
                THT
              </Menu>
              <Menu name="board" currentSection={currentSection}>
                트트 게시판
              </Menu>
              <Menu name="column" currentSection={currentSection}>
                릴레이칼럼
              </Menu>
              <Menu name="mento" currentSection={currentSection}>
                잇다
              </Menu>
            </MenuContainer>
          </HeaderContent>
          <button onClick={this.props.handleLogout}>LOGOUT</button>
        </HeaderArea>
      </HeaderBar>
    );
  }
}

export default withRouter(
  connect(
    null,
    { handleLogout: logout },
  )(Header),
);
