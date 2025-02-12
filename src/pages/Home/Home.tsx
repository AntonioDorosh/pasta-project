import React, {useDeferredValue, useState} from "react";
import {Container} from "@/components/Layouts/Container/Container";
import {Header} from "@/components/Layouts/Header/Header";
import {Categories} from "@/components/UI/Categories/Categories";
import {ProductList} from "@/components/Products/ProductList/ProductList";
import {useFetchProducts} from "@/shared/hooks/useFetchProducts";
import {ModalCart} from "@/components/UI/Modals/ModalCart/ModalCart";
import {SearchBar} from "@/components/UI/SearchBar/SearchBar";
import {CartButton} from "@/components/UI/Buttons/CartButton/CartButton";
import {CurrentCategory} from "@/components/CurrentCategory/CurrentCategory";
import {SortProperty} from "@/shared/types/sort";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import {Sort} from "@/components/UI/Sort/Sort";
import Typography from "@/shared/styles/styled-components/Typography/Typography";
import {remCalc} from "@/utils";

export const Home = () => {
  const [sort, setSort] = useState<SortProperty>({field: "default", order: "asc"});
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

  const hasProductInCategory = products?.filter(({category}) => category === selectedCategory)

  return (
    <Container>
      {isOpenCart && <ModalCart isOpenCart={isOpenCart} onClose={() => setIsOpenCart(false)}/>}

      <Header>
        <SearchBar searchProductDeferred={searchProductDeferred} setSearchProduct={setSearchProduct}/>
        <CartButton isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart}/>
      </Header>

      <Flex alignItems={"center"} justifyContent={"space-between"}>
        <CurrentCategory selectedCategory={selectedCategory}/>
        <Sort sort={sort} setSort={setSort}/>
      </Flex>

      <Categories selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory}/>
      {!hasProductInCategory?.length && selectedCategory !== 0 ? (
        <Typography fontSize={remCalc(18)} fontWeight={600} color={'red'}>
          Товаров нет в этой категории
        </Typography>

      ) : (
        <ProductList products={products}/>
      )}

    </Container>
  );
};
