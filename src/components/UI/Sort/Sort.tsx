import React, {useState} from 'react';
import {useAppDispatch} from "../../../redux/hooks/useStore.ts";
import {setSort} from "../../../redux/reducers/filter/slice.ts";
import {
    sortProperty,
    sortPropertyType
} from "../../../redux/reducers/filter/type.ts";
import {OptionStyled, SelectStyled} from "./Sort.styled.tsx";

type SortItem = {
    name: string;
    sortProperty: sortPropertyType
}

type SortProps = {
    sort: SortItem;
}

export const Sort: React.FC<SortProps> = React.memo(({sort}) => {
    const sortList: SortItem[] = [
        {name: 'rating (DESC)', sortProperty: sortProperty.RATING_DESC},
        {name: 'rating (ASC)', sortProperty: sortProperty.RATING_ASC},
        {name: 'price (DESC)', sortProperty: sortProperty.PRICE_DESC},
        {name: 'price (ASC)', sortProperty: sortProperty.PRICE_ASC},
    ];
    const dispatch = useAppDispatch();
    const [selectedSort, setSelectedSort] = useState(sort.sortProperty);
    const handleSortChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        const newSort = event.target.value as sortPropertyType
        setSelectedSort(newSort);
        dispatch(setSort({name: "", sortProperty: newSort}));
    };

    return (
        <>
            <b>Сортировка по:</b>
            <SelectStyled value={selectedSort} onChange={handleSortChange}>
                {sortList.map((obj, i) => (
                    <OptionStyled key={i} value={obj.sortProperty}
                                  $isActive={obj.sortProperty === selectedSort}>
                        {obj.name}
                    </OptionStyled>
                ))}
            </SelectStyled>
        </>
    );
});
