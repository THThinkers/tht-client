import { RefObject, useLayoutEffect } from 'react';

type EventFunction = (e: Event) => void;

const useEvent = (target: RefObject<HTMLElement>, eventType: string, eventFn: EventFunction) => {
  useLayoutEffect(() => {
    if (target.current) {
      target.current.addEventListener(eventType, eventFn);
    }
    return () => {
      if (target.current) {
        target.current.removeEventListener(eventType, eventFn);
      }
    };
  }, [target]);
};

export default useEvent;
