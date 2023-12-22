import React, {useEffect} from 'react';
import Header from "../components/Header/Header.tsx";
import Layout from "../components/Layout/Layout.tsx";
import Categories from "../components/Categories/Categories.tsx";
import ProductCard from "../components/ProductCard/ProductCard.tsx";
import {useAppDispatch, useAppSelector} from "../redux/hooks/useStore.ts";
import {
    filterSelector,
    setCategoryId,
    setCurrentPage
} from "../redux/reducers/filter/slice.ts";
import Pagination from "../components/UI/Pagination/Pagination.tsx";
import {fetchProductData} from "../redux/reducers/data/asyncActions.ts";
import {productSelector} from "../redux/reducers/data/slice.ts";
import qs from 'qs';
import {useNavigate} from "react-router-dom";

const Home = () => {
    const navigate = useNavigate();
    const {product} = useAppSelector(productSelector);
    const dispatch = useAppDispatch();
    const {
        searchValue,
        itemsPerPage,
        activeCategory,
        currentPage
    } = useAppSelector(filterSelector)

    useEffect(() => {
        dispatch(fetchProductData({
            searchValue,
            itemsPerPage,
            activeCategory,
            currentPage
        }));
    }, [searchValue, itemsPerPage, activeCategory, currentPage]);

    useEffect(() => {
        const queryString = qs.stringify({
            searchValue,
            currentPage,
            activeCategory
        })
        navigate(`?${queryString}`)
    }, [searchValue, currentPage, activeCategory]);

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    };

    const onChangePage = (page: number) => {
        dispatch(setCurrentPage(page))
    };

    return (
        <Layout>
            <Header/>
            <Categories
                activeCategory={activeCategory}
                onClickCategory={onChangeCategory}/>
            <ProductCard product={product}/>
            <Pagination currentPage={currentPage} onChangePage={onChangePage}/>
        </Layout>
    );
};

export default Home;