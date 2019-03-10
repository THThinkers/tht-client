import axios from 'axios';
import { MajorList } from '../models/major';

const tagApi = axios.create({
  baseURL: '/api/major/',
});

export const getMajorList: ApiEndPoint<MajorList> = async () => {
  const {
    data: { majors },
  } = await tagApi.get('list');
  return majors;
};
