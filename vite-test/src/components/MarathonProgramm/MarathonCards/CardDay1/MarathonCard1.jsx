import React from "react";
import './MarathonCard1.css'
import Star from '../../../../assets/img/Vector.png';
import StarFirework from '../../../../assets/img/StarFirework.png';

function MarathonCard1() {
    return(
        <article className='programm__card'>
            <h1 className='programm__card-top-text'>1 ДЕНЬ</h1>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Карты Таро, как система по изменению<br/>
                 жизни.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Структура Таро.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Как карта читается в раскладе<br/>
                 и что вы должны знать о каждой карте.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Пройдём старшие арканы.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Сделаете расклад на наилучший способ<br/>
                 поведения с загаданным человеком.</p>
            </article>
            <img src={StarFirework} className='programm__bottom-img'/>
        </article>
    )
};
export default MarathonCard1