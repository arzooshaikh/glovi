export interface Product {
  id: string;
  name: string;
  brand: string;
  price: number;
  originalPrice?: number;
  image: string;
  category: 'makeup' | 'skincare' | 'haircare' | 'fragrance';
  bestDealAt: string;
  rating: number;
  reviewsCount: number;
  isBackInStock?: boolean;
  isPriceDrop?: boolean;
}

export interface StorePrice {
  storeName: string;
  price: number;
  deliveryInfo: string;
  isCheapest?: boolean;
}
