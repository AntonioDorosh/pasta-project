import React, {ChangeEvent, memo} from 'react';
import {useAppDispatch, useAppSelector} from "../../../redux/hooks/useStore.ts";
import {filterSelector, setSort} from "../../../redux/reducers/filter/slice.ts";
import {
    sortProperty,
    sortPropertyType
} from "../../../redux/reducers/filter/type.ts";
import {OptionStyled, SelectStyled} from "./Sort.styled.tsx";

type SortItem = {
    name: string;
    sortProperty: sortPropertyType
}

const sortList: SortItem[] = [
    {name: 'rating (DESC)', sortProperty: sortProperty.RATING_DESC},
    {name: 'rating (ASC)', sortProperty: sortProperty.RATING_ASC},
    {name: 'price (ASC)', sortProperty: sortProperty.PRICE_ASC},
    {name: 'price (DESC)', sortProperty: sortProperty.PRICE_DESC},
];

export const Sort = memo(() => {
    const dispatch = useAppDispatch();
    const {sort} = useAppSelector(filterSelector);
    const handleSortChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newSortProperty = event.target.value as sortPropertyType;
        const newSortItem = sortList.find(item => item.sortProperty === newSortProperty);
        if (newSortItem) {
            dispatch(setSort(newSortItem));
        }
    };

    return (
        <>
            <b>Сортировка по:</b>
            <SelectStyled value={sort.sortProperty} onChange={handleSortChange}>
                {sortList.map(({sortProperty, name}, i) => (
                    <OptionStyled key={i} value={sortProperty}
                                  $isActive={sortProperty === sort.sortProperty}>
                        {name}
                    </OptionStyled>
                ))}
            </SelectStyled>
        </>
    );
});
