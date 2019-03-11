import axios from 'axios';
import { ITag } from '../models/tag';

const tagApi = axios.create({
  baseURL: '/api/tag/',
});

export const getTagList: ApiEndPoint<ITag[]> = async () => {
  const {
    data: { tags },
  } = await tagApi.get('list');
  return tags;
};
