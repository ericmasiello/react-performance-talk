import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const loadComponent = () => import('./MomentBoy');
const MomentBoy = React.lazy(loadComponent)

function Exercise() {
    const [show, setShow] = useState(false);

    useEffect(() => {
        loadComponent();
    }, [])

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