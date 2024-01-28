import {TPizzaParams} from "../redux/reducers/data/type.ts";

export const createQuery = (params: TPizzaParams) => {
    const {
        search,
        currentPage,
        itemsPerPage,
        category,
        sortBy
    } = params;

    return [
        search ? `q=${search}` : '',
        category ? `category=${category}` : '',
        `_page=${currentPage}`,
        `_limit=${itemsPerPage}`,
        `&_sort=${sortBy}`
    ].join('&');
};
