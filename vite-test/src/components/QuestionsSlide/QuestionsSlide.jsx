import React from "react";
import './QuestionsSlide.css'
import Title from "../../assets/ui/Title/Title";
import QuestionBlock from "./QuestionBlock/QuestionBlock";

function QuestionsSlide() {
    return(
        <div className="questions">
            <Title text="Ответьте на 4 вопроса"/>
            <p className="question__header-text"> Готовы ли вы к изменениям в отношениях?</p>
            <div className="questions__middle">
                <QuestionBlock/>
            </div>
        </div>
    )
};
export default QuestionsSlide