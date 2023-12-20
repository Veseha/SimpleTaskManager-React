import React from 'react';

const Color = ({color, handleColorChange, ...props}) => {
    return (
        <div>
            <div
                className="color-option"
                style={{backgroundColor: color}}
                onClick={() => handleColorChange(color)}
            ></div>
        </div>
    );
};

export default Color;