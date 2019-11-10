import React, { useState } from 'react';

const MomentBoy = React.lazy(() => import('./MomentBoy'))

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