import React from 'react';
import './NavSubInfo.css';
import NavSubInfoData from '../../../../consts/NavSubInfo/NavSubInfoData';

const NavSubInfo = ({ column }) => {
    const className = column === false ? 'info__row' : 'info';

    return (
        <aside className={className}>
            {NavSubInfoData.map((text, index) => (
                <p key={index}>{text}</p>
            ))}
        </aside>
    );
};

export default NavSubInfo;