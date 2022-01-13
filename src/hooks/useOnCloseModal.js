import { useEffect } from 'react';

export function useOnCloseModal(ref, handler) {
  useEffect(() => {
    const listener = (e) => {
      // Esc
      if (e.keyCode === 27) {
        handler(e);
      }
      // Click
      if (!ref.current || ref.current.contains(e.target)) {
        return;
      }
      handler(e);
    };
    document.addEventListener('keydown', listener);
    document.addEventListener('mousedown', listener);
    document.addEventListener('touchstart', listener);
    return () => {
      document.removeEventListener('keydown', listener);
      document.removeEventListener('mousedown', listener);
      document.removeEventListener('touchstart', listener);
    };
  }, [ref, handler]);
}
