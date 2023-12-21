import React from 'react';

const Unclick = (props) => {
    return (
        <div>
            <label className='unclick-place' onMouseDown={() => props.func(false)}></label>
        </div>
    );
};

export default Unclick;