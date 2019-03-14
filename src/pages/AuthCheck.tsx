import qs from 'qs';
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { oauthLink } from '../actions/auth';
import { SigninForm } from '../containers/Signin';
import { IOauthLinkUser, ISigninUser } from '../models/user';
import { IRootState } from '../reducers';
import { Wrapper } from '../styles/SignInStyles';
interface IParamSpec {
  username?: string;
  kakaoId?: string;
  googleId?: string;
}

interface IAuthCheckProps {
  oauthLinkAction: typeof oauthLink;
  oauthLinkStatus: State;
}
const AuthCheck: React.SFC<IAuthCheckProps> = ({ oauthLinkAction, oauthLinkStatus }) => {
  const params: IParamSpec = qs.parse(window.location.search.substr(1));
  // 계정 있는 경우 signin form을 통해 연동시
  const handleSubmit = (user: ISigninUser) => {
    const type = 'kakaoId' in params ? 'kakaoId' : 'googleId';
    // Oauth link 로직
  };
  /*
    구글 아이디는 이메일이 확인 가능하기때문에 이메일을 디비와 확인해보고
    이메일이 중복된다면 해당 이메일로 로그인을 요청
  */
  if (params.username) {
    return (
      <div>
        너는 아이디가 있으니 로그인을 해야겠구나
        <div>
          <label>아이디</label>
          <input placeholder="이메일을 입력하세요" />
        </div>
        <div>
          <label>비밀번호</label>
          <input placeholder="비밀번호를 입력하세요" />
        </div>
      </div>
    );
  }
  /**
   * 아이디를 유무를 물어보는 경우는 두 가지로 나뉠 수 있다
   * 1. 카카오 로그인 시
   * 2. 구글 로그인 했지만, 이메일이 겹치지 않은 경우
   */
  if (params.kakaoId || params.googleId) {
    return (
      <Wrapper>
        <SigninForm
          header="회원가입을 하셨나요?"
          subHeader="회원가입을 하셨다면 구글/카카오 계정과의 연동을 위해 회원가입한 계정으로 다시 한번 로그인 해주세요."
          handleSubmit={handleSubmit}
          signinStatus={oauthLinkStatus}
        />
      </Wrapper>
    );
  }
  /**
   * 어느경우에도 들어오지 않는 경우 홈으로 리다이렉팅을 시킴.
   */
  return (
    <div>
      <div>존나 심각한 에러에오</div>
      <Link to="/landing">홈으로 가기</Link>
    </div>
  );
};

const mapStateToProps = (state: IRootState) => ({
  linkStatus: state.auth.oauthLink.status,
});
export default connect(
  mapStateToProps,
  {
    oauthLinkAction: oauthLink,
  },
)(AuthCheck);
