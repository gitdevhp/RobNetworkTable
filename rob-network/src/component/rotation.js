import React from 'react';
import './App.css';
import rot from './App.js'

const Rot = () => {
    return (
        <div className='sector'>
            {rot &&
            <>
                <h4> Rotation DNE </h4>
                <h6> No file detected</h6>
            </>
            }
        </div>
    );
}

export default Rot;