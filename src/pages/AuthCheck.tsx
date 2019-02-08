import React from 'react';
import qs from 'qs';
import { Link } from 'react-router-dom';

interface IParamSpec {
  username?: string;
  kakaoId?: string;
  googleId?: string;
}

const AuthCheck = () => {
  const params: IParamSpec = qs.parse(window.location.search.substr(1));
  /*
    구글 아이디는 이메일이 확인 가능하기때문에 이메일을 디비와 확인해보고
    이메일이 중복된다면 해당 이메일로 로그인을 요청
  */
  if (params.googleId && params.username && params.googleId === params.username) {
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
      <div>
        <div>혹시 아이디가 있니?</div>
        <div>
          <button>예</button> {/* 로그인하러 */}
          <button>아니오</button> {/* 회원가입하러 */}
        </div>
      </div>
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

export default AuthCheck;
