// TODO: auth api 작성 예정
import axios from 'axios';
const authApi = axios.create({
  // webpack dev server proxy 설정했기 때문에 이렇게 줘야함.
  // http://localhost:4000/api/auth 이런식으로 주면
  // 주소가 같아도 proxy가 안먹히는 듯
  baseURL: '/api/auth/find/',
});

interface IFindAuthResult {
  isExist: boolean;
}

/**
 * 사용자 usename을 찾는 api
 * @param {string} name 이름
 * @param {string} phoneNumber 전화번호
 */
export const postFindUsername: ApiEndPoint<{ username: string } | IFindAuthResult> = async (
  name: string,
  phoneNumber: string,
) => {
  const { data } = await authApi.post('username', { name, phoneNumber });
  return data;
};

/**
 * 사용자 password를 찾는 api
 * @param {string} usename 사용자 id
 * @param {string} name 이름
 * @param {string} phoneNumber 전화번호
 */
export const getFindPassword: ApiEndPoint<IFindAuthResult> = async (
  usename: string,
  name: string,
  phoneNumber: string,
) => {
  const { data } = await authApi.post('password', { usename, name, phoneNumber });
  return data;
};
