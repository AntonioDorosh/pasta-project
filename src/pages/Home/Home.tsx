import React, { useDeferredValue, useState } from "react";
import { Container } from "@/components/Layouts/Container/Container";
import { Header } from "@/components/Layouts/Header/Header";
import { Categories } from "@/components/UI/Categories/Categories";
import { ProductList } from "@/components/ProductList/ProductList";
import { useFetchProducts } from "@/shared/hooks/useFetchProducts";
import { ModalCart } from "@/components/UI/Modal/ModalCart/ModalCart";
import { SearchBar } from "@/components/UI/SearchBar/SearchBar";
import { CartButton } from "@/components/UI/CartButton/CartButton";

export const Home = () => {
  const [selectedCategory, setSelectedCategory] = useState(0);
  const [searchProduct, setSearchProduct] = useState("");
  const [isOpenCart, setIsOpenCart] = useState(false);
  const searchProductDeferred = useDeferredValue(searchProduct);

  const { products } = useFetchProducts({
    category: selectedCategory,
    searchTerm: searchProductDeferred,
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
        <CartButton isOpenCart={isOpenCart} setIsOpenCart={setIsOpenCart} />
      </Header>
      <Categories
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <ProductList products={products} />
    </Container>
  );
};
