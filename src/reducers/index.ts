import { combineReducers } from 'redux';
import auth, { IAuthState } from './auth';
import member, { IMemberState } from './member';
// import { RootAction } from '../actions/root';
// import { SET_ROOT_VALUE } from '../constants/actionTypes';

// export interface IRootState {
//   readonly value: number;
// }
// const initialState = {
//   value: 4,
// };

// const rootReducer = (
//   state: IRootState = initialState,
//   action: RootAction,
// ): IRootState => {
//   switch (action.type) {
//     case SET_ROOT_VALUE: {
//       return {
//         ...state,
//         value: action.value,
//       };
//     }
//     default:
//       return state;
//   }
// };
export interface IRootState {
  auth: IAuthState;
  member: IMemberState;
  // ..추가될 리듀서 타입
}
const appReducer = combineReducers<IRootState>({
  auth,
  member,
  // ..추가될 리듀서
});

export default appReducer;
