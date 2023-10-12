import React from 'react';
import './App.css';
import loc from './App.js'

const Loc = () => {
    return (
        <div className='grid'>
            <button className='adjustW'></button>
            <div className='sector'>
                {loc &&
                    <>
                        <h4> Location DNE </h4>
                        <h6> No file detected</h6>
                    </>
                }
            </div>
            <button className='adjustW'></button>
        </div>
    );
}

export default Loc;