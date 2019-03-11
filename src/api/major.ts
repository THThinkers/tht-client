import axios from 'axios';
import { IMajor } from '../models/major';

const tagApi = axios.create({
  baseURL: '/api/major/',
});

export const getMajorList: ApiEndPoint<IMajor[]> = async () => {
  const {
    data: { majors },
  } = await tagApi.get('list');
  return majors;
};
