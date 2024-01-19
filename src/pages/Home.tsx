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
import {productSelector} from "../redux/reducers/data/slice.ts";
import {EStatus} from "../redux/reducers/data/type.ts";

export const Home = () => {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    const {
        searchValue,
        itemsPerPage,
        activeCategory,
        currentPage,
        sort,
    } = useAppSelector(filterSelector)
    const dispatch = useAppDispatch();
    const onChangeCategory = useCallback((id: number) => dispatch(setCategoryId(id)), []);
    const onChangePage = useCallback((page: number) => dispatch(setCurrentPage(page)), []);
    const {status} = useAppSelector(productSelector);

    const getPizzas = async () => {
        const sortBy = sort.sortProperty.replace('-', '');
        const order = sort.sortProperty.includes('-') ? 'asc' : 'desc';
        const category = activeCategory > 0 ? String(activeCategory) : '';
        const search = searchValue;

        dispatch(
            fetchProductData({
                sortBy,
                order,
                category,
                search,
                currentPage,
                itemsPerPage
            }),
        );

        window.scrollTo(0, 0);
    };

    useEffect(() => {
        if (isMounted.current) {
            const queryString = qs.stringify({
                searchValue,
                currentPage,
                activeCategory,
            })
            navigate(`?${queryString}`)
        }
        getPizzas().catch((e) => console.log(e));
        isMounted.current = true;
    }, [searchValue, currentPage, activeCategory, navigate, sort.sortProperty]);

    if (status === EStatus.LOADING) return (<div>Loading...</div>);

    return (
        <Layout>
            <Header/>
            <Categories activeCategory={activeCategory}
                        onClickCategory={onChangeCategory}/>
            <Sort sort={sort}/>
            <ProductCard/>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </Layout>
    );
};
