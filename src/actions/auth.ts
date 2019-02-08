import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  PUT_PROFILE,
  PUT_PROFILE_FAILURE,
  PUT_PROFILE_SUCCESS,
  GET_PROFILE_NOT_LINKED,
} from '../constants/actionTypes';
import { IUser, PartialUser } from '../models/user';

export interface IGetProfile {
  type: typeof GET_PROFILE;
}
export interface IGetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  user: IUser;
}

export interface IGetProfileNotLinked {
  type: typeof GET_PROFILE_NOT_LINKED;
}

export interface IGetProfileFailure {
  type: typeof GET_PROFILE_FAILURE;
}
export interface IPutProfile {
  type: typeof PUT_PROFILE;
  user: PartialUser;
}
export interface IPutProfileSuccess {
  type: typeof PUT_PROFILE_SUCCESS;
  user: IUser;
}
export interface IPutProfileFailure {
  type: typeof PUT_PROFILE_FAILURE;
}
export interface ILogout {
  type: typeof LOGOUT;
}
export type AuthAction =
  | IGetProfile
  | IGetProfileSuccess
  | IGetProfileFailure
  | IGetProfileNotLinked
  | IPutProfile
  | IPutProfileSuccess
  | IPutProfileFailure
  | ILogout;

export const getProfile = (): IGetProfile => ({
  type: GET_PROFILE,
});

export const putProfile = (user: PartialUser): IPutProfile => ({
  type: PUT_PROFILE,
  user,
});

export const logout = (): ILogout => ({
  type: LOGOUT,
});
