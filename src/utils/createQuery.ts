import {TPizzaParams} from "../redux/reducers/data/type.ts";

export const createQuery = (params: TPizzaParams) => {
    const {
        search,
        itemsPerPage,
        category,
        sortBy,
        currentPage
    } = params;

    return [
        search ? `q=${search}` : '',
        category ? `category=${category}` : '',
        `_limit=${itemsPerPage}`,
        `_page=${currentPage}`,
        `&_sort=${sortBy}`
    ].join('&');
};
