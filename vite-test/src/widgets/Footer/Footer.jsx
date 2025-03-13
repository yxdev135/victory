import React, { useState, useEffect } from "react";
import './Footer.css';
import NavList from "../../assets/ui/NavList/NavList";

function Footer({ openModal }) {
    const [column, setColumn] = useState(false);

    const handleColumn = () => {
        if (window.innerWidth < 768) {
            setColumn(true);
        } else {
            setColumn(false);
        }
    };

    useEffect(() => {
        handleColumn(); 
        window.addEventListener('resize', handleColumn);
        return () => {
            window.removeEventListener('resize', handleColumn);
        };
    }, []);

    return (
        <footer className="footer">
            <div className="footer__list-column">
                <ul className='footer__list'>
                    <NavList openModal={openModal} column={column} />
                    <li>
                        <p className="footer__list-right-text">
                            Если у вас остались вопросы по курсу, пишите нам в любое время
                        </p>
                    </li>
                    <div className="footer__list_social">
                        <li>
                            <a href="https://vk.com/tarosila">
                                <div className="footer__list-right-circle"></div>
                            </a>
                        </li>
                        <li>
                            <a href="https://t.me/SilaTarot">
                                <div className="footer__list-right-circle-second"></div>
                            </a>
                        </li>
                    </div>
                </ul>
                <ul className="footer__bottom-list">
                    <li className="footer__bottom-list-text">Юридическая информация</li>
                    <li className="footer__bottom-list-text">Политика конфедициальности</li>
                    <li className="footer__bottom-list-text">«СИЛА ТАРО»</li>
                    <li className="footer__bottom-list-text">© Школа Анастасии MON, 2025</li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;