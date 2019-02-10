import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link, RouteComponentProps, withRouter } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { logout } from '../actions/auth';
import * as logo from '../assets/logo';
import colors from '../constants/colors';

const HeaderBar = styled.div`
  display: flex;
  flex-direction: column;
  z-index: 10;
  position: relative;
  padding-bottom: 2px;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 60px;
  box-shadow: 0px 1.5px #cccccccc;
`;

const HeaderArea = styled.div`
  width: 1366px;
  height: 60px;
  position: relative;
  display: flex;
  align-items: center;
`;

const HeaderImage = styled.img`
  width: 50px;
  height: 50px;
  padding-right: 7px;
`;

const HeaderContent = styled.div`
  flex: 1 0;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
`;

const MainLogo = styled.div`
  flex: 0 1;
  position: absolute;
  flex-direction: row;
`;

const LogoLink = styled(Link)`
  display: flex;
  text-decoration: none;
  align-items: center;
  font-size: 36px;
  color: #1069ef;
  font-weight: bolder;
  cursor: pointer;
`;

const MenuContainer = styled.div`
  width: 800px;
`;

interface IMenuProps {
  name: string;
  currentSection: string;
}

const Menu = styled.div<{ name: string; currentSection: string }>`
  display: inline-block;
  width: 200px;
  font-weight: bold;
  color: black;
  text-align: center;
  font-weight: 500;
  font-size: 20px;
  padding-bottom: 11px;
  margin-bottom: -2px;
  ${({ currentSection, name }) => currentSection === name && `border-bottom: solid 3px ${colors.prime}`}
`;

const menuHover = css`
  visibility: visible;
  top: 60px;
  opacity: 1;
  transition: opacity 0.1s ease-in-out;
`;

const DropDownArea = styled.div`
  position: absolute;
  top: 60px;
  visibility: hidden;
  z-index: 9;
  height: 150px;
  width: 100%;
  background-color: #ffffff;
  margin-top: -1px;
  border-bottom: 1px solid #cccccc;
  box-shadow: 0 10px 8px 0 rgba(0, 0, 0, 0.2);
  opacity: 0;
  ${HeaderBar}:hover & {
    ${menuHover};
  }
  &:hover {
    ${menuHover};
  }
`;

const MenuDropDown = styled.div`
  display: flex;
  width: 800px;
  justify-content: center;
  margin: 0 auto;
`;

const MenuDropDownContentWrapper = styled.div`
  width: 800px;
  padding-top: 15px;
`;

const MenuDropDownItemList = styled.div`
  display: inline-block;
  text-align: center;
  width: 200px;
  & > a {
    text-decoration: none;
    display: inline-block;
    text-align: center;
    height: 20px;
    padding: 5px;
    width: 190px;
    color: #000000;
    &:hover {
      font-weight: bold;
      color: #9cbced;
    }
  }
`;

const LogoutButton = styled.button`
  display: inline-block;
  background-color: transparent;
  border: none;
  position: absolute;
  align-self: right;
  top: 10px;
  right: 10px;
`;

interface IHeaderProps extends RouteComponentProps<any> {
  user?: string;
  handleLogout: () => void;
}

class Header extends Component<IHeaderProps> {
  onClickLogout = () => {
    if (confirm('로그아웃 하시겠습니까?')) {
      this.props.handleLogout();
    }
  };

  public render() {
    const { onClickLogout } = this;
    const { location } = this.props;
    const paths = location.pathname.split('/');
    const currentSection: string = paths[1];
    return (
      <HeaderBar>
        <HeaderArea>
          <MainLogo>
            <LogoLink to="/">
              <HeaderImage src={logo.logoSquare} />
              THT
            </LogoLink>
          </MainLogo>
          <HeaderContent>
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
          <LogoutButton onClick={onClickLogout}>LOGOUT</LogoutButton>
        </HeaderArea>
        <DropDownArea>
          <MenuDropDown>
            <MenuDropDownContentWrapper>
              {/* About THT */}
              <MenuDropDownItemList>
                <Link to="/info/introduction">History</Link>
                <Link to="/info/members">트트인</Link>
              </MenuDropDownItemList>
              {/* Events */}
              <MenuDropDownItemList>
                <Link to="/board/schedule">일정공지</Link>
                <Link to="/board/weekly">주별 발표</Link>
                <Link to="/board/hybrid-day">하이브리드 데이</Link>
              </MenuDropDownItemList>
              {/* Column */}
              <MenuDropDownItemList>
                <Link to="/column/introduction">일정공지</Link>
              </MenuDropDownItemList>
              {/* Mentoring */}
              <MenuDropDownItemList>
                <Link to="/itta/introduction">잇다 멘토단</Link>
                <Link to="/itta/introduction">The Hottest Tips</Link>
              </MenuDropDownItemList>
            </MenuDropDownContentWrapper>
          </MenuDropDown>
        </DropDownArea>
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
