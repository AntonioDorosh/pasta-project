export const SortPropertyObj = {
    price_asc: 'asc',
    price_desc: 'desc',
    name_asc: 'name_asc',
    name_desc: 'name_desc',
};

export type SortPropertyObj = typeof SortPropertyObj[keyof typeof SortPropertyObj];

export type Sort = {
    name: string;
    sortProperty: SortPropertyObj;
};


export type TFilterState = {
    searchValue: string;
    activeCategory: number;
    sort: Sort;
    currentPage: number;
    itemsPerPage: number;
}