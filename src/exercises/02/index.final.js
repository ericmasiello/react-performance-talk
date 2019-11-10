import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import useForceRerender from '../useForceRerender';

function expensiveRandomNumber(seed) {
    for (let i = 0; i < 1000000000; i++) {}
    return Math.random(seed);
}

function Exercise() {
    const rerender = useForceRerender();
    const [seed, setSeed] = useState(1);
    const number = useMemo(() => expensiveRandomNumber(seed), [seed]);

    return (
        <>
            <Link to="/">← Home</Link>
            <h1>Exercise 2</h1>
            <button onClick={rerender}>Force Rerender</button>
            <form onSubmit={(event) => {
                event.preventDefault();
                setSeed(Number(event.target.elements[0].value));
            }}>
                <label>
                    Seed: 
                    <input defaultValue={seed} />
                </label>
                <button type="submit">Update</button>
            </form>

            <p>Random number {number}</p>
        </>
    );
}

export default Exercise;