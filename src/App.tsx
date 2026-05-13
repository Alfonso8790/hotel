import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, MapPin, Star, Calendar, Users, ChevronLeft, Wifi, Coffee, Utensils, Heart, Share2, Menu, X, Landmark, Waves, Mountain } from 'lucide-react';
import { View, Hotel } from './types';
import { HOTELS } from './data';

export default function App() {
  const [view, setView] = useState<View>('home');
  const [selectedHotel, setSelectedHotel] = useState<Hotel | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const filteredHotels = useMemo(() => {
    return HOTELS.filter(h => 
      h.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      h.location.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  const handleSelectHotel = (hotel: Hotel) => {
    setSelectedHotel(hotel);
    setView('details');
  };

  const handleBack = () => {
    if (view === 'details') setView('results');
    else if (view === 'results') setView('home');
    else if (view === 'booking') setView('details');
  };

  const Navbar = () => (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div 
        className="flex items-center gap-2 cursor-pointer" 
        onClick={() => setView('home')}
      >
        <div className="w-8 h-8 bg-accent flex items-center justify-center rounded-lg shadow-sm">
          <Landmark className="text-white w-5 h-5" />
        </div>
        <span className="text-xl font-display font-bold tracking-tight">LuxeStay</span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-600">
        <button onClick={() => setView('home')} className="hover:text-accent transition-colors">Esplora</button>
        <button className="hover:text-accent transition-colors">I miei viaggi</button>
        <button className="hover:text-accent transition-colors">Offerte</button>
        <button className="bg-brand-primary text-white px-5 py-2 rounded-full hover:bg-opacity-90 transition-all">Accedi</button>
      </div>

      <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
        {isMenuOpen ? <X /> : <Menu />}
      </button>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white border-b border-gray-100 p-6 flex flex-col gap-4 md:hidden shadow-xl"
          >
            <button onClick={() => { setView('home'); setIsMenuOpen(false); }} className="text-left py-2 font-medium">Esplora</button>
            <button className="text-left py-2 font-medium">I miei viaggi</button>
            <button className="text-left py-2 font-medium">Offerte</button>
            <button className="bg-brand-primary text-white px-5 py-3 rounded-xl w-full">Accedi</button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );

  const HomeView = () => (
    <div className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-50 rounded-full blur-3xl" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-3xl text-center space-y-6"
      >
        <h1 className="text-5xl md:text-7xl font-display font-bold leading-[1.1] text-brand-primary">
          Trova il tuo rifugio di lusso nel <span className="text-accent">mondo</span>
        </h1>
        <p className="text-lg text-gray-500 max-w-xl mx-auto">
          Scopri hotel esclusivi e curati per la tua prossima indimenticabile vacanza.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2 }}
        className="mt-12 w-full max-w-4xl bg-white p-2 md:p-4 rounded-3xl shadow-2xl border border-gray-100"
      >
        <div className="flex flex-col md:flex-row items-stretch gap-2">
          <div className="flex-1 px-4 py-3 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
            <Search className="text-gray-400 w-5 h-5 shrink-0" />
            <input 
              type="text" 
              placeholder="Dove vuoi andare?" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-transparent outline-none font-medium placeholder:text-gray-300"
            />
          </div>
          <div className="flex-1 px-4 py-3 flex items-center gap-3 border-b md:border-b-0 md:border-r border-gray-100">
            <Calendar className="text-gray-400 w-5 h-5 shrink-0" />
            <div className="text-sm">
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Date</p>
              <p className="font-medium">Scegli le date</p>
            </div>
          </div>
          <div className="flex-1 px-4 py-3 flex items-center gap-3">
            <Users className="text-gray-400 w-5 h-5 shrink-0" />
            <div className="text-sm">
              <p className="text-gray-400 text-[10px] uppercase font-bold tracking-widest">Ospiti</p>
              <p className="font-medium">2 Adulti</p>
            </div>
          </div>
          <button 
            onClick={() => setView('results')}
            className="bg-brand-primary text-white md:px-8 py-4 px-4 rounded-2xl font-bold hover:bg-opacity-90 active:scale-[0.98] transition-all"
          >
            Cerca
          </button>
        </div>
      </motion.div>

      <div className="mt-20 flex flex-wrap justify-center gap-12 opacity-40 grayscale pointer-events-none">
        <Landmark />
        <Waves />
        <Mountain />
        <Landmark />
      </div>
    </div>
  );

  const ResultsView = () => (
    <div className="pt-24 px-6 pb-20 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-4">
        <div>
          <h2 className="text-3xl font-bold mb-2">Risultati in Italia</h2>
          <p className="text-gray-500">{filteredHotels.length} hotel trovati per la tua ricerca</p>
        </div>
        <div className="flex gap-2">
          {['Prezzo', 'Popolarità', 'Rating'].map((filter) => (
            <button key={filter} className="px-4 py-2 bg-gray-50 rounded-full text-sm font-medium border border-gray-100 hover:bg-white transition-all">
              {filter}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {filteredHotels.map((hotel, index) => (
          <motion.div 
            key={hotel.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="group cursor-pointer"
            onClick={() => handleSelectHotel(hotel)}
          >
            <div className="relative aspect-[4/5] rounded-3xl overflow-hidden mb-4 shadow-lg group-hover:shadow-xl transition-all duration-500">
              <img 
                src={hotel.imageUrl} 
                alt={hotel.name} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <button className="absolute top-4 right-4 p-2 bg-white/20 backdrop-blur-md rounded-full text-white hover:bg-white hover:text-red-500 transition-all">
                <Heart className="w-5 h-5" />
              </button>
              <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                <Star className="w-3 h-3 fill-accent text-accent" />
                {hotel.rating}
              </div>
            </div>
            <div className="space-y-1">
              <div className="flex justify-between items-start">
                <h3 className="font-bold text-lg group-hover:text-accent transition-colors">{hotel.name}</h3>
                <span className="font-bold text-lg">€{hotel.pricePerNight}</span>
              </div>
              <div className="flex items-center gap-1 text-gray-400 text-sm">
                <MapPin className="w-3 h-3" />
                {hotel.location}
              </div>
              <p className="text-gray-400 text-xs">/ notte</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );

  const DetailsView = () => {
    if (!selectedHotel) return null;
    return (
      <div className="pt-24 pb-20 px-6 max-w-7xl mx-auto">
        <button 
          onClick={handleBack}
          className="flex items-center gap-2 text-gray-500 hover:text-brand-primary mb-8 transition-colors"
        >
          <ChevronLeft className="w-5 h-5" />
          <span>Torna alla ricerca</span>
        </button>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Gallery Section */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            <div className="aspect-square rounded-[2rem] overflow-hidden shadow-2xl">
              <img src={selectedHotel.imageUrl} alt={selectedHotel.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-3 gap-4">
               {[1, 2, 3].map((i) => (
                 <div key={i} className="aspect-square rounded-2xl overflow-hidden shadow-md">
                   <img src={`${selectedHotel.imageUrl}&sig=${i}`} alt={`${selectedHotel.name} ${i}`} className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity" />
                 </div>
               ))}
            </div>
          </motion.div>

          {/* Info Section */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col"
          >
            <div className="flex justify-between items-start mb-6">
              <div>
                <p className="text-accent font-bold tracking-widest uppercase text-xs mb-2">Lusso Certificato</p>
                <h2 className="text-4xl font-bold mb-2">{selectedHotel.name}</h2>
                <div className="flex items-center gap-4 text-gray-500">
                  <div className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    <span>{selectedHotel.location}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 fill-accent text-accent" />
                    <span className="font-bold text-brand-primary">{selectedHotel.rating}</span>
                    <span className="text-xs">({selectedHotel.reviews} recensioni)</span>
                  </div>
                </div>
              </div>
              <div className="flex gap-2">
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-all border border-gray-100">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-gray-50 rounded-full hover:bg-gray-100 transition-all border border-gray-100">
                  <Share2 className="w-5 h-5" />
                </button>
              </div>
            </div>

            <p className="text-gray-500 leading-relaxed mb-8">
              {selectedHotel.description}
            </p>

            <div className="mb-10">
              <h3 className="font-bold mb-4">Servizi Inclusi</h3>
              <div className="grid grid-cols-2 gap-4">
                {selectedHotel.amenities.map(amenity => (
                  <div key={amenity} className="flex items-center gap-3 p-4 bg-gray-50 rounded-2xl border border-gray-100">
                    {amenity.includes('WiFi') && <Wifi className="w-5 h-5 text-gray-400" />}
                    {amenity.includes('Ristorante') && <Utensils className="w-5 h-5 text-gray-400" />}
                    {amenity.includes('Spa') && <Waves className="w-5 h-5 text-gray-400" />}
                    {amenity.includes('Gym') && <Landmark className="w-5 h-5 text-gray-400" />}
                    {!amenity.includes('WiFi') && !amenity.includes('Ristorante') && !amenity.includes('Spa') && !amenity.includes('Gym') && <Coffee className="w-5 h-5 text-gray-400" />}
                    <span className="text-sm font-medium">{amenity}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-auto bg-brand-primary text-white p-6 rounded-[2rem] flex items-center justify-between shadow-xl">
              <div>
                <p className="text-gray-400 text-sm">Prezzo per notte</p>
                <p className="text-3xl font-bold">€{selectedHotel.pricePerNight}</p>
              </div>
              <button 
                onClick={() => setView('booking')}
                className="bg-accent text-brand-primary px-10 py-4 rounded-2xl font-bold hover:scale-105 active:scale-95 transition-all"
              >
                Prenota Ora
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    );
  };

  const BookingView = () => (
    <div className="pt-24 pb-20 px-6 max-w-4xl mx-auto">
      <button 
        onClick={handleBack}
        className="flex items-center gap-2 text-gray-500 hover:text-brand-primary mb-8 transition-colors"
      >
        <ChevronLeft className="w-5 h-5" />
        <span>Torna ai dettagli</span>
      </button>

      <div className="bg-white rounded-[2rem] shadow-2xl border border-gray-100 overflow-hidden">
        <div className="p-8 md:p-12">
          <h2 className="text-3xl font-bold mb-8 italic font-display">Dettagli della Prenotazione</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-8">
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400">Nome Completo</label>
                <input type="text" placeholder="Mario Rossi" className="w-full bg-gray-50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-accent transition-all" />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400">Email</label>
                <input type="email" placeholder="mario@esempio.it" className="w-full bg-gray-50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-accent transition-all" />
              </div>
              <div className="space-y-4">
                <label className="block text-sm font-bold uppercase tracking-widest text-gray-400">Informazioni Aggiuntive</label>
                <textarea rows={4} placeholder="Richieste speciali..." className="w-full bg-gray-50 border-none rounded-2xl p-4 outline-none focus:ring-2 focus:ring-accent transition-all" />
              </div>
            </div>

            <div className="bg-gray-50 rounded-3xl p-8 space-y-6">
              <h3 className="font-bold text-xl mb-4">Riassunto</h3>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-500">{selectedHotel?.name}</span>
                <span className="font-bold">€{selectedHotel?.pricePerNight} / notte</span>
              </div>
              <div className="flex justify-between items-center pb-4 border-b border-gray-200">
                <span className="text-gray-500">Soggiorno (3 notti)</span>
                <span className="font-bold">€{((selectedHotel?.pricePerNight || 0) * 3)}</span>
              </div>
              <div className="flex justify-between items-center pt-2">
                <span className="text-xl font-bold">Totale</span>
                <span className="text-3xl font-bold text-accent">€{((selectedHotel?.pricePerNight || 0) * 3)}</span>
              </div>
              
              <button 
                className="w-full bg-brand-primary text-white py-5 rounded-2xl font-bold text-lg hover:bg-opacity-90 active:scale-[0.98] transition-all shadow-xl shadow-brand-primary/20"
                onClick={() => {
                  alert('Prenotazione confermata! Riceverai una mail a breve.');
                  setView('home');
                }}
              >
                Conferma Pagamento
              </button>
              <p className="text-center text-[10px] text-gray-400 uppercase tracking-widest font-bold">Pagamento sicuro gestito da LuxeStay</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main>
        <AnimatePresence mode="wait">
          {view === 'home' && (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <HomeView />
            </motion.div>
          )}
          {view === 'results' && (
            <motion.div 
              key="results"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <ResultsView />
            </motion.div>
          )}
          {view === 'details' && (
            <motion.div 
              key="details"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <DetailsView />
            </motion.div>
          )}
          {view === 'booking' && (
            <motion.div 
              key="booking"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <BookingView />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      <footer className="bg-gray-50 py-12 px-6 border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-2">
            <Landmark className="text-accent w-6 h-6" />
            <span className="text-xl font-display font-bold">LuxeStay</span>
          </div>
          <div className="flex gap-8 text-sm text-gray-500 font-medium">
            <button className="hover:text-brand-primary">Privacy</button>
            <button className="hover:text-brand-primary">Termini</button>
            <button className="hover:text-brand-primary">Contatti</button>
          </div>
          <p className="text-gray-400 text-xs">© 2026 LuxeStay Inc. Tutti i diritti riservati.</p>
        </div>
      </footer>
    </div>
  );
}

