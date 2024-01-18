import React, {useCallback, useEffect, useRef} from 'react';
import qs from 'qs';
import {useNavigate} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "../redux/hooks/useStore.ts";
import {
    filterSelector,
    setCategoryId,
    setCurrentPage
} from "../redux/reducers/filter/slice.ts";
import {fetchProductData} from "../redux/reducers/data/asyncActions.ts";
import {Layout} from "../components/Layout/Layout.tsx";
import {Header} from "../components/Header/Header.tsx";
import {Categories} from "../components/Categories/Categories.tsx";
import {ProductCard} from "../components/ProductCard/ProductCard.tsx";
import {Pagination} from "../components/UI/Pagination/Pagination.tsx";
import {Sort} from "../components/UI/Sort/Sort.tsx";

export const Home = () => {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    const {
        searchValue,
        itemsPerPage,
        activeCategory,
        currentPage,
        sort
    } = useAppSelector(filterSelector)
    const dispatch = useAppDispatch();
    const onChangeCategory = useCallback((id: number) => dispatch(setCategoryId(id)), []);
    const onChangePage = useCallback((page: number) => dispatch(setCurrentPage(page)), []);

    useEffect(() => {
        const sorting = sort.sortProperty === 'price_asc' ? 'price_desc' : 'price_desc';

        dispatch(fetchProductData({
            searchValue,
            itemsPerPage,
            activeCategory,
            currentPage,
            sortBy: sorting,
        }));
    }, [searchValue, itemsPerPage, activeCategory, currentPage, sort.sortProperty]);

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                searchValue,
                currentPage,
                activeCategory,
            })
            navigate(`?${queryString}`)
        }

        isMounted.current = true;
    }, [searchValue, currentPage, activeCategory, navigate]);


    return (
        <Layout>
            <Header/>
            <Categories activeCategory={activeCategory}
                        onClickCategory={onChangeCategory}/>
            <Sort/>
            <ProductCard/>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </Layout>
    );
};
