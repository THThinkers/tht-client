import { useContext, useEffect } from 'react';
import ModalContext, { CloseModalType, ModalPayload, OpenModalType } from '../contexts/ModalContext';

// 가장 루트에 있는 Modal Provider 사용하는 hook
const useModal = (defaultModal?: ModalPayload): [OpenModalType, CloseModalType] => {
  const { openModal, closeModal } = useContext(ModalContext);
  useEffect(() => {
    if (defaultModal) {
      openModal(defaultModal);
    }
    return () => closeModal();
  }, []);
  return [openModal, closeModal];
};

export default useModal;
