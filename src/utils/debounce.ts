export const debounce = (param: (value: string) => void, number: number) => {
    let timeout: number;
    return (value: string) => {
        clearTimeout(timeout);
        timeout = setTimeout(() => param(value), number);
    };
};