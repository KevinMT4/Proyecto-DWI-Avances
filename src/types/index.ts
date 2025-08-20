export interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  category: string;
  providerId: number;
}

export interface Provider {
  id: number;
  name: string;
  logo: string;
  description: string;
  website: string;
  specialties: string[];
}