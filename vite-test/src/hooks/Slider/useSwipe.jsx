import { useRef } from 'react';

const useSwipe = (onSwipeLeft, onSwipeRight) => {
    const touchStartX = useRef(0);
    const touchEndX = useRef(0);

    const handleTouchStart = (e) => {
        touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
        touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
        if (touchStartX.current - touchEndX.current > 50) {
            onSwipeLeft();
        } else if (touchEndX.current - touchStartX.current > 50) {
            onSwipeRight();
        }
    };

    return {
        handleTouchStart,
        handleTouchMove,
        handleTouchEnd,
    };
};

export default useSwipe;