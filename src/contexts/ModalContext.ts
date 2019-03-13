import { createContext } from 'react';

// type 여기서만 정해주면 끝나서 따로 안빼줬음.

export interface IModalState {
  open: boolean;
  title?: string;
  contents?: React.ReactNode;
}
export type ModalPayload = Pick<IModalState, 'title' | 'contents'>;

export type OpenModalType = (modal: ModalPayload) => void;
export type CloseModalType = () => void;
export interface IModalContext {
  openModal: OpenModalType;
  closeModal: CloseModalType;
}
export default createContext<IModalContext>({ openModal: () => ({}), closeModal: () => ({}) });
