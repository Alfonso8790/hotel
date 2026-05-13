export interface Hotel {
  id: string;
  name: string;
  location: string;
  pricePerNight: number;
  rating: number;
  reviews: number;
  imageUrl: string;
  description: string;
  amenities: string[];
}

export type View = 'home' | 'results' | 'details' | 'booking';
