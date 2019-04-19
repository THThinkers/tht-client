import { Link } from 'react-router-dom';
import styled, { css } from 'styled-components';
import { Button, SignInput } from '../components/shared';
import { LinkButton } from '../components/shared/Button';
import colors from '../constants/colors';

// ---------------------------------
// 아이디 / 비밀번호 찾기 공용
// ---------------------------------

/**
 * 전체 래퍼
 */
export const FindAuthWrapper = styled.div`
  margin: 158px auto 0px auto;
  width: 750px;
  h1 {
    color: ${colors.prime};
    font-size: 30px;
    text-align: center;
  }
`;

/**
 * 상단 안내 문구
 */
export const FindAuthDescription = styled.div`
  margin-top: 34px;
  text-align: center;
`;

/**
 * Input 전체 Wrapper
 */
export const InputWrapper = styled.form`
  width: 482px;
  margin: 79px auto 0px auto;
`;

/**
 * input
 */
export const FindUserInput = styled(SignInput)`
  display: block;
  margin-bottom: 25px;
`;

/**
 * 버튼 기본 스타일
 */
const ButtonStyle = css`
  margin-top: 77px;
  display: block;
  width: 100%;
  font-weight: bold;
  font-size: 24px;
`;

/**
 * 찾기 버튼
 */
export const FindButton = styled(Button)`
  height: 58px;
  ${ButtonStyle}
`;

/**
 * 이동 버튼
 */
export const FindLinkButton = styled(LinkButton)`
  padding: 14px 0;
  ${ButtonStyle}
`;

/**
 * 아이디/비번 찾기 이동 링크 스타일
 */
export const FindUserStyledLink = styled(Link)`
  display: block;
  font-size: 18px;
  text-align: center;
  margin: 34px 0px 100px 0px;
  color: #808080;
  text-decoration: underline;
`;

export const ModalContent = styled.div`
  text-align: center;
  margin-top: 50px;
  font-size: 24px;
  color: ${colors.negative};
`;

/**
 * 결과 부분 래퍼
 */
export const ResultWrapper = styled.div`
  width: 482px;
  margin: 98px auto 0px auto;
`;

/**
 * 로그인 버튼
 */
export const GoToLoginButton = styled(FindLinkButton)`
  margin-top: 121px;
`;

// ---------------------------------
// 아이디 찾기
// ---------------------------------

export const UsernameBox = styled.div`
  height: 58px;
  border: 1px solid black;
  line-height: normal;
  font-size: 24px;
  text-align: center;
  line-height: 58px;
`;

// ---------------------------------
// 비밀번호
// ---------------------------------

export const FindPasswordDescription = styled.div`
  margin-top: 140px;
  size: 24px;
  text-align: center;
`;
