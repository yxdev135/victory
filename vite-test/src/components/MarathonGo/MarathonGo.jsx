import React from "react";
import './MarathonGo.css'
import Title from "../../assets/ui/Title/Title";
import GoToCircles from "../../assets/ui/GoToCirlces/GoToCircles";

function MarathonGo() {
    return(
        <div className="go">
            <div className="go__header-left-nuke"></div>
            <div className="go__header-bottom-nuke"></div>
            <div className="go__header-right-nuke"></div>
            <div className="go__header-lovers"></div>
            <div className="go__header-sun"></div>
            <div className="go__header-empress"></div>
            <div className="go__header-emperor"></div>
            <div className="go__header-world"></div>
            <div className="go__header">
            <Title text="НАЧНИТЕ ОСВАИВАТЬ ТАРО УЖЕ СЕГОДНЯ"/>
            <GoToCircles text="Иду на марафон" subtext="Бонус за регистрацию:" boldtext="«Пособие для начинающего таролога»"/>
            </div>

        </div>
    )
};
export default MarathonGo