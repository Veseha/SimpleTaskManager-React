import React from 'react';

const Sort = ({options, defaultValue, value, onChange}) => {
    return (

        <div>
          <select
              className=" dropdown-toggle  form-select  " style={{width: "10rem" }}
          value={value}
          onChange={event => onChange(event.target.value)}
          >
              <option disabled value=''>{defaultValue}</option>
              {options.map(option =>
                  <option key={option.value} value={option.value}>
                      {option.name}
                  </option>
              )}
              {/*<option value='name'>By name</option>*/}
              {/*<option value='date'>By Date</option>*/}
              {/*<option value='author'>By author</option>*/}
          </select>
        </div>

    );
};

export default Sort;