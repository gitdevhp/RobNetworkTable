import React from 'react';
import './App.css';
import isLoc from './App.js';

const Location = (props) => {
    var nowTick = props.tick;
    
    return (
        <div className="grid">
            {isLoc ?
                <h3>No Location Detected</h3>
                :<h3>Location Detected</h3>
            }
        </div>
    )
}

export default Location;