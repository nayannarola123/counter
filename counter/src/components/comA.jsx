import './comA.css'
import React from 'react';
import { useState } from 'react';

const Counter = () => {

    const [count, setCount] = useState(0);

    const handleInc = () => {

        setCount(count + 1);
    }

    const handleDec = () => {

        if (count > 0) {
            setCount(count - 1);
        }

    }

    return (
        <div className='main-box'>
            <div className="counter">
                <h1>Counter </h1>
                <div className="box1 d-flex items-center text-center justify-center">
                    <h1>
                        {count}
                    </h1>
                </div>
                <div className="btn d-flex">
                    <button onClick={handleInc}>+</button>
                    <button onClick={handleDec}>-</button>
                </div>
            </div>
        </div>
    );

}

export default Counter;