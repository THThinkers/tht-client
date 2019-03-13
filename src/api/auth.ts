import axios from 'axios';
import { ISigninUser, ISignupUser, IUser } from '../models/user';
const authApi = axios.create({
  // webpack dev server proxy 설정했기 때문에 이렇게 줘야함.
  // http://localhost:4000/api/auth 이런식으로 주면
  // 주소가 같아도 proxy가 안먹히는 듯
  baseURL: '/api/auth/',
});

// * ----------------------------------------------------
// *                  로그인
// * ----------------------------------------------------
interface IPostSigninSuccess {
  success: boolean;
  user: IUser;
}
export const signin: ApiEndPoint<IPostSigninSuccess> = async (user: ISigninUser) => {
  const { data } = await authApi.post('login', user);
  return data;
};
/**
 * 프로필 정보를 가져오는 api
 */
export const getProfile = async () => {
  const { data } = await authApi.get('profile');
  return data;
};

// * ----------------------------------------------------
// *                  회원가입
// * ----------------------------------------------------

/**
 * 회원가입하는 api
 * @param user 회원가입할 유저 정보
 */
export const signup = async (user: ISignupUser) => {
  const { data } = await authApi.post('/signup', user);
  return data;
};

/**
 * username 중복을 체크하는 api
 * @param username 체크할 id
 */
interface IPostCheckUserNameSuccess {
  isExist: boolean;
}
export const postCheckUserName: ApiEndPoint<IPostCheckUserNameSuccess> = async (username: string) => {
  const {
    data: { isExist },
  } = await authApi.post('/validation/username', { username });

  return { isExist };
};

// * ----------------------------------------------------
// *                  로그아웃
// * ----------------------------------------------------

/**
 * 로그아웃하는 api
 */
export function logout() {
  return authApi.get('logout');
}
