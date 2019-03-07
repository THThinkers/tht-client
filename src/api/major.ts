import axios from 'axios';
import { MajorList } from '../models/major';

const tagApi = axios.create({
  baseURL: '/api/major/',
});

export const getMajorList: ApiEndPoint<MajorList> = async () => {
  const { data } = await tagApi.get('list');
  return data;
};
