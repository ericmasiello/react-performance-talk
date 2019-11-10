import React, { useState, useEffect } from 'react';

const MomentBoy = React.lazy(() => import(/* webpackPrefetch: true */ './MomentBoy'))

function Exercise() {
    const [show, setShow] = useState(false);

    return (
        <>
            <h1>Exercise 1</h1>
            <button onClick={() => setShow(true)}>Show</button>
            <React.Suspense fallback={<div>Loading...</div>}>
                {show && <MomentBoy /> }
            </React.Suspense>
        </>
    )
}

export default Exercise;