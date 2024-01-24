import React, {ChangeEvent, useCallback, useState} from 'react';

import Flex from "../../../styles/Flex/Flex.ts";
import {InputStyled} from "./SearchBar.styled.tsx";
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {setSearchValue} from "../../../redux/reducers/filter/slice.ts";
import {debounce} from "../../../utils";
import {Button} from "../Button/Button.tsx";

export const SearchBar = () => {
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
        const targetValue = e.target.value;

        if (!isValid) {
            alert('Введите пожалуйста только буквы');
        } else {
            setValue(targetValue);
            updateSearchValue(targetValue);
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
