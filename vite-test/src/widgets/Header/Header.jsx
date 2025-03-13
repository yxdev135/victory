import React from "react";
import HeaderGeneral from "./HeaderGeneral/HeaderGeneral"
import HeaderTopBar from "./HeaderTopBar/HeaderTopBar"


function Header({openModal, modalOpen}) {
    return(
        <>
        <HeaderTopBar openModal={openModal} modalOpen={modalOpen} />
        <HeaderGeneral />
        </>
    )
};
export default Header