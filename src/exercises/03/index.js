// TODO: React.memo() example

import React, { useState } from 'react';
import useForceRerender from '../useForceRerender';

function Name(props) {
    return (
        <p>Your name: {props.first} {props.last}</p>
    );
}

function Description(props) {
    return (
        <p>Your description: {props.description}</p>
    );
}

function Exercise() {
    const [fields, setFields] = useState({ first: '', last: '', description: '' });
    const rerender = useForceRerender();

    return (
        <>
            <h1>Exercise 3</h1>
            <button onClick={rerender}>Force Rerender</button>
            <form onSubmit={(event) => {
                event.preventDefault();
                setFields({
                    first: event.target.elements[0].value,
                    last: event.target.elements[1].value,
                    description: event.target.elements[2].value,
                });
            }}>
                <label>
                    First name: 
                    <input name="first" defaultValue={fields.first} />
                </label>
                <br />
                <label>
                    Last name: 
                    <input name="last" defaultValue={fields.last} />
                </label>
                <br />
                <label>
                    Description: 
                    <textarea name="description" defaultValue={fields.description} />
                </label>
                <br />
                <button>Update</button>
            </form>

            <hr />
            <Name first={fields.first} last={fields.last} />
            <Description description={fields.description} />
        </>
    );
}

export default Exercise;