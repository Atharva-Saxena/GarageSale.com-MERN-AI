import { useEffect, useRef } from 'react';

const useThrottle = (callback, delay) => {
    const lastRan = useRef(Date.now());
    const lastCalled = useRef(Date.now());

    const throttledFunction = (...args) => {
        if (Date.now() - lastRan.current >= delay) {
            callback(...args);
            lastRan.current = Date.now();
        }
    };

    useEffect(() => {
        const handler = (...args) => {
            if (Date.now() - lastCalled.current >= delay) {
                throttledFunction(...args);
                lastCalled.current = Date.now();
            }
        };

        return handler;
    }, [callback, delay]);

    return throttledFunction;
};

export default useThrottle;