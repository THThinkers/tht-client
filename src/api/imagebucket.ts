import axios from 'axios';
import { IImagebucket } from '../models/imagebucket';

const imagebucketApi = axios.create({
  baseURL: '/api/imagebucket',
});

interface IOverload {
  (target: string): Promise<string>;
  (): Promise<IImagebucket>;
}
export const getImageUrl: IOverload = async (target?: any) => {
  const url = target ? `?target=${target}` : '';
  const {
    data: { imageUrl },
  } = await imagebucketApi.get(url);
  return imageUrl;
};
