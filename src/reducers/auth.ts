import { AuthAction } from '../actions/auth';
import {
  GET_PROFILE,
  GET_PROFILE_FAILURE,
  GET_PROFILE_NOT_LINKED,
  GET_PROFILE_SUCCESS,
  LOGOUT,
  SIGNUP,
  SIGNUP_FAILURE,
  SIGNUP_SUCCESS,
} from '../constants/actionTypes';
import { State } from '../constants/state';
import { IUser } from '../models/user';

type UserState = 'NOT_LINKED' | State;

export interface IAuthState {
  profile: {
    status: UserState;
    user: Partial<IUser>;
  };
  signup: {
    status: State;
    error: string;
  };
}

const initialState: Readonly<IAuthState> = {
  profile: {
    status: 'INIT',
    user: {
      _id: '',
      isVerified: false,
      name: '',
    },
  },
  signup: {
    error: '',
    status: 'INIT',
  },
};

const auth = (state: IAuthState = initialState, action: AuthAction): IAuthState => {
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
    case GET_PROFILE_NOT_LINKED:
      return {
        ...state,
        profile: {
          ...state.profile,
          status: 'NOT_LINKED',
        },
      };
    case GET_PROFILE_FAILURE:
      return {
        ...state,
        profile: {
          ...state.profile,
          status: 'FAILURE',
        },
      };
    case SIGNUP:
      return {
        ...state,
        signup: {
          ...state.signup,
          status: 'WAITING',
        },
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        signup: {
          ...state.signup,
          status: 'SUCCESS',
        },
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        signup: {
          ...state.signup,
          error: action.error,
          status: 'FAILURE',
        },
      };
    case LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default auth;
