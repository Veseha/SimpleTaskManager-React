import React from 'react';

interface ColorProps {
    color: string;
    handleColorChange: (color: string) => void;
    [key: string]: any;
}

const Color: React.FC<ColorProps> = ({color, handleColorChange, ...props}) => {
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
