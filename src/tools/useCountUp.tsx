import { useEffect, useState } from 'react';

function easeOut(t: number): number {
    return t === 1 ? 1 : 1 - Math.pow(2, -10 * t);
}

const frameRate = 1000 / 60;

export default function useCountUp(end: number, start = 0, duration = 1000) {
    const [count, setCount] = useState<number>(start);
    const totalFrame = Math.round(duration / frameRate);

    useEffect(() => {
        let currentNumber = start;
        const counter = setInterval(() => {
            const progress = easeOut(++currentNumber / totalFrame);
            setCount(Math.round(end * progress));

            if (progress === 1) {
                clearInterval(counter);
            }
        }, frameRate);
    }, [end, start, totalFrame]);

    return count;
}
