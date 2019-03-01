import axios from 'axios';
import { ISignupUser } from '../models/user';
const authApi = axios.create({
  // webpack dev server proxy 설정했기 때문에 이렇게 줘야함.
  // http://localhost:4000/api/auth 이런식으로 주면
  // 주소가 같아도 proxy가 안먹히는 듯
  baseURL: '/api/auth/',
});

interface IPostCheckUserNameSuccess {
  isExist: boolean;
}

export const postCheckUserName = async (username: string) => {
  const {
    data: { isExist },
  } = await authApi.post<IPostCheckUserNameSuccess>('/validation/username', { username });

  return { isExist };
};

export const getProfile = async () => {
  const { data } = await authApi.get('profile');
  return data;
};

export const signup = async (user: ISignupUser) => {
  return authApi.post('/signup', user);
};

export function logout() {
  return authApi.get('logout');
}
