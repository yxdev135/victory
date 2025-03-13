import React from "react";
import './Title.css'
import Star from '../../img/Star.svg';

function Title({text}) {
    return(
        <>
        <article className='title'>
                <img src={Star} className='title__img' alt="Star" />
                <h1 className='title__text'>{text}</h1>
                <img src={Star} className='title__img' alt="Star" />
            </article>
        </>
    )
};
export default Title