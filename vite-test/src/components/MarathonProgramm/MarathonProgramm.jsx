import React from "react";
import './MarathonProgramm.css'
import Card1 from '../../assets/img/Card1.png'
import Card2 from '../../assets/img/Card2.png'
import Card3 from '../../assets/img/Card3.png'
import { useState } from 'react';
import MarathonCard1 from './MarathonCards/CardDay1/MarathonCard1';
import MarathonCard2 from './MarathonCards/CardDay2/MarathonCard2';
import MarathonCard3 from './MarathonCards/CardDay3/MarathonCard3';
import Title from "../../assets/ui/Title/Title";

function MarathonProgramm() {
    const [isRolled, setIsRolled] = useState([false, false, false]);
    
    const handleMouseIn = (index) => {
        setIsRolled(prev => {
            const newRolled = [...prev];
            newRolled[index] = true;
            return newRolled;
        });
    }

    const handleMouseOut = (index) => {
        setIsRolled(prev => {
            const newRolled = [...prev];
            newRolled[index] = false;
            return newRolled;
        });
    }

    const handleMouseDown = (index) => {
        setIsRolled(prev => {
            const newRolled = [...prev];
            newRolled[index] = !newRolled[index];
            return newRolled;
        });
    }

    return (
        <div className='programm__header'>
            <Title text="ПРОГРАММА МАРАФОНА"/>
            <div className='programm__middle'>
                {[0, 1, 2].map((index) => (
                    <article 
                        key={index} 
                        onMouseEnter={() => handleMouseIn(index)} 
                        onMouseLeave={() => handleMouseOut(index)} 
                        onClick={() => handleMouseDown(index)}
                    >
                        <div className='programm__middle-card-days'>
                            {!isRolled[index] && (
                                <img src={[Card1, Card2, Card3][index]} className='programm__middle-card' alt={`Card ${index + 1}`} />
                            )}
                            {isRolled[index] && (
                                index === 0 ? <MarathonCard1 /> :
                                index === 1 ? <MarathonCard2 /> :
                                <MarathonCard3 />
                            )}
                            <p className='programm__middle-card-text'>{index + 1} ДЕНЬ</p>
                        </div>
                    </article>
                ))}
            </div>
        </div>
    )
};

export default MarathonProgramm;