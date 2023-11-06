import { useEffect, useState } from "react";

export default function useToggleModal() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.documentElement.style.overflowY = isOpen ? "hidden" : "";
  }, [isOpen]);

  const openModal = () => setIsOpen(true);

  const toggleModal = () => {
    setIsOpen((prev) => !prev);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleKeyDown = (e) => {
    if (e.code === "Escape") {
      setIsOpen(() => {
        closeModal();
      });
    }
  };

  const handleBackdropClick = (e) => {
    if (e.currentTarget === e.target) {
      setIsOpen(() => {
        closeModal();
      });
    }
  };

  return {
    isOpen,
    openModal,
    closeModal,
    handleKeyDown,
    handleBackdropClick,
    toggleModal,
  };
}
