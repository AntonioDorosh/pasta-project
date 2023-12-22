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

const Home = () => {
    const {product} = useAppSelector(productSelector);
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(filterSelector.getSearchValue)
    const itemsPerPage = useAppSelector(filterSelector.getItemsPerPage)
    const activeCategory = useAppSelector(filterSelector.getCategoryId);
    const currentPage = useAppSelector(filterSelector.getCurrentPage);

    useEffect(() => {
        dispatch(fetchProductData({searchValue, itemsPerPage, activeCategory, currentPage}));
    }, [searchValue, itemsPerPage, activeCategory, currentPage]);

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