import {useEffect, useState} from "react";

export const useDebounce = <T>(initialValue: T, delay: number) => {
    const [debounceValue, setDebounceValue] = useState<T>(initialValue);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setDebounceValue(initialValue)
        }, delay);

        return () => clearTimeout(timeout)
    }, [initialValue, delay]);

    return debounceValue
}