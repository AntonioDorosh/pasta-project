export const sortProperty = {
    RATING_ASC: "rating",
    RATING_DESC: "rating&_order=desc",
    PRICE_ASC: "price",
    PRICE_DESC: "price&_order=desc",
};

export type sortPropertyType = typeof sortProperty[keyof typeof sortProperty];

export type TSort = {
    name: string;
    sortProperty: sortPropertyType;
};

export type TFilterState = {
    searchValue: string;
    activeCategory: number;
    sort: TSort;
    currentPage: number;
    itemsPerPage: number;
}