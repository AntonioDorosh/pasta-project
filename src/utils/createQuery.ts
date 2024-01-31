import { TPizzaParams } from '../redux/reducers/data/type.ts';

export const createQuery = (params: TPizzaParams) => {
    const API_URL = 'http://localhost:8000/products?';

    const { search, itemsPerPage, category, sortBy, currentPage } = params;

    return [
        API_URL,
        search ? `q=${search}` : '',
        category ? `category=${category}` : '',
        `_limit=${itemsPerPage}`,
        `_page=${currentPage}`,
        `&_sort=${sortBy}`,
    ].join('&');
};
