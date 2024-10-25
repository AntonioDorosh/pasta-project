import React, { ChangeEvent } from "react";
import { SortFields, SortOrders, SortProperty } from "@/shared/types/sort";
import { OptionStyled, SelectStyled } from "@/components/UI/Sort/Sort.styled";
import Flex from "@/shared/styles/styled-components/Flex/Flex";
import { px2vw } from "@/utils";
import sortSvg from "@/assets/images/sort-icon.svg";
import { SORT_LIST } from "@/shared/utils/SORT_LIST";

type SortProps = {
  sort: SortProperty;
  setSort: (sort: SortProperty) => void;
};

export const Sort = ({ sort, setSort }: SortProps) => {
  const sortHandler = (event: ChangeEvent<HTMLSelectElement>) => {
    const [field, order] = event.target.value.split("_") as [
      SortFields,
      SortOrders,
    ];

    setSort({
      field,
      order,
    });
  };

  return (
    <Flex background={"#FAFAFA"} borderRadius={"15px"}>
      <Flex alignItems={"center"} padding={"16px 22px"} gap={px2vw(10)}>
        <img src={sortSvg} alt={"sort-arrows"} width={"16px"} height={"16px"} />
        <SelectStyled
          value={`${sort.field}_${sort.order}`}
          onChange={sortHandler}
        >
          {SORT_LIST.map(({ name, sortProperty }, index) => (
            <OptionStyled
              key={index}
              value={`${sortProperty.field}_${sortProperty.order}`}
              $isActive={
                sortProperty.field === sort.field &&
                sortProperty.order === sort.order
              }
            >
              {name}
            </OptionStyled>
          ))}
        </SelectStyled>
      </Flex>
    </Flex>
  );
};
