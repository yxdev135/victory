import React from "react";
import './NavBurger.css'; 

function NavBurger({ menuOpen, toggleMenu }) {
    return (
        <div className="burger" onClick={toggleMenu}>
            <div className={`burger__line ${menuOpen ? "burger__line--active" : ""}`}></div>
            <div className={`burger__line ${menuOpen ? "burger__line--active" : ""}`}></div>
            <div className={`burger__line ${menuOpen ? "burger__line--active" : ""}`}></div>
        </div>
    );
}

export default NavBurger;