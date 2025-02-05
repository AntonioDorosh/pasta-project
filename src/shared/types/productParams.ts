import {TSort} from "@/shared/types/sort";

export type ProductParams = {
  searchTerm?: string;
  category: number;
  sortBy?: TSort;
};
