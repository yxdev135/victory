import React from 'react';
import './Modal.css';
import bckground from '../../../assets/img/Frame10.png';
import Cards from '../../../assets/img/Group 2.png';
import Form from '../Form/Form';

const Modal = ({ isOpen, onClose }) => {
    if (!isOpen) return null; 

    document.addEventListener('keydown', function(event) {
        if(event.key === 'Escape') {
            onClose();
        }
    });

    return (
        <div className="modal__overlay" onClick={onClose}>
            <div className="modal__overlay-content" onClick={(e) => e.stopPropagation()}>
                <div className='modal__header'>
                    <div className='modal__header-left'>
                        <img src={bckground} className='modal__header-left-background' alt="Background" />
                        <img src={Cards} className='modal__header-left-cards' alt="Cards" />
                        <article className='modal__bottom-info'>
                            <p className='modal__bottom-info-text'>
                                Бонус за регистрацию:<br />
                                <b>«Пособие для начинающего таролога»</b>
                            </p>
                        </article>
                    </div>
                    <Form onClose={onClose} />
                </div>
                <div className='modal__bottom-phone'>
                    <div className='modal__header-left-phone'>
                        <img src={bckground} className='modal__header-left-background-phone' alt="Background" />
                        <img src={Cards} className='modal__header-left-cards-phone' alt="Cards" />
                        <article className='modal__bottom-info-phone'>
                            <p className='modal__bottom-info-text-phone'>
                                Бонус за регистрацию:<br />
                                <b>«Пособие для начинающего <br></br>таролога»</b>
                            </p>
                        </article>
                    </div>
                </div>
            </div> 
        </div>
    );
};

export default Modal;