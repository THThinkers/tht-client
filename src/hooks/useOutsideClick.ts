import { RefObject, useRef, useState } from 'react';
import { useWindowEvent } from '.';

const useOutsideClick = <T extends HTMLElement>(onUnvisible: () => void): RefObject<T> => {
  const ref = useRef<T>(null);
  const handleClick: EventListener = (e) => {
    if (e.target && ref.current && !ref.current.contains(e.target as HTMLElement)) {
      onUnvisible();
    }
  };
  useWindowEvent('click', handleClick);

  return ref;
};

export default useOutsideClick;
