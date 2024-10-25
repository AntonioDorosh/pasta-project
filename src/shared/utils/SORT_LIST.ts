import { sortOptions, TSort } from "@/shared/types/sort";

export const SORT_LIST: TSort[] = [
  { name: "По умолчанию", sortProperty: sortOptions[0] },
  { name: "По цене (ASC)", sortProperty: sortOptions[1] },
  { name: "По цене (DESC)", sortProperty: sortOptions[2] },
  { name: "По названию (ASC)", sortProperty: sortOptions[3] },
  { name: "По названию (DESC)", sortProperty: sortOptions[4] },
];

console.log(sortOptions);
