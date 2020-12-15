import React from 'react';

const DynamicText = (props) => {
    return(
    <div>
        <input
        type="text"
        value={props.value}
        onChange={event => console.log("Value Changed!")}
        />
        <p>place for errors</p>
    </div>
    );
};

export default DynamicText;