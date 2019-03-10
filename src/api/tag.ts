import axios from 'axios';
import { TagList } from '../models/tag';

const tagApi = axios.create({
  baseURL: '/api/tag/',
});

export const getTagList: ApiEndPoint<TagList> = async () => {
  const {
    data: { tags },
  } = await tagApi.get('list');
  return tags;
};
