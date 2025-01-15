export interface ProductLogo {
  small: string;
  medium: string;
  large: string;
}

export interface Product {
  code: string;
  name: string;
  description: string;
  unit: string | null;
  price: number;
  status: string;
  availAreas: string[];
  logo?: ProductLogo;
}

export interface ProductsResponse {
  data: Product[];
  total: number;
} 