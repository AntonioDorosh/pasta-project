import {useEffect, useCallback, RefObject} from 'react';

export const useOutsideClick = (ref: RefObject<HTMLElement>, callback: () => void) => {
  
  // 1. Оборачиваем логику в useCallback
  const handleCloseModalOutSide = useCallback((event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as Node)) {
      callback();
    }
  }, [ref, callback]); // Зависимости функции
  
  useEffect(() => {
    document.addEventListener('mousedown', handleCloseModalOutSide);
    
    return () => {
      document.removeEventListener('mousedown', handleCloseModalOutSide);
    };
    // 2. Теперь безопасно добавляем функцию в массив зависимостей
  }, [handleCloseModalOutSide]);
};