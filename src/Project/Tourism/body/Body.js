import React, { useState, useEffect } from 'react';
import './Bodystyles.css';
import Beach from './beach.png';
import MalRes from './malres.png';
import MIMRes from './mimres.png';
import Canres from './canres.png';
import Dubaires from './dubaires.png';

function Body() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [Beach, MalRes, MIMRes,Canres,Dubaires];

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, [images.length]);

    const handleIndicatorClick = (index) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className='body'>
            <img src={images[currentImageIndex]} alt="beach" />
            <div className="overlay"></div>

            <div className="indicators">
                {images.map((image, index) => (
                    <span
                        key={index}
                        className={currentImageIndex === index ? "active" : ""}
                        onClick={() => handleIndicatorClick(index)}
                    ></span>
                ))}
            </div>
        </div>
    )
}

export default Body;
