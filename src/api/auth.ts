import axios, { AxiosPromise } from 'axios';
const authApi = axios.create({
  // webpack dev server proxy 설정했기 때문에 이렇게 줘야함.
  // http://localhost:4000/api/auth 이런식으로 주면
  // 주소가 같아도 proxy가 안먹히는 듯
  baseURL: '/api/auth/',
});

export function getProfile(): AxiosPromise {
  return authApi.get('profile');
}
export function updateProfile(userId: string, name: string) {
  return authApi.put('oauth/profile', { userId, name });
}
export function logout() {
  return authApi.get('logout');
}
