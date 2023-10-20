export type Plan = {
  id: number;
  planTitle: string;
  enabled: boolean;
  period: string;
  type: string;
  values: number;
};

export type Sort = {
  empty: boolean;
  unsorted: boolean;
  sorted: boolean;
};

export type Pageable = {
  offset: number;
  sort: Sort;
  paged: boolean;
  unpaged: boolean;
  pageNumber: number;
  pageSize: number;
};

export type ApiResponse = {
  totalPages: number;
  totalElements: number;
  size: number;
  content: Plan[];
  number: number;
  sort: Sort;
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: Pageable;
  empty: boolean;
};
