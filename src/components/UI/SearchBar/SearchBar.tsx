import React from "react";
import { Input } from "@/components/UI/Input/Input";

type SearchBarProps = {
  searchProductDeferred: string;
  setSearchProduct: (value: string) => void;
};

export const SearchBar = ({
  searchProductDeferred,
  setSearchProduct,
}: SearchBarProps) => {
  return (
    <Input
      type={"text"}
      value={searchProductDeferred}
      placeholder={"Поиск пиццы"}
      onChange={(event) => setSearchProduct(event.target.value)}
    />
  );
};
