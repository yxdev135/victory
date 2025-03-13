import React from "react";
import './MarathonCard2.css'
import Star from '../../../../assets/img/Vector.png';
import StarFirework from '../../../../assets/img/StarFirework.png';

function MarathonCard2() {
    return(
        <article className='programm__card'>
            <h1 className='programm__card-top-text'>2 ДЕНЬ</h1>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text-start'>Изучите стихии таро.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Сделайте расклад,<br/>
                 чтобы продиагностировать состояние<br/>
                  ваших отношений.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Разберитесь в своих отношениях. Поймёте,<br/>
                 что важно делать для укрепления<br/>
                  отношений и какие блоки мешают<br/>
                   вам достичь гармонии.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'><b>Бонусом освоите практику: «Выход<br/>
                 из тупика».<br className='programm__card-text-phone'/></b>Эта практика поможет<br/>
                  вам найти решение, когда вы запутались<br/>
                   в сложной ситуации или переживаете<br/>
                    кризис в отношениях.</p>
            </article>
            <img src={StarFirework} className='programm__bottom-img'/>
        </article>
    )
};
export default MarathonCard2