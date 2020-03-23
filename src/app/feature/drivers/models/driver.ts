export interface Driver {
  id: number;
  fullName: string;
  email: string;
  street: string;
  city: string;
  postalCode: string;
}

export interface DriverApiResponse {
  id: number;
  name: string;
  email: string;
  address: AddressApiResponse;
}

export interface AddressApiResponse {
  street: string;
  city: string;
  zipcode: string;
}
