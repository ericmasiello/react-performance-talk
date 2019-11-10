import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const MomentBoy = React.lazy(() => import(/* webpackPrefetch: true */ './MomentBoy'))

function Exercise() {
    const [show, setShow] = useState(false);

    return (
        <>
            <Link to="/">← Home</Link>
            <h1>Exercise 1</h1>
            <button onClick={() => setShow(true)}>Show</button>
            <React.Suspense fallback={<div>Loading...</div>}>
                {show && <MomentBoy /> }
            </React.Suspense>
        </>
    )
}

export default Exercise;