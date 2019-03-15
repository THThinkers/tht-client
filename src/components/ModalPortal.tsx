import React from 'react';
import { createPortal } from 'react-dom';

// 모달 전체 Provider에서 말고 따로 쓰고 싶을 때는 이걸로 감싸준 다음에 쓰면 됨.
export interface IModalPortalProps {
  children: React.ReactNode;
}
const ModalPortal: React.SFC<IModalPortalProps> = ({ children }) => {
  const el = document.getElementById('default-modal');
  if (!el) {
    return null;
  }
  return createPortal(children, el);
};

export default ModalPortal;
