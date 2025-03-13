import React from "react";
import NavLinks from "../../utils/NavLinks/NavLinks";
import './NavList.css'

function NavList({menuOpen,openModal,column }) {
    return(
        <>
        <ul className={`list ${menuOpen ? "list__active" : ""} ${column ? "list__column" : ""}`}>
                {NavLinks.map(item => (
                    <li key={item.id} onClick={item.id === 6 ? openModal : undefined} className="list__element">
                        {item.text}
                    </li>
                ))}
                {menuOpen && (
                    <aside className="burger__info">
                        <p>Юридическая информация</p>
                        <p>Политика конфиденциальности</p>
                        <p>«СИЛА ТАРО»</p>
                        <p>© Школа Анастасии MON, 2025</p>
                    </aside>
                )}
            </ul>
        </>
    )
};
export default NavList