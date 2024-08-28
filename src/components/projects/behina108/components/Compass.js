import React, { useEffect } from 'react';
import "../visual.scss"

const Compass = ({ his }) => {

    useEffect(() => {
        const elCompass = document.querySelector('.dotDiv');
        elCompass.style.transform = `rotate(${-his}deg)`;
        elCompass.classList.add('horizTranslate');
    });

    return (
        <div className='compassContainer'>
            <div style={{margin:"50px"}}>
                HIS
            </div>
            <div className='compass'>
                <div className='arrow'><span>&#8593;</span></div>
                <div className='dotDiv'>
                    <div className='height'>
                        <p>0</p>
                        <p>180</p>
                    </div>
                    <div className='width'>
                        <p>270</p>
                        <p>90</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Compass;