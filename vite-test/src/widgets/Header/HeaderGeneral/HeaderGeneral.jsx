import React from "react";
import './HeaderGeneral.css';
import Star from '../../../assets/img/Star.svg';
import GoToCircles from "../../../assets/ui/GoToCirlces/GoToCircles";

function HeaderGeneral() {
    return (
        <header>
            <section className="header__section">
                <div className="header__top">
                    <p className="header__top-text">УЗНАЙТЕ</p>
                    <img src={Star} className="header__top-img" alt="Star" />
                </div>
                <div className="header__middle">
                    <p className="header__middle-text">
                        КАК ВЫЙТИ ИЗ КРИЗИСА <br />
                         ОТНОШЕНИЙ <img src={Star} className="header__middle-img" alt="Star" />
                    </p>
                </div>
                <div className='header__container'>
                <p className="header__container-subtext">на бесплатном 3-х дневном марафоне ТАРО</p>
                <img src={Star} className="header__container-img" alt="Star" />
                </div>
                <GoToCircles text="Смотреть первый урок" subtext="Научитесь делать расклады и читать их без ошибок за 3 дня"/>
            </section>
            <div className="header__left-bottom-images">
                <div className="header__left-bottom-relative">
                    <div className="header__left-bottom-smoke">
                    <div className="header__left-bottom-empress">
                        <div className="header__left-bottom-emperor">
                        <div className="header__left-bottom-pair">
                        <div className="header__left-bottom-lovers">
                            <div className="header__left-bottom-star"/>
                        </div>
                        </div>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default HeaderGeneral;