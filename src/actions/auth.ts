import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  PUT_PROFILE,
  PUT_PROFILE_FAILURE,
  PUT_PROFILE_SUCCESS,
  LOGOUT,
} from '../constants/actionTypes';
import { IUser } from '../models/user';
export interface IGetProfile {
  type: typeof GET_PROFILE;
}
export interface IGetProfileSuccess {
  type: typeof GET_PROFILE_SUCCESS;
  user: IUser;
}
export interface IGetProfileFailure {
  type: typeof GET_PROFILE_FAILURE;
}
export interface IPutProfile {
  type: typeof PUT_PROFILE;
  userId: string;
  name: string;
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
  | IPutProfile
  | IPutProfileSuccess
  | IPutProfileFailure
  | ILogout;

export const getProfile = (): IGetProfile => ({
  type: GET_PROFILE,
});

export const putProfile = (userId: string, name: string): IPutProfile => ({
  name,
  type: PUT_PROFILE,
  userId,
});

export const logout = (): ILogout => ({
  type: LOGOUT,
});
