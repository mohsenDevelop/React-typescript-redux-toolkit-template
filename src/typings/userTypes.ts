export interface UserRequest {
  search?: string;
  fromDate?: string;
  toDate?: string;
  page: number;
  limit: number;
}

export interface UserResponse {
  currentPage: number;
  items: User[];
  pageSize: number;
  totalPages: number;
  totalSize: number;
}

export interface User {
  createdAt: string;
  family: string;
  id: number;
  isMobileConfirmed: boolean;
  mobile: string;
  name: string;
  postalCode: string;
  userAddress: any[];
  roleId: number;
  gender: number;
  email: string;
  birthDate: string;
  avatar: string;
}

export interface CreateUserRequest {
  id?: string;
  name: string;
  family: string;
  mobile: string;
  avatar: string;
  password?: string;
  roles?: number;
  gender?: number;
}

export interface UserAddress {
  id: string;
  addressLine: string;
  city: string;
  createdAt: string;
  latitude: string;
  longitude: string;
  provenceId: string;
  provenceName: string;
  postalCode: string;
  title: string;
}

export interface UserAddressResponse {
  avatar: string;
  birthDate: null;
  email: null;
  family: string;
  gender: number;
  id: number;
  isMobileConfirmed: boolean;
  mobile: string;
  name: string;
  roleId: number;
  userAddress: UserAddresses[];
}

export interface UserAddresses {
  address: string;
  cityId: number;
  cityName: string;
  id: number;
  phoneNumber: string;
  postalCode: string;
  receiverName: string;
}
