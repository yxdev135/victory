import React, { useState } from 'react';
import { validateName, handlePhone, validateAgreement, validatePhone } from '../../utils/FormValidate/FormValidate';
import './Form.css'; 

const Form = ({ onClose, showCloseButton = true, showText = false, handleRestartQuestion }) => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [isChecked, setIsChecked] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);
    const [errors, setErrors] = useState({ name: '', phone: '' });

    const handleSubmit = () => {
        let newErrors = { name: '', phone: '' };

        if (!validateName(name)) {
            newErrors.name = 'Поле Имя должно содержать только буквы.';
        }

        if (!validatePhone(phone)) {
            newErrors.phone = 'Номер телефона должен быть в формате +7 999 999-99-99.';
        }

        if (!validateAgreement(isChecked)) {
            alert('Пожалуйста, подтвердите согласие с политикой конфиденциальности.');
            return;
        }

        if (newErrors.name || newErrors.phone) {
            setErrors(newErrors);
            return;
        }

        console.log('Имя:', name);
        console.log('Номер:', phone);
        if (showText) {
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
                    className={`modal__middle-input${errors.name ? '-error' : ''}`}
                    placeholder='Имя'
                    value={name}
                    onChange={(e) => {
                        setName(e.target.value);
                        setErrors({ ...errors, name: '' });
                    }}
                />
                {errors.name && <p className='error__message'>{errors.name}</p>}
            </article>

            <article className='modal__middle'>
                <p className='modal__middle-text'>Ваш номер</p>
                <input 
                    className={`modal__middle-input${errors.name ? '-error' : ''}`}
                    placeholder='+7 999 999-99-99'
                    value={phone}
                    onChange={(e) => {
                    setPhone(handlePhone(e.target.value));
                        setErrors({ ...errors, phone: '' });
                    }}
                    style={{ borderColor: errors.phone ? 'red' : 'none' }}
                />
                {errors.phone && <p className='error__message'>{errors.phone}</p>}
            </article>
            <article className='modal__bottom'>
                <input 
                    className='modal__bottom-checkbox'
                    type='checkbox'
                    checked={isChecked}
                    onChange={() => setIsChecked(!isChecked)} 
                />
                <p className='modal__bottom-text'>Я согласен с <u>политикой конфиденциальности</u> 
                    
                и даю
                согласие на обработку персональных данных</p>
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