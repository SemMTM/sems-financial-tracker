import { useCallback, useEffect } from 'react'
import styles from '../styles/Modal.module.css'

export default function Modal({ isOpen, onClose, children }) {
  const handleEsc = useCallback((e) => {
      if (e.key === 'Escape') onClose();
    }, [onClose]);
  
  // Close modal when pressing Escape key
  useEffect(() => {
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      return () => document.removeEventListener('keydown', handleEsc);
    }
  }, [isOpen, handleEsc]);

  if (!isOpen) return null

  return (
    <div 
      className={styles.overlay}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
    >
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.close} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>
  );
}
