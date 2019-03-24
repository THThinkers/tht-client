import produce from 'immer';
import { MemberAction } from '../actions/member';
import { GET_MEMBERS, GET_MEMBERS_FAILURE, GET_MEMBERS_SUCCESS } from '../constants/actionTypes';
import { IMemberUser } from '../models/user';

interface IMemberInterface {
  getMembers: {
    status: State;
    members: IMemberUser[];
    error: string;
  };
}
export type IMemberState = Readonly<IMemberInterface>;
const initialState: IMemberState = {
  getMembers: {
    status: 'INIT',
    members: [],
    error: '',
  },
};

const member = produce((draft = initialState, action: MemberAction): IMemberState => {
  switch (action.type) {
    case GET_MEMBERS: {
      draft.getMembers.status = 'WAITING';
      return draft;
    }
    case GET_MEMBERS_SUCCESS: {
      draft.getMembers.status = 'SUCCESS';
      draft.getMembers.members = action.members;
      return draft;
    }
    case GET_MEMBERS_FAILURE: {
      draft.getMembers.status = 'FAILURE';
      draft.getMembers.error = action.error;
      return draft;
    }
  }
}, initialState);

export default member;
