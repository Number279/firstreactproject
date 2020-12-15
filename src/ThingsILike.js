import React from 'react';

const ThingsILike = () => {

    const thingsILike = ['hanging out with my family', 'playing guitar', 'coding']

    const listItems = thingsILike.map(thing =>
        <li>{thing}</li>
        );
    return(
        <ul>
        {listItems}
        </ul>

    )

}

export default ThingsILike