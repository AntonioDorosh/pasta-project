import React, {ChangeEvent, useCallback, useState} from 'react';
import {InputStyled} from "./SearchBar.styled.tsx";
import Flex from "../../../styles/Flex/Flex.ts";
import Button from "../Button/Button.tsx";
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {setSearchValue} from "../../../redux/reducers/filter/slice.ts";
import {debounce} from "../../../utils";

const SearchBar = () => {
    const dispatch = useAppDispatch();
    const [value, setValue] = useState('');

    const updateSearchValue = useCallback(
        debounce((value: string) => {
            dispatch(setSearchValue(value));
        }, 500),
        []
    );

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const regex = /^[a-z]*$/i;
        const isValid = regex.test(e.target.value);
        const value = e.target.value;

        if (!isValid) {
            alert('Введите пожалуйста только буквы');
        } else {
            setValue(value);
            updateSearchValue(value);
        }
    };

    const clearValue = () => {
        dispatch(setSearchValue(''));
        setValue('')
    };

    return (
        <Flex>
            <InputStyled value={value} onChange={onChangeHandler}/>
            <Button onClick={clearValue}>
                <img src="src/assets/trash.svg" alt="trash"/>
            </Button>
        </Flex>
    );
};

export default SearchBar;