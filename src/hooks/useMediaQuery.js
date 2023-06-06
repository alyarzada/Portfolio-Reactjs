import { useEffect, useState } from "react";
export const useMediaQuery = (size) => {
    const [matches, setMatches] = useState(() => {
        return window.matchMedia(`(min-width: ${size}px)`);
    });
    const listener = () => {
        const media = window.matchMedia(`(min-width: ${size}px)`);
        setMatches(media.matches);
    };
    useEffect(() => {
        window.addEventListener("resize", listener);
        return () => {
            window.removeEventListener("resize", listener);
        };
    }, []);
    return matches;
};
