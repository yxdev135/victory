import React from "react";
import './MarathonResults.css'
import Star from '../../assets/img/Vector.png';
import PinkNuke from '../../assets/img/PinkNuke.png';
import People from '../../assets/img/People.png';
import Lovers from '../../assets/img/Lovers.png';
import Sun from '../../assets/img/Sun.png';
import Empress from '../../assets/img/Empress.png';
import Emperor from '../../assets/img/Emperor.png';
import Title from "../../assets/ui/Title/Title";


function MarathonResults() {
    return(
        <div className='results'>
            <img src={PinkNuke} className='results__top-img absolute'></img>
            <Title text="РЕЗУЛЬТАТЫ ЗА ТРИ ДНЯ МАРАФОНА ВЫ УЗНАЕТЕ:"/>
            <div className='results__middle'>
                <article>
                    <section className='results__middle-block'>
                        <img src={Star} className='results__middle-block-img'></img>
                        <p className='results__middle-block-text'><b>Освоите мощные инструменты<br/>
                         для построения и укрепления<br/>
                         отношений</b></p>
                        <p className='results__middle-block-text'>Вы перестанете пассивно ждать,<br/>
                         что жизнь сама подскажет<br/>
                         вам решения, научитесь предвидеть<br/>
                         возможные трудности и избегать<br/>
                         негативных сценариев.</p>
                    </section>
                </article>
                <article>
                    <section className='results__middle-block'>
                        <img src={Star} className='results__middle-block-img'></img>
                        <p className='results__middle-block-text'><b>Изучите арканы и их значение<br/>
                        в отношениях</b></p>
                        <p className='results__middle-block-text'>Вы научитесь понимать символизм<br/>
                        Старших и Младших Арканов, стихий<br/>
                        и карт двора, распознавать важные<br/>
                        подсказки, которые они дают<br/>
                        для анализа вашей ситуации.</p>
                    </section>
                </article>
                <article>
                    <section className='results__middle-block'>
                        <img src={Star} className='results__middle-block-img'></img>
                        <p className='results__middle-block-text'><b>Определите свой текущий этап<br/>
                        в отношениях и получите подсказки<br/>
                        от Вселенной</b></p>
                        <p className='results__middle-block-text'>Узнайте свой текущий этап<br/>
                        в отношениях, поймите послания<br/>
                        Вселенной, и как достичь гармонии<br/>
                        в личной жизни.</p>
                    </section>
                </article>
                <article>
                    <section className='results__middle-block'>
                        <img src={Star} className='results__middle-block-img'></img>
                        <p className='results__middle-block-text'><b>Получите целостное понимание<br/>
                         Таро в контексте отношений</b></p>
                        <p className='results__middle-block-text'>Узнаете, как глубинная мудрость<br/>
                         Таро помогает решать повседневные<br/>
                          и сложные вопросы в личной жизни,<br/>
                           раскрывая пути к гармонии<br/>
                            и счастью.</p>
                    </section>
                </article>
                <img src={PinkNuke} className='results__bottom-nuke-first absolute'/>
                <img src={PinkNuke} className='results__bottom-nuke-second absolute'/>
                <img src={People} className='results__bottom-people absolute'/>
                <img src={Lovers} className='results__bottom-lovers absolute'/>
                <img src={Sun} className='results__bottom-sun absolute'/>
                <img src={Empress} className='results__bottom-empress absolute'/>
                <img src={Emperor} className='results__bottom-emperor absolute'/>
            </div>
        </div>
    )
};
export default MarathonResults