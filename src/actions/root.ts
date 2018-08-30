import { SET_ROOT_VALUE } from '../constants/actionTypes';

// action에 대한 type을 이렇게 정해두고, 각 reducer 별로 또는 전체적으로 합쳐준다.
// 그리고 나중에 action type이 필요할 때 쓰면 됨.
interface ISetRootValue {
  type: typeof SET_ROOT_VALUE;
  value: number;
}

export type RootAction = ISetRootValue;
// 나중에 action이 많아지면 Action의 type들을 Union으로 해준다.
// export type RootAction = ISetRootValue | IRemoveRootValue 이런식으로
export const setRootValue = (value: number): ISetRootValue => ({
  type: SET_ROOT_VALUE,
  value,
});
