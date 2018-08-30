import { RootAction } from '../actions/root';
import { SET_ROOT_VALUE } from '../constants/actionTypes';

export interface IRootState {
  readonly value: number;
}
const initialState = {
  value: 42,
}

const rootReducer = (state: IRootState = initialState, action: RootAction): IRootState => {
  switch (action.type) {
    case SET_ROOT_VALUE: {
      return {
        ...state,
        value: action.value,
      }
    }
    default: 
      return state;
  }
}
export default rootReducer;
