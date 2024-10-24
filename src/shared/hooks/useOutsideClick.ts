import { useEffect, useRef } from "react";

export const useOutsideClick = (isOpenModal: boolean, onClose: () => void) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleCloseModalOutSide = (event: MouseEvent) => {
    if (
      isOpenModal &&
      modalRef.current &&
      !modalRef.current.contains(event.target as Node)
    ) {
      onClose();
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleCloseModalOutSide);

    return () =>
      document.removeEventListener("mousedown", handleCloseModalOutSide);
  }, [isOpenModal]);

  return modalRef;
};
