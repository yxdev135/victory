import { useState } from "react";
import questions from '../../../consts/Questions/Questions';

const useQuestionBlock = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [checkedOptions, setCheckedOptions] = useState({}); 

    const handleNextQuestion = () => {
        setTimeout(() => {
            if (currentQuestionIndex < questions.length) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setCheckedOptions({});
            }
        }, 200);
    };

    const handleRestartQuestion = () => {
        setCurrentQuestionIndex(0);
        console.log(999)
    }

    const handleBackQuestion = () => {
        if (currentQuestionIndex > 0) {
            setCurrentQuestionIndex(currentQuestionIndex - 1);
        }
    };

    const handleCheckboxChange = (index) => (event) => {
        setCheckedOptions((prev) => ({
            ...prev,
            [index]: event.target.checked,
        }));
        handleNextQuestion();
    };

    const currentQuestion = questions[currentQuestionIndex];

    return {
        currentQuestionIndex,
        currentQuestion,
        checkedOptions,
        handleNextQuestion,
        handleBackQuestion,
        handleCheckboxChange,
        handleRestartQuestion,
        totalQuestions: questions.length,
    };
};

export default useQuestionBlock;