import React, {useRef} from 'react';
import {useAppDispatch} from "../../hooks/useStore.ts";
import {filterByName} from "../../redux/reducers/data/slice.ts";
import {InputStyled} from "./SearchBar.styled.tsx";
import Flex from "../../styles/Flex/Flex.ts";
import Button from "../UI/Button/Button.tsx";

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const filterInput = () => {
        const debounce = setTimeout(() => {
            const value = inputRef.current?.value;
            dispatch(filterByName(value))
        }, 1000);

        return () => clearTimeout(debounce);
    };

    const clearValue = () => {
        inputRef.current!.value = '';
        dispatch(filterByName(''))
    };


    return (
        <Flex>
            <InputStyled ref={inputRef} onChange={filterInput}/>
            <Button onClick={clearValue}>
                <img src="src/assets/trash.svg" alt="trash"/>
            </Button>
        </Flex>
    );
};

export default SearchBar;