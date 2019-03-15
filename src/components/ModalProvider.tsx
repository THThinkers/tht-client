import React, { useCallback, useReducer } from 'react';
import styled from 'styled-components';
import { ModalPortal } from '.';
import ModalContext, { IModalState, ModalPayload } from '../contexts/ModalContext';
import { useOutsideClick } from '../hooks';

const Container = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: transparent;
  z-index: 101;
`;
const Wrapper = styled.div`
  position: relative;
  width: 741px;
  height: 229px;
  border: solid 1px #c3c3c3;
  background-color: #fff;
  z-index: 101;
`;
const Title = styled.div`
  width: 80%;
  text-align: center;
  margin: 20px auto;
  font-size: 24px;
  font-weight: bold;
`;
const Contents = styled.div`
  width: 100%;
  margin-top: 20px;
`;
const CloseButton = styled.a`
  position: absolute;
  top: 5px;
  right: 5px;
  width: 30px;
  height: 30px;
  opacity: 0.3;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 15px;
    content: ' ';
    height: 30px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

// 리듀서 타입 설정
const OPEN_MODAL = 'OPEN_MODAL';
const CLOSE_MODAL = 'CLOSE_MODAL';

interface IModalOpen {
  type: typeof OPEN_MODAL;
  state: ModalPayload;
}
interface IModalClose {
  type: typeof CLOSE_MODAL;
}
type IModalAction = IModalOpen | IModalClose;
// 리듀서 타입 end

const initialState: IModalState = {
  open: false,
  title: '',
  contents: '',
};
const modalReducer = (state: IModalState, action: IModalAction) => {
  switch (action.type) {
    case 'OPEN_MODAL': {
      return {
        ...state,
        ...action.state,
        open: true,
      };
    }
    default: {
      return initialState;
    }
  }
};
interface IModalProps {
  children: React.ReactNode;
}
const ModalProvider: React.SFC<IModalProps> = ({ children }) => {
  const [modalState, setModalState] = useReducer(modalReducer, initialState);
  const { title, contents, open } = modalState;
  const openModal = useCallback((state: ModalPayload) => {
    setModalState({ type: OPEN_MODAL, state });
  }, []);
  const closeModal = useCallback(() => {
    setModalState({ type: CLOSE_MODAL });
  }, []);
  const modalRef = useOutsideClick<HTMLDivElement>(closeModal);
  return (
    <ModalContext.Provider value={{ openModal, closeModal }}>
      <ModalPortal>
        {open && (
          <Container>
            <Wrapper ref={modalRef as any}>
              {/* TODO: 수정 */}
              <CloseButton onClick={closeModal} />
              <Title>{title}</Title>
              <Contents>{contents}</Contents>
            </Wrapper>
          </Container>
        )}
      </ModalPortal>
      {children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
