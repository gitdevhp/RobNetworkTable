import React from 'react';
import './App.css'
import isPID from './App.js';

const PID = (props) => {
    var nowTick = props.tick;
    
    return (
        <div className='grid'>
            {isPID
            ? <h3>No PID Data</h3>
            : <h3>PID Found</h3>
            }
        </div>
    )
}

export default PID;