import React, {useCallback, useRef, useState} from 'react';
import {InputStyled} from "./SearchBar.styled.tsx";
import Flex from "../../../styles/Flex/Flex.ts";
import Button from "../Button/Button.tsx";
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {setSearchValue} from "../../../redux/reducers/filter/slice.ts";
import {debounce} from "../../../utils";

const SearchBar = () => {
    const inputRef = useRef<HTMLInputElement>(null);
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    // eslint-disable-next-line react-hooks/exhaustive-deps
    const updateSearchValue = useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value));
        }, 500),
        []
    );

    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(e.target.value);
        updateSearchValue(e.target.value);
    };

    const clearValue = () => {
        dispatch(setSearchValue(''));
        inputRef.current!.value = '';
        dispatch(setSearchValue(''))
    };


    return (
        <Flex>
            <InputStyled ref={inputRef} value={value} onChange={onChangeInput}/>
            <Button onClick={clearValue}>
                <img src="src/assets/trash.svg" alt="trash"/>
            </Button>
        </Flex>
    );
};

export default SearchBar;