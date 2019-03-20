import { IUser } from './user';

export interface IGetMembersQuery extends Partial<Pick<IUser, 'isActive'>> {
  limit: number;
  offset: number;
  search?: string;
}
