import React, { useState } from "react";
import './QuestionBlock.css';
import Arrow from '../../../assets/img/BlackArrow.png';
import useQuestionBlock from '../../../hooks/QuestionBlock/useQuestionBlock';
import Form from "../../../assets/ui/Form/Form";

function QuestionBlock() {
    const {
        currentQuestionIndex,
        currentQuestion,
        checkedOptions,
        handleBackQuestion,
        handleCheckboxChange,
        totalQuestions,
        handleRestartQuestion,
    } = useQuestionBlock();

    const [isButtonPressed, setIsButtonPressed] = useState(false);

    const handleButtonClick = () => {
        setIsButtonPressed(true);
        handleBackQuestion();

        setTimeout(() => {
            setIsButtonPressed(false);
        }, 200);
    };

    return (
        <article className="question__block">
            <div className="question__block-left">
                {currentQuestionIndex <= 3 ? (
                <> 
                <p className="question__block-left-number">{currentQuestionIndex + 1} из {totalQuestions} вопросов</p>
                <p className="question__block-left-title">{currentQuestion.question}</p>
                <p className="question__block-left-choose">Выберите один вариант</p>
                <article className="question__block-left-list">
                    {currentQuestion.options.map((option, index) => (
                        <div key={index} className="question__block-left-flex">
                            <label className="custom-checkbox">
                                <input 
                                    onChange={handleCheckboxChange(index)} 
                                    type="checkbox" 
                                    className="question__block-left-checkbox" 
                                    checked={checkedOptions[index] || false}
                                />
                                <span className="checkmark"></span>
                            </label>
                            <p className="question__block-left-question"><b>{option}</b></p>
                        </div>
                    ))}
                </article>
                {(currentQuestionIndex === 1 || currentQuestionIndex === 2 || currentQuestionIndex === 3) && 
                <div 
                    className="question__block-left-button" 
                    onClick={handleButtonClick} 
                    style={{ backgroundColor: isButtonPressed ? '#BE9658' : '' }}
                >
                    <div className="question__button-content">
                        <img src={Arrow} className="question__button-img"/>
                        <p className="question__button-text"><b>Назад</b></p>
                    </div>
                </div>
                }
                </> 
            ) : (
                <Form showCloseButton={false} showText={true} handleRestartQuestion={handleRestartQuestion}/>
            )}
            </div>

            <div className="question__right">
                {currentQuestionIndex <= 3 ? (
                    <div className="question__right-cards"></div>
                ) : (
                    <div className="question__right-lovers">
                    <div className="question__right-people">
                    <div className="question__right-sun"></div>
                    </div>
                    </div>
                )}
            </div>
        </article>
    );
}

export default QuestionBlock;