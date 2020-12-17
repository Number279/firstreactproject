import React, { useEffect, useState } from 'react';

const Example = () => {
    //count is the getter, count invoke the number used in useState
    //setCount is the setter
    const [count, setCount] = useState(0);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    });
    
    return (
       <div>
           <p>You clicked {count} times.</p>
           <button onClick={() => setCount(count + 1)}>
               Click Me!
           </button>
       </div>

    )
};

export default Example