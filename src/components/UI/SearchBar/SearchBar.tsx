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
  const handleSearch = (event: ChangeEvent<HTMLInputElement>) => setSearchProduct(event.target.value)

  return (
    <Input
      type={"text"}
      value={searchProductDeferred}
      placeholder={"Поиск пиццы"}
      onChange={handleSearch}
    />
  );
};
