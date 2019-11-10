import { useState } from 'react';

function useForceRerender() {
    const [, setState] = useState();

    return () => {
        setState((new Date()).getMilliseconds());
    };
}

export default useForceRerender;