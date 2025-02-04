import React, {useDeferredValue, useState} from "react";
import {Container} from "@/components/Layouts/Container/Container";
import {Header} from "@/components/Layouts/Header/Header";
import {Categories} from "@/components/UI/Categories/Categories";
import {ProductList} from "@/components/Product/ProductList";
import {useFetchProducts} from "@/shared/hooks/useFetchProducts";
import {ModalCart} from "@/components/UI/Modal/ModalCart";
import {SearchBar} from "@/components/UI/SearchBar/SearchBar";
import {CartButton} from "@/components/UI/Button/CartButton";
import {CurrentCategory} from "@/components/CurrentCategory/CurrentCategory";
import {SortProperty} from "@/shared/types/sort";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {Sort} from "@/components/UI/Sort/Sort";

export const Home = () => {
  const [sort, setSort] = useState<SortProperty>({
    field: "default",
    order: "asc",
  });
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchProduct, setSearchProduct] = useState("");
  const [isOpenCart, setIsOpenCart] = useState(false);
  const searchProductDeferred = useDeferredValue(searchProduct);

  const {products} = useFetchProducts({
    category: selectedCategory,
    searchTerm: searchProductDeferred,
    sortBy: {
      name: sort.field,
      sortProperty: sort,
    },
  });

  return (
    <Container>
      {isOpenCart && (
        <ModalCart
          isOpenCart={isOpenCart}
          onClose={() => setIsOpenCart(false)}
        />
      )}
      <Header>
        <SearchBar
          searchProductDeferred={searchProductDeferred}
          setSearchProduct={setSearchProduct}
        />
        <CartButton isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
      </Header>
      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <CurrentCategory selectedCategory={selectedCategory} products={products}/>
        <Sort sort={sort} setSort={setSort}/>
      </Flex>

      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={products}/>
    </Container>
  );
};
