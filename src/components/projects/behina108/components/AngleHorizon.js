import React, { useEffect } from 'react';
import "../visual.scss"


const AngleHorizon = ({ adi }) => {

    const colorCalcul = (adi) => {
        //ratio of 0.5 for one number
        let green = 50;
        let blue = 50;
        if (adi == -100) {
            green = 100;
            blue = 100;
        }
        else if (adi == 100) {
            green = 0;
            blue = 0;
        }
        else if (adi > 100) {
            green += adi * 0.5;
            blue -= adi * 0.5;
        }
        else {
            green -= adi * 0.5;
            blue += adi * 0.5;
        }

        let result = `linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(35,246,104,1) 0%, rgba(30,193,104,1) ${green}%, rgba(26,0,255,1) ${blue}%)`
        return result;
    };

    useEffect(() => {
        const dot = document.querySelector('.dot');
        dot.style.background = colorCalcul(adi);
    });

    return (
        <div className='angleHorizonContainer'>
            <div className='label'>ADI</div>
            <div className='angleHorizon'>
                <div className="dot"></div>
            </div>
        </div>
    );
};

export default AngleHorizon;