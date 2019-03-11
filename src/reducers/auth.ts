import produce from 'immer';
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
import { IUser } from '../models/user';

type UserState = 'NOT_LINKED' | State;

export interface IAuthState {
  readonly profile: {
    readonly status: UserState;
    readonly user: Partial<IUser>;
  };
  readonly signup: {
    readonly status: State;
    readonly error: string;
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
  signup: {
    error: '',
    status: 'INIT',
  },
};

const auth = produce((draft = initialState, action: AuthAction): IAuthState => {
  switch (action.type) {
    case GET_PROFILE: {
      draft.profile.status = 'WAITING';
      return draft;
    }
    case GET_PROFILE_SUCCESS: {
      draft.profile.status = 'SUCCESS';
      draft.profile.user = action.user;
      return draft;
    }
    case GET_PROFILE_NOT_LINKED: {
      draft.profile.status = 'NOT_LINKED';
      return draft;
    }
    case GET_PROFILE_FAILURE: {
      draft.profile.status = 'FAILURE';
      return draft;
    }
    case SIGNUP: {
      draft.profile.status = 'WAITING';
      return draft;
    }
    case SIGNUP_SUCCESS: {
      draft.profile.status = 'SUCCESS';
      return draft;
    }
    case SIGNUP_FAILURE: {
      draft.profile.status = 'FAILURE';
      return draft;
    }
    case LOGOUT:
      return initialState;
    default:
      return draft;
  }
}, initialState);

export default auth;
