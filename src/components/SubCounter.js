import React from 'react';
import './Alone.css';

const SubCounter = (props) => {
    return (
        <div className="SubAlone">
            <div>SubCounter Component</div>
            <button className="Button" onClick={() => props.add(999)}>
                Add 999
            </button>
        </div>
    );
};

export default SubCounter;
