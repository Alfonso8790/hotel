import { Hotel } from './types';

export const HOTELS: Hotel[] = [
  {
    id: '1',
    name: 'Palazzo Vittoria',
    location: 'Venezia, Italia',
    pricePerNight: 450,
    rating: 4.9,
    reviews: 128,
    imageUrl: 'https://images.unsplash.com/photo-1544124499-58912cbddaad?auto=format&fit=crop&q=80&w=800',
    description: 'Un palazzo storico nel cuore di Venezia, affacciato sul Canal Grande. Esperienza di lusso d\'altri tempi con comfort moderni.',
    amenities: ['Spa', 'Ristorante Stellato', 'Servizio in camera 24/7', 'WiFi gratuito']
  },
  {
    id: '2',
    name: 'Eden Rock Retreat',
    location: 'Positano, Italia',
    pricePerNight: 680,
    rating: 5.0,
    reviews: 84,
    imageUrl: 'https://images.unsplash.com/photo-1512918728675-ed5a9ecdebfd?auto=format&fit=crop&q=80&w=800',
    description: 'Arroccato sulle scogliere di Positano, questo rifugio offre viste mozzafiato sul Mediterraneo e piscine a sfioro private.',
    amenities: ['Piscina Infinity', 'Accesso privato alla spiaggia', 'Gym', 'Colazione inclusa']
  },
  {
    id: '3',
    name: 'The Urban Oasis',
    location: 'Milano, Italia',
    pricePerNight: 320,
    rating: 4.7,
    reviews: 215,
    imageUrl: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&q=80&w=800',
    description: 'Design contemporaneo e minimalista nel quartiere della moda. Perfetto per chi cerca stile e comodità nel centro pulsante di Milano.',
    amenities: ['Business Center', 'Rooftop Bar', 'Spa', 'Navetta aeroporto']
  },
  {
    id: '4',
    name: 'Alpine Serenity Resort',
    location: 'Cortina d\'Ampezzo, Italia',
    pricePerNight: 550,
    rating: 4.8,
    reviews: 96,
    imageUrl: 'https://images.unsplash.com/photo-1518732714860-b62714ce0c59?auto=format&fit=crop&q=80&w=800',
    description: 'Un accogliente ma lussuoso resort di montagna con vista sulle Dolomiti. Ideale per escursioni in estate e sci in inverno.',
    amenities: ['Accesso piste da sci', 'Wine Cellar', 'Camino in camera', 'Wellness Area']
  }
];
