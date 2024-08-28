import React, { useEffect, useState } from 'react';
import HeightElement from './components/HeightElement';
import Compass from './components/Compass';
import AngleHorizon from './components/AngleHorizon';
import "./visual.scss"

const Visual = () => {
    const [data, setData] = useState({
        altitude: 0,
        HIS: 0,
        ADI: 0
    });

    const generateRandomData = () => {
        return {
            altitude: Math.floor(Math.random() * 3000) + 1,
            HIS: Math.floor(Math.random() * 300) + 1,
            ADI: Math.floor(Math.random() * 100) + 1
        };
    };

    useEffect(() => {
        setData(generateRandomData());

        const intervalId = setInterval(() => {
            setData(generateRandomData());
        }, 3000);

        // Cleanup the interval on component unmount
        return () => clearInterval(intervalId);
    }, []);

    return (
        <div className='visual'>
           
            <div className='visualContent'>
                <HeightElement altitude={data.altitude} />
                <Compass his={data.HIS} />
                <AngleHorizon adi={data.ADI} />
            </div>
        </div>
    );
};

export default Visual;
