import React, { useCallback, useEffect, useRef } from "react";
import qs from "qs";
import { useNavigate } from "react-router-dom";

import { useAppDispatch, useAppSelector } from "../redux/hooks/useStore.ts";
import {
    filterSelector,
    setCurrentPage,
} from "../redux/reducers/filter/slice.ts";
import { Layout } from "../components/Layout/Layout.tsx";
import { Header } from "../components/Header/Header.tsx";
import { Categories } from "../components/Categories/Categories.tsx";
import { ProductCard } from "../components/ProductCard/ProductCard.tsx";
import { Pagination } from "../components/UI/Pagination/Pagination.tsx";
import { Sort } from "../components/UI/Sort/Sort.tsx";
import { fetchData } from "../redux/reducers/data/slice.ts";

const Home = () => {
    const navigate = useNavigate();
    const isMounted = useRef(false);
    const { searchValue, itemsPerPage, activeCategory, currentPage, sort } =
        useAppSelector(filterSelector);
    const dispatch = useAppDispatch();
    const onChangePage = useCallback(
        (page: number) => dispatch(setCurrentPage(page)),
        [],
    );

    const fetchPizzas = async () => {
        const sortBy = sort.sortProperty.replace("-", "");
        const order = sort.sortProperty.includes("-") ? "asc" : "desc";
        const category = activeCategory > 0 ? String(activeCategory) : "";
        const search = searchValue;

        dispatch(
            fetchData({
                sortBy,
                order,
                category,
                search,
                currentPage: String(currentPage),
                itemsPerPage,
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
                sort: sort.sortProperty,
            });
            navigate(`?${queryString}`);
        }
        fetchPizzas().catch(() => {
            throw new Error("Error fetch pizzas");
        });

        isMounted.current = true;
    }, [searchValue, currentPage, activeCategory, sort.sortProperty]);

    return (
        <Layout>
            <Header />
            <Categories activeCategory={activeCategory} />
            <Sort />
            <ProductCard />
            <Pagination currentPage={currentPage} onChangePage={onChangePage} />
        </Layout>
    );
};

export default Home;
