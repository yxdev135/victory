import React from "react";
import NavLinks from "../../../../consts/NavLinks/NavLinks";
import './NavList.css'
import NavSubInfo from "../NavSubInfo/NavSubInfo";

function NavList({menuOpen,openModal,column }) {
    return(
        <>
        <ul className={`list ${menuOpen ? "list__active" : ""} ${column ? "list__column" : ""}`}>
                {NavLinks.map(item => (
                    <li key={item.id} onClick={item.id === 6 ? openModal : undefined} className="list__element">
                        {item.text}
                    </li>
                ))}
                {menuOpen && <NavSubInfo/>}
            </ul>
        </>
    )
};
export default NavList