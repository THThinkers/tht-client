import { GET_MEMBERS, GET_MEMBERS_FAILURE, GET_MEMBERS_SUCCESS } from '../constants/actionTypes';
import { IGetMembersQuery } from '../models/query';
import { IMemberUser } from '../models/user';

export interface IGetMembers {
  type: typeof GET_MEMBERS;
  query: IGetMembersQuery;
}
export interface IGetMembersSuccess {
  type: typeof GET_MEMBERS_SUCCESS;
  members: IMemberUser[];
}

export interface IGetMembersFailure {
  type: typeof GET_MEMBERS_FAILURE;
  error: string;
}

export type MemberAction = IGetMembers | IGetMembersSuccess | IGetMembersFailure;

export const getMembers = (query: IGetMembersQuery): IGetMembers => {
  return {
    type: GET_MEMBERS,
    query,
  };
};
