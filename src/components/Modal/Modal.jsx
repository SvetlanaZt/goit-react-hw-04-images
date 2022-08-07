import css from './Modal.module.css';
import { useEffect } from 'react';
import PropTypes from 'prop-types';


export default function Modal({ largeImage, alt, closeModal}) { 

    const handelBackdrop = evt => {
     if (evt.target === evt.currentTarget) { 
         closeModal(true)
     }
    }

    useEffect(() => {
    window.addEventListener('keydown', handelKeyDown)
        return () => {
    window.removeEventListener('keydown', handelKeyDown)
        }
    },)
    
 const handelKeyDown = evt => {
    if (evt.code === 'Escape') {
      closeModal(true)
    }
    }
     return (
      <div className={css.overlay} onClick={handelBackdrop}>
        <div className={css.modal}>
          <img src={largeImage} alt={alt} />
        </div>
      </div>
    )
}

Modal.propTypes = {
    largeImage: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};
