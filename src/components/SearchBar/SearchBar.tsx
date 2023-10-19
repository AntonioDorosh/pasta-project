import React, {useRef} from 'react';
import {useAppDispatch} from "../../hooks/useStore.ts";
import {filterByName} from "../../redux/reducers/data/slice.ts";

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const filterInput = () => {
        const debounce = setTimeout(() => {
            dispatch(filterByName(inputRef.current?.value))
        }, 1000);

        return () => clearTimeout(debounce);
    };


    return (
        <>
            <input type="text" ref={inputRef} onChange={filterInput}/>
        </>
    );
};

export default SearchBar;