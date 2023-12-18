import React from 'react';

const Search = React.forwardRef((props, ref) => {
    return (
        <input className='form-control me-2" type="search"' ref={ref} {...props}/>
    );
});

export default Search;