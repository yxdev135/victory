import React, { useState } from 'react';
import { validateName, handlePhone, validateAgreement } from '../../utils/FormValidate/FormValidate';
import './Form.css'; 

const Form = ({ onClose, showCloseButton = true, showText = false, handleRestartQuestion }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    const handleSubmit = () => {
        if (!validateName(name)) {
            alert('Поле Имя должно содержать только буквы.');
            return;
        }

        if (!validateAgreement(isChecked)) {
            alert('Пожалуйста, подтвердите согласие с политикой конфиденциальности.');
            return;
        }

        console.log('Имя:', name);
        console.log('Номер:', phone);
        if (showText) {
            console.log(888);
            handleRestartQuestion();
        }
        if (showCloseButton) {
            onClose();
        }
        
        setButtonPressed(true);
    };

    return (
        <div className='modal__header-right'>
            <div className={`modal__header-top-right${!showCloseButton ? '-column' : ''}`}>
                <p className={`modal__header-top-text${!showCloseButton ? '-column' : ''}`}>Записаться на марафон</p>
                {showText && (
                    <p className='modal__header-top-hide-text'>
                        Марафон Таро поможет разобраться<br className='modal__header-top-non-hide-br'/>
                         в отношениях.<br className='modal__header-top-hide-br'/>
                         Получите<br className='modal__header-top-non-hide-br'/>
                          практические инструменты<br className='modal__header-top-non-hide-br'/>
                           для решения<br className='modal__header-top-hide-br'/>
                          конфликтов<br className='modal__header-top-non-hide-br'/>
                           и построения крепких отношений.
                    </p>
                )}
                {showCloseButton && (
                    <p className='modal__header-top-close' onClick={onClose}>X</p>
                )}
            </div>
            <article className='modal__middle'>
                <p className='modal__middle-text'>Ваше имя</p>
                <input 
                    className='modal__middle-input'
                    placeholder='Имя'
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </article>

            <article className='modal__middle'>
                <p className='modal__middle-text'>Ваш номер</p>
                <input 
                    className='modal__middle-input'
                    placeholder='+7 999 999-99-99'
                    value={phone}
                    onChange={(e) => setPhone(handlePhone(e.target.value))}
                />
            </article>
            <article className='modal__bottom'>
                <input 
                    className='modal__bottom-checkbox'
                    type='checkbox'
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)} 
                />
                <p className='modal__bottom-text'>Я согласен с <u>политикой<br className='modal__bottom-text-wrap-phone'/> конфиденциальности</u> <br className='modal__bottom-text-wrap-pc'/>
                и даю<br className='modal__bottom-text-wrap-phone'/> согласие на обработку персональных данных</p>
            </article>
            <button 
                className="modal__bottom-button" 
                onClick={handleSubmit}
                style={{ backgroundColor: buttonPressed ? '#9E9E9E' : '' }}
            >
                <p className="modal__bottom-button-text">Оставить заявку</p>
            </button>
        </div>
    );
};

export default Form;