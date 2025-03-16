import React, { useState } from "react";
import Arrow from '../../../assets/img/Vector 1.png';
import DownArrow from '../../../assets/img/Group.png';
import './GoToCircles.css';

function GoToCircles({ text, subtext, boldtext }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <article className='header__bottom'>
            <div
            className="header__bottom-hover"
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}
            >
                {isHovered && (
                <div className="header__bottom-circle-hover">
                    <div className="circle__hover-top-left absolute">
                        <div className="circle__hover-top-left-dot absolute" />
                        <article className="circle__hover-top-left-star absolute"/>
                        <article className="circle__hover-top-left-second absolute" />
                    </div>
                    <div className="circle__hover-top-right absolute">
                        <article className="circle__hover-top-left-star absolute"/>
                        <article className="circle__hover-top-left-second absolute"/>
                    </div>
                    <div className="circle__hover-bottom absolute">
                        <article className="circle__hover-top-left-star absolute"/>
                    </div>
                </div>
            )}
            <article 
            className='header__bottom-circle'
            style={{ backgroundColor: isHovered ? '#fff' : '', cursor: 'pointer' }}
            >
                <p className='header__bottom-circle-text'>{text}</p>
                <img src={Arrow} className='header__bottom-circle-arrow' alt="Arrow" />
            </article>
            <div className='header__bottom-second-circle absolute'></div>
            </div>
            <img src={DownArrow} className={`header__bottom-arrow${boldtext ? '-column' : ''} absolute`} alt="Down Arrow" />
            <article className={`header__bottom-info${boldtext ? '-column' : ''} absolute`}>
                <p className='header__bottom-info-text'>
                    {subtext}
                    {boldtext && (
                        <b><br />{boldtext}</b>
                    )}
                </p>
            </article>
        </article>
    );
}

export default GoToCircles;