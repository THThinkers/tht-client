import { AuthAction } from '../actions/auth';
import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  PUT_PROFILE,
  PUT_PROFILE_SUCCESS,
} from '../constants/actionTypes';
import { IUser } from '../models/user';
export interface IAuthState {
  readonly profile: {
    readonly status: string;
    readonly user: IUser;
  };
}

const initialState: IAuthState = {
  profile: {
    status: 'INIT',
    user: {
      _id: '',
      isVerified: false,
      name: '',
    },
  },
};
const auth = (
  state: IAuthState = initialState,
  action: AuthAction,
): IAuthState => {
  switch (action.type) {
    case GET_PROFILE:
      return {
        ...state,
        profile: {
          ...state.profile,
          status: 'WAITING',
        },
      };
    case GET_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          status: 'SUCCESS',
          user: action.user,
        },
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          status: 'FAILURE',
        },
      }
    case PUT_PROFILE: {
      return {
        ...state,
        profile: {
          ...state.profile,
          status: 'WAITING',
        },
      };
    }
    case PUT_PROFILE_SUCCESS:
      return {
        ...state,
        profile: {
          ...state.profile,
          status: 'SUCCESS',
          user: action.user,
        },
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default auth;
