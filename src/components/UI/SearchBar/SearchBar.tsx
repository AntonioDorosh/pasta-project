import {useAppDispatch, useAppSelector} from "../../../redux/hooks/useStore.ts";
import React, {ChangeEvent, useCallback} from "react";
import {debounce} from "../../../utils";
import {setSearchValue} from "../../../redux/reducers/filter/slice.ts";
import Flex from "../../../styles/Flex/Flex.ts";
import {InputStyled} from "./SearchBar.styled.tsx";
import {Button} from "../Button/Button.tsx";

export const SearchBar = () => {
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(state => state.filter.searchValue);

    const updateSearchValue = useCallback(
        debounce((searchValue: string) => {
            dispatch(setSearchValue(searchValue));
        }, 50),
        []
    );

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const targetValue = e.target.value;

        if (!targetValue.trim()) {
            dispatch(setSearchValue(''));
            return;
        }

        updateSearchValue(targetValue);
    };

    const clearValue = () => {
        dispatch(setSearchValue(''));
    };

    return (
        <Flex>
            <InputStyled value={searchValue}
                         onChange={onChangeHandler}/>
            {searchValue && <Button onClick={clearValue}>
                <img src="src/assets/trash.svg" alt="trash"/>
            </Button>}
        </Flex>
    );
};