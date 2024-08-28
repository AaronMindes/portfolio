import React, { useEffect } from 'react';
import "../visual.scss";

const HeightElement = ({ altitude }) => {

    const calcul = (altitude, elContainer) => {
        return (altitude * elContainer) / 3000 + 'px';
    };

    useEffect(() => {
        const elContainer = document.querySelector('.container');
        const barValue = document.querySelector('.barValue');
        barValue.style.bottom = calcul(altitude, elContainer.clientHeight - 10);
        barValue.classList.add('horizTranslate');
    }, [altitude]);

    return (
        <div className='HightElementContainer'>
            <div style={{margin:"50px"}}>Altitude</div>
            <div className='container'>
                <p id='size-3000'>3000</p>
                <p id='size-2000'>2000</p>
                <p id='size-1000'>1000</p>
                <p id='size-0'>0</p>
                <div className='barValue'></div>
            </div>
        </div>
    );
};

export default HeightElement;
