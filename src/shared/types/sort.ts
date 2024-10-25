export type SortFields = "default" | "price" | "title";
export type SortOrders = "asc" | "desc";

export type SortProperty = {
  field: SortFields;
  order: SortOrders;
};

// export const sortOptions: {
//   fields: Record<"default" | "price" | "title", SortFields>;
//   orders: Record<"asc" | "desc", SortOrders>;
// } = {
//   fields: {
//     default: "default",
//     price: "price",
//     title: "title",
//   },
//   orders: {
//     asc: "asc",
//     desc: "desc",
//   },
// };

export const sortOptions: SortProperty[] = [
  { field: "default", order: "asc" },
  { field: "price", order: "asc" },
  { field: "price", order: "desc" },
  { field: "title", order: "asc" },
  { field: "title", order: "desc" },
];

export type TSort = {
  name: string;
  sortProperty: SortProperty;
};
