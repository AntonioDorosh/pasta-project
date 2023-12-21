import React, {useEffect} from 'react';
import Header from "../components/Header/Header.tsx";
import Layout from "../components/Layout/Layout.tsx";
import Categories from "../components/Categories/Categories.tsx";
import Card from "../components/Card/Card.tsx";
import {useAppDispatch, useAppSelector} from "../hooks/useStore.ts";
import {fetchProductData} from "../redux/reducers/data/slice.ts";
import {filterSelector, setCategoryId} from "../redux/reducers/filter/slice.ts";

const Home = () => {
    const {product} = useAppSelector(state => state.product);
    const dispatch = useAppDispatch();
    const searchValue = useAppSelector(filterSelector.getSearchValue)
    const itemsPerPage = useAppSelector(state => state.filter.itemsPerPage);
    const activeCategory = useAppSelector(filterSelector.getCategoryId);

    useEffect(() => {
        dispatch(fetchProductData({searchValue, itemsPerPage, activeCategory}));
    }, [dispatch, searchValue, itemsPerPage, activeCategory]);

    const onChangeCategory = (id: number) => {
        dispatch(setCategoryId(id));
    };

    return (
        <Layout>
            <Header/>
            <Categories
                activeCategory={activeCategory}
                onClickCategory={onChangeCategory}/>
            <Card product={product}/>
        </Layout>
    );
};

export default Home;