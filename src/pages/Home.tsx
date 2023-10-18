import React from 'react';
import Header from "../components/Header/Header.tsx";
import Layout from "../components/Layout/Layout.tsx";
import Categories from "../components/Categories/Categories.tsx";
import Card from "../components/Card/Card.tsx";

const Home = () => {
    return (
        <Layout>
            <Header/>
            <Categories/>
            <Card/>
        </Layout>
    );
};

export default Home;