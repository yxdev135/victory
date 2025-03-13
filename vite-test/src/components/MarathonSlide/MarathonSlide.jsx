import React from "react";
import './MarathonSlide.css';
import Star from '../../assets/img/Vector.png';
import StarSky from '../../assets/img/StarSky.png';
import Anastasia from '../../assets/img/Frame 11.png';
import Title from "../../assets/ui/Title/Title";

function MarathonSlide() {
    return (
        <div className="marathon__header">
            <Title text="МАРАФОН ТОЧНО ДЛЯ ВАС,ЕСЛИ У ВАС ВОЗНИКАЮТ ТАКИЕ ВОПРОСЫ:"/>
            <div className='marathon__middle'>
                <div className='marathon__middle-left'>
                    <img src={StarSky} className='marathon__left-img' alt="StarSky" />
                    <article className='marathon__left-article'>
                        <img src={Star} className='marathon__left-star-img' alt="Star" />
                        <p className='marathon__left-text'>Что я делаю в этой жизни не так? Почему все плохо <br />
                            с отношениями?</p>
                    </article>
                    <article className='marathon__left-article'>
                        <img src={Star} className='marathon__left-star-img' alt="Star" />
                        <p className='marathon__left-text'>Устала от всего, работаю как лошадь, удовольствия и денег нет. <br />
                            Что делать?</p>
                    </article>
                    <article className='marathon__left-article'>
                        <img src={Star} className='marathon__left-star-img' alt="Star" />
                        <p className='marathon__left-text'>Когда я встречу того самого? Когда перестану быть одинокой?</p>
                    </article>
                    <article className='marathon__left-article'>
                        <img src={Star} className='marathon__left-star-img' alt="Star" />
                        <p className='marathon__left-text'>В чем моё предназначени? Зачем я тут? На своём ли я месте?</p>
                    </article>
                    <article className='marathon__left-article'>
                        <img src={Star} className='marathon__left-star-img' alt="Star" />
                        <p className='marathon__left-text'>Разводиться или попытаться сохранить отношения?<br />
                            Совместимы ли мы?</p>
                    </article>
                    <article className='marathon__left-article'>
                        <img src={Star} className='marathon__left-star-img' alt="Star" />
                        <p className='marathon__left-text'>Как наладить отношения с родственниками?</p>
                    </article>
                    <img src={StarSky} className='marathon__left-img' alt="StarSky" />
                    <div className='marathon__middle-right-phone'>
                        <img src={Anastasia} className='marathon__middle-right-img-phone' alt="Anastasia" />
                    </div>
                </div>
                <div className='marathon__middle-right'>
                    <img src={Anastasia} className='marathon__middle-right-img' alt="Anastasia" />
                </div>
            </div>
        </div>
    );
}

export default MarathonSlide;