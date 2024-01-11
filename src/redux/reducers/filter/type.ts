export enum ESortProperty {
    PRICE_ASC = "price",
    PRICE_DESC = "price&_order=desc",
    TITLE_ASC = "title",
    TITLE_DESC = "title&_order=desc",
}

export type TSort = {
    name: string;
    sortProperty: ESortProperty;
};

export type TFilterState = {
    searchValue: string;
    activeCategory: number;
    sort: TSort;
    currentPage: number;
    itemsPerPage: number;
}