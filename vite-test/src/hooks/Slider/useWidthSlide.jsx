import { useState, useEffect } from 'react';

const useWidthSlide = () => {
    const [slidesToShow, setSlidesToShow] = useState(3);
    const [circlesToShow, setCirclesToShow] = useState(3);

    useEffect(() => {
        const updateSlidesToShow = () => {
            if (window.innerWidth < 768) {
                setSlidesToShow(1);
                setCirclesToShow(9);
            } else {
                setSlidesToShow(3);
                setCirclesToShow(3);
            }
        };

        updateSlidesToShow();
        window.addEventListener('resize', updateSlidesToShow);

        return () => {
            window.removeEventListener('resize', updateSlidesToShow);
        };
    }, []);

    return {slidesToShow,circlesToShow};
};

export default useWidthSlide;