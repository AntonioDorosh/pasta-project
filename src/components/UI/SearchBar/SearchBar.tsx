import React, {ChangeEvent} from "react";
import {Input} from "@/components/UI/Input/Input";

type SearchBarProps = {
  searchProductDeferred: string;
  setSearchProduct: (value: string) => void;
};

export const SearchBar = ({
                            searchProductDeferred,
                            setSearchProduct,
                          }: SearchBarProps) => {
  const handleSearch = ({target}: ChangeEvent<HTMLInputElement>) => setSearchProduct(target.value)

  return (
    <Input
      type={"text"}
      value={searchProductDeferred}
      placeholder={"Поиск пиццы"}
      onChange={handleSearch}
    />
  );
};
