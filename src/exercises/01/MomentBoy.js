import React from 'react';
import moment from 'moment';

function MomentBoy() {
    return (
        <div>
            {moment().format('MMMM Do YYYY, h:mm:ss a')}
        </div>
    )
}

export default MomentBoy;
