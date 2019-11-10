import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MomentBoy from './MomentBoy';

function Exercise() {
    const [show, setShow] = useState(false);
    return (
        <React.Fragment>
            <Link to="/">← Home</Link>
            <h1>Exercise 1</h1>
            <button onClick={() => setShow(true)}>Show</button>
            {show && <MomentBoy /> }
        </React.Fragment>
    )
}

export default Exercise;