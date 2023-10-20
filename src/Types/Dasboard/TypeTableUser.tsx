 export interface Profile {
  id: number;
  name: string;
}

export interface Specialty {
  id: number;
  name: string;
  enabled: boolean;
}

export interface Address {
  zipcode: string;
  street: string;
  number: string;
  neighborhood: string;
  city: string;
  state: string;
  complement: string;
}

export interface User {
  [x: string]: any;
  id: number;
  email: string;
  firstName: string;
  lastName: string;
  profiles: Profile[];
  specialties: Specialty[];
  phone: string;
  address: Address | null;
  enabled: boolean;
}

export interface ApiResponse {
  totalPages: number;
  totalElements: number;
  size: number;
  content: User[];
  number: number;
  sort: {
    empty: boolean;
    sorted: boolean;
    unsorted: boolean;
  };
  first: boolean;
  last: boolean;
  numberOfElements: number;
  pageable: {
    offset: number;
    sort: {
      empty: boolean;
      sorted: boolean;
      unsorted: boolean;
    };
    pageNumber: number;
    pageSize: number;
    paged: boolean;
    unpaged: boolean;
  };
  empty: boolean;
}
