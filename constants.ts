
import type { ParkingSpot, HostListing } from './types';

export const mockParkingSpots: ParkingSpot[] = [
  {
    id: 'ps1',
    name: 'Downtown Secure Park',
    address: '123 Main St, Anytown, USA',
    distance: '0.2 miles',
    pricePerHour: 3.5,
    availability: 'available',
    features: { evCharging: true, covered: true, accessible: true },
    rating: 4.8,
    reviewCount: 120,
    reviews: [
        {id: 'r1', author: 'Jane D.', rating: 5, comment: 'Clean, safe, and the EV charger was a lifesaver!'}
    ],
    imageUrl: 'https://picsum.photos/seed/park1/400/300',
    lat: 34.0522,
    lng: -118.2437,
  },
  {
    id: 'ps2',
    name: 'City Center Lot B',
    address: '456 Oak Ave, Anytown, USA',
    distance: '0.5 miles',
    pricePerHour: 2.0,
    availability: 'occupied',
    features: { evCharging: false, covered: false, accessible: true },
    rating: 4.2,
    reviewCount: 88,
    reviews: [
        {id: 'r2', author: 'John S.', rating: 4, comment: 'Good value for the location, a bit tight though.'}
    ],
    imageUrl: 'https://picsum.photos/seed/park2/400/300',
    lat: 34.055,
    lng: -118.245,
  },
  {
    id: 'ps3',
    name: 'Riverside Private Driveway',
    address: '789 Pine Ln, Anytown, USA',
    distance: '1.1 miles',
    pricePerHour: 1.75,
    availability: 'available',
    features: { evCharging: true, covered: false, accessible: false },
    rating: 5.0,
    reviewCount: 32,
    reviews: [
        {id: 'r3', author: 'Emily R.', rating: 5, comment: 'Host was amazing! Super easy to find and park.'}
    ],
    imageUrl: 'https://picsum.photos/seed/park3/400/300',
    lat: 34.049,
    lng: -118.25,
  },
    {
    id: 'ps4',
    name: 'Mall Parking Garage',
    address: '101 Market St, Anytown, USA',
    distance: '0.3 miles',
    pricePerHour: 2.75,
    availability: 'available',
    features: { evCharging: true, covered: true, accessible: true },
    rating: 4.5,
    reviewCount: 250,
    reviews: [
        {id: 'r4', author: 'Mike T.', rating: 4, comment: 'Convenient for shopping, but can get busy.'}
    ],
    imageUrl: 'https://picsum.photos/seed/park4/400/300',
    lat: 34.058,
    lng: -118.24,
  },
];


export const mockHostListings: HostListing[] = [
    {
        id: 'hl1',
        name: 'My Downtown Spot',
        address: '123 Main St, Anytown, USA',
        totalSpots: 1,
        occupiedSpots: 0,
        monthlyEarnings: 150.75,
        imageUrl: 'https://picsum.photos/seed/host1/400/300',
    },
    {
        id: 'hl2',
        name: 'Office Complex Lot',
        address: '500 Business Blvd, Anytown, USA',
        totalSpots: 20,
        occupiedSpots: 14,
        monthlyEarnings: 2100.50,
        imageUrl: 'https://picsum.photos/seed/host2/400/300',
    },
];
