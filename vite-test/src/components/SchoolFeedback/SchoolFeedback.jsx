import React, { useState, useEffect } from 'react';
import './SchoolFeedback.css';
import Arrow from '../../assets/img/Arrow.png';
import FeedbackData from '../../app/api/feedback/FeedbackData';
import Title from '../../assets/ui/Title/Title';
import useFeedbackSlider from '../../hooks/Slider/useSlider';
import useSwipe from '../../hooks/Slider/useSwipe';
import useWidthSlide from '../../hooks/Slider/useWidthSlide';

function SchoolFeedback() {
    const [feedbackData, setFeedbackData] = useState([]);
    const { slidesToShow, circlesToShow } = useWidthSlide();

    const {
        currentIndex,
        activeCircle,
        nextSlide,
        prevSlide,
        handleCircleClick,
    } = useFeedbackSlider(feedbackData, slidesToShow);

    const { handleTouchStart, handleTouchMove, handleTouchEnd } = useSwipe(nextSlide, prevSlide);

    return (
        <div
            className='feedback'
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
        >
            <FeedbackData setFeedbackData={setFeedbackData}/>
            <Title text="ОТЗЫВЫ УЧЕНИКОВ ШКОЛЫ"/>
            <div className='feedback__middle'>
                <article className='feedback__middle-arrow' onClick={prevSlide}>
                    <div className='feedback__middle-arrow-left'>
                        <img src={Arrow} className='feedback__middle-arrow-content'/>
                    </div>
                </article>
                <div className='feedback__middle-slider'>
                    {feedbackData.slice(currentIndex, currentIndex + slidesToShow).map((feedback) => (
                        <article key={feedback.id} className='feedback__middle-slider-block'>
                            <div className='feedback__slider-block-text'>
                                <h1 className='feedback__slider-block-name'>{feedback.name}</h1>
                                <p className='feedback__slider-block-endtime'>{feedback.time}</p>
                                <p className='feedback__slider-block-contents'><b>{feedback.contents}</b></p>
                                <p className='feedback__slider-block-contents'>{feedback.subtext}</p>
                            </div>
                        </article>
                    ))}
                </div>
                <article className='feedback__middle-arrow' onClick={nextSlide}>
                    <div className='feedback__middle-arrow-right'>
                    <img src={Arrow} className='feedback__middle-arrow-content-right'/>
                    </div>
                </article>
            </div>
            <div className='feedback__bottom-mini-slider'>
            {Array.from({ length: circlesToShow }).map((_, index) => (
                    <article
                        key={index}
                        className={`feedback__bottom-mini-circle ${activeCircle === index ? 'feedback__bottom-mini-circle-active' : ''}`}
                        onClick={() => handleCircleClick(index)}
                    ></article>
                ))}
            </div>
        </div>
    );
}

export default SchoolFeedback;