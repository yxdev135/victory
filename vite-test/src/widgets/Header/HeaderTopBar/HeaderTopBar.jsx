import React, { useEffect, useState } from "react";
import './HeaderTopBar.css';
import NavList from "../../../assets/ui/NavList/NavList";
import NavBurger from "../../../assets/ui/NavBurger/NavBurger";

function HeaderTopBar({ openModal, modalOpen}) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [buttonPressed, setButtonPressed] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const handleButtonClick = () => {
        setButtonPressed(true);
        openModal();
    };
    useEffect(() => {
        if (!modalOpen) {
            setButtonPressed(false)
        }
    }, [modalOpen]);

    return (
        <nav className="header">
            <NavBurger menuOpen={menuOpen} toggleMenu={toggleMenu} />
            <NavList openModal={openModal} menuOpen={menuOpen}/>
            <button 
                className="header__button" 
                onClick={handleButtonClick}
                style={{ backgroundColor: buttonPressed ? '#9E9E9E' : '' }}
            >
                <p className="header__button-text">Оставить заявку</p>
            </button>
        </nav>
    );
}

export default HeaderTopBar;