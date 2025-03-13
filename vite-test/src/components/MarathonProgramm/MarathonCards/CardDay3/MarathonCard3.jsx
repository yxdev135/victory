import React from "react";
import './MarathonCard3.css'
import Star from '../../../../assets/img/Vector.png';
import StarFirework from '../../../../assets/img/StarFirework.png';

function MarathonCard3() {
    return(
        <article className='programm__card'>
            <h1 className='programm__card-top-text'>3 ДЕНЬ</h1>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Изучите все карты младших Арканов:<br/>
                 номерные и карты двора.</p>
            </article>
            <article className='programm__card-article'>
                <img src={Star} className='programm__card-star-img' alt="Star" />
                <p className='programm__card-text'>Сделаете несколько раскладов на свои<br/>
                 личные ситуации.</p>
            </article>
            <p className='programm__card-middle-text'><b>ЗАКЛЮЧИТЕЛЬНЫЙ ВЕБИНАР <br/>
             В 19:00 ПО МСК</b></p>
             <article className='programm__card-article'>
                <p className='programm__card-text'>1.Система Таро и её тайны</p>
            </article>
            <article className='programm__card-article'>
                <p className='programm__card-text'>2.Откуда тарологи берут информацию<br/>
                 и как читать Таро без ошибок</p>
            </article>
            <article className='programm__card-article'>
                <p className='programm__card-text'>3.Как читать Таро безопасно для себя</p>
            </article>
            <article className='programm__card-article'>
                <p className='programm__card-text'>4.Почему у тарологов меняются сценарии<br/>
                 в жизни и как Таро может помочь изменить<br/>
                  будущие негативные сценарии в вашей<br/>
                   жизни</p>
            </article>
            <article className='programm__card-article'>
                <p className='programm__card-text'>5.Какую колоду выбрать новичку</p>
            </article>
            <img src={StarFirework} className='programm__bottom-img'/>
        </article>
    )
};
export default MarathonCard3