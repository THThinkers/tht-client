import axios from 'axios';
import { PartialUser } from '../models/user';

const authApi = axios.create({
  // webpack dev server proxy 설정했기 때문에 이렇게 줘야함.
  // http://localhost:4000/api/auth 이런식으로 주면
  // 주소가 같아도 proxy가 안먹히는 듯
  baseURL: '/api/auth/',
});

export const getProfile = async () => {
  const { data } = await authApi.get('profile');
  return data;
};
export function updateProfile(user: PartialUser) {
  return authApi.put('oauth/profile', user);
}
export function logout() {
  return authApi.get('logout');
}
