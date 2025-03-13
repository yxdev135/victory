import { useState, useEffect } from 'react';

const useFeedbackSlider = (feedbackData, slidesToShow) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [activeCircle, setActiveCircle] = useState(0);

    useEffect(() => {
        setActiveCircle(Math.floor(currentIndex / slidesToShow));
    }, [currentIndex, slidesToShow]);

    const nextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + slidesToShow) % feedbackData.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - slidesToShow + feedbackData.length) % feedbackData.length);
    };

    const handleCircleClick = (index) => {
        setCurrentIndex(index * slidesToShow);
    };

    return {
        currentIndex,
        activeCircle,
        nextSlide,
        prevSlide,
        handleCircleClick,
    };
};

export default useFeedbackSlider;