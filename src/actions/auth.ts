import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_NOT_LINKED,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  OAUTH_LINK,
  OAUTH_LINK_FAILURE,
  OAUTH_LINK_SUCCESS,
  SIGNIN,
  SIGNIN_FAILURE,
  SIGNIN_SUCCESS,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../constants/actionTypes';
import { IOauthLinkUser, ISigninUser, ISignupUser, IUser } from '../models/user';

// 세션에 들어있는 현재 프로필 정보 가져오기.

interface IDefaultFailure {
  error: string;
}
export interface IGetProfile {
  type: typeof GET_PROFILE;
}
export interface IGetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  user: IUser;
}
export interface IGetProfileNotLinked {
  type: typeof GET_PROFILE_NOT_LINKED;
}
export interface IGetProfileFailure {
  type: typeof GET_PROFILE_FAILURE;
}

// 로그인
export interface ISignin {
  type: typeof SIGNIN;
  user: ISigninUser;
}
export interface ISigninSuccess {
  type: typeof SIGNIN_SUCCESS;
  user: IUser;
}
export interface ISigninFailure {
  type: typeof SIGNIN_FAILURE;
  error: string;
}
// 회원가입
export interface ISignup {
  type: typeof SIGNUP;
  user: ISignupUser;
}
export interface ISignupSuccess {
  type: typeof SIGNUP_SUCCESS;
}
export interface ISignupFailure {
  type: typeof SIGNUP_FAILURE;
  error: string;
}

export interface IOauthLink {
  type: typeof OAUTH_LINK;
  user: IOauthLinkUser;
}
export interface IOauthLinkSuccess {
  type: typeof OAUTH_LINK_SUCCESS;
}
export interface IOauthLinkFailure extends IDefaultFailure {
  type: typeof OAUTH_LINK_FAILURE;
}

export interface ILogout {
  type: typeof LOGOUT;
}
export type AuthAction =
  | IGetProfile
  | IGetProfileSuccess
  | IGetProfileFailure
  | IGetProfileNotLinked
  | ISignin
  | ISigninSuccess
  | ISigninFailure
  | ISignup
  | ISignupSuccess
  | ISignupFailure
  | IOauthLink
  | IOauthLinkSuccess
  | IOauthLinkFailure
  | ILogout;

export const getProfile = (): IGetProfile => ({
  type: GET_PROFILE,
});
export const signin = (user: ISigninUser): ISignin => ({
  type: SIGNIN,
  user,
});
export const signup = (user: ISignupUser): ISignup => ({
  type: SIGNUP,
  user,
});
export const oauthLink = (user: IOauthLinkUser): IOauthLink => ({
  type: OAUTH_LINK,
  user,
});
export const logout = (): ILogout => ({
  type: LOGOUT,
});
