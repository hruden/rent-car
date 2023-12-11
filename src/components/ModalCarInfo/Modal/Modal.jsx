import React, { useEffect } from 'react';
import { MdClose } from "react-icons/md";
import { ModalCloseBtn, ModalContent, ModalWrapper } from './Modal.styled';

export default function Modal({ active, setActive, children }) {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        setActive(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [setActive]);
  return (
    
      <ModalWrapper $primary={active} onClick={()=>setActive(false)}>
        <ModalContent $primary={active} onClick={e => e.stopPropagation()}>
          <ModalCloseBtn
                  onClick={()=>setActive(false)}
                >
                  <MdClose/>
          </ModalCloseBtn>
          {children}
        </ModalContent>
      </ModalWrapper>
    
  );
}