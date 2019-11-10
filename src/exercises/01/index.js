import React, { useState } from 'react';
import MomentBoy from './MomentBoy';

function Exercise() {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <h1>Exercise 1</h1>
            <button onClick={() => setShow(true)}>Show</button>
            {show && <MomentBoy /> }
        </React.Fragment>
    )
}

export default Exercise;