import React, {useState} from 'react';

const Counter = () => {
    const  [counter, setCounter] = useState(0);
    const [likes, setlikes] = useState(0);
    const [value, setvalue] = useState('f');


    function plus(){
        setlikes(likes + 1);
    }
    function minus(){
        setlikes(likes - 1);
    }
    return (
        <div>
            <h1>{likes}</h1>
            <h2>{value}</h2>
            <button onClick={plus}>Plus</button>
            <button onClick={minus}>Minus</button>
            <input
                type="text"
                value={value}
                onChange={event => setvalue(event.target.value)}
            />

        </div>
    );
};

export default Counter;