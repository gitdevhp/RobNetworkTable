import Location from './info-grids/location';
import PID from './info-grids/PID';
import './App.css';
import React, { useState } from 'react';

const Main = (props) => {
  const [components, setComponents] = useState([<Location ticks={props.tick}/>, <PID ticks={props.tick}/>]);

  const handleDragStart = (e, index) => {
    e.dataTransfer.setData('index', index);
  };

  const handleDrop = (e, dropIndex) => {
    e.preventDefault();
    const dragIndex = e.dataTransfer.getData('index');
    const newItems = [...items];
    const [draggedItem] = newItems.splice(dragIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);
    setItems(newItems);
    
  };

  return (
    <div className='grid-flex'>
      {components.map((item, index) => (
        <div
          key={index}
          draggable
          onDragStart={(e) => handleDragStart(e, index)}
          onDragOver={(e) => e.preventDefault()}
          onDrop={(e) => handleDrop(e, index)}
        >
          {item}
        </div>
      ))}
    </div>
  );
};

export default Main;