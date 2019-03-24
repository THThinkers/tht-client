import axios from 'axios';
import qs from 'qs';
import { IGetMembersQuery } from '../models/query';
import { IMemberUser } from '../models/user';

const instance = axios.create({
  baseURL: '/api/member',
});

const getMembers: ApiEndPoint<IMemberUser[]> = async (query: IGetMembersQuery) => {
  const {
    data: { payload },
  } = await instance.get(`/list?${qs.stringify(query)}`);
  return payload;
};

export { getMembers };
