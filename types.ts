
export type Availability = 'available' | 'occupied' | 'booked';
export type UserMode = 'driver' | 'host';

export interface Review {
  id: string;
  author: string;
  rating: number;
  comment: string;
}

export interface ParkingSpot {
  id: string;
  name: string;
  address: string;
  distance: string;
  pricePerHour: number;
  availability: Availability;
  features: {
    evCharging: boolean;
    covered: boolean;
    accessible: boolean;
  };
  rating: number;
  reviewCount: number;
  reviews: Review[];
  imageUrl: string;
  lat: number;
  lng: number;
}

export interface HostListing {
    id: string;
    name: string;
    address: string;
    totalSpots: number;
    occupiedSpots: number;
    monthlyEarnings: number;
    imageUrl: string;
}
