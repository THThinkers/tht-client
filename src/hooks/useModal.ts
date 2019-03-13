import { useContext, useEffect } from 'react';
import ModalContext, { CloseModalType, ModalPayload, OpenModalType } from '../contexts/ModalContext';

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
