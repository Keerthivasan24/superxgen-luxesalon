export interface Salon {
  id: number;
  name: string;
  area: string;
  address: string;
  rating: number;
  reviews: number;
  priceLevel: number; // 1-4
  tags: string[];
  services: string[];
  openNow: boolean;
  image: string;
  badge?: string;
  lat: number;
  lng: number;
  distance?: number;
  isFeatured?: boolean;
  isSaved?: boolean;
  nextSlot?: string;
  yearsOpen?: number;
}

export interface FilterState {
  search: string;
  areas: string[];
  services: string[];
  priceLevel: number[];
  minRating: number;
  openNow: boolean;
  sortBy: SortOption;
}

export type SortOption = 'recommended' | 'rating' | 'distance' | 'price_low' | 'price_high' | 'newest';

export const AREAS = [
  'Koramangala','Indiranagar','Whitefield','MG Road','Jayanagar',
  'HSR Layout','Marathahalli','Hebbal','Malleshwaram','Yelahanka',
  'Bannerghatta Road','Electronic City',
];

export const SERVICES = [
  'Hair Cut','Hair Colour','Balayage','Keratin Treatment','Smoothening',
  'Bridal Makeup','Facial','Manicure','Pedicure','Waxing',
  'Head Massage','Eyebrow Threading','Hair Spa','Mehendi',
];

export const MOCK_SALONS: Salon[] = [
  { id:1,  name:'Toni & Guy',             area:'Koramangala',       address:'5th Block, 80 Feet Rd',       rating:4.9, reviews:842,  priceLevel:4, tags:['Hair','Bridal','Colour'],      services:['Hair Cut','Balayage','Bridal Makeup'],   openNow:true,  image:'',badge:'Top Rated', lat:12.9352,lng:77.6245,distance:1.2,isFeatured:true, nextSlot:'Today 3:00 PM', yearsOpen:8 },
  { id:2,  name:'Jean-Claude Biguine',    area:'Indiranagar',       address:'12th Main, 100 Feet Rd',      rating:4.8, reviews:631,  priceLevel:4, tags:['Hair','Skin','Nails'],         services:['Hair Cut','Facial','Manicure'],          openNow:true,  image:'',badge:'Premium',  lat:12.9784,lng:77.6408,distance:2.4,isFeatured:true, nextSlot:'Today 5:30 PM', yearsOpen:12 },
  { id:3,  name:'Lakmé Salon Luxe',       area:'MG Road',           address:'Brigade Road, Level 2',       rating:4.7, reviews:1203, priceLevel:3, tags:['Bridal','Makeup','Facial'],    services:['Bridal Makeup','Facial','Waxing'],       openNow:true,  image:'',               lat:12.9757,lng:77.6011,distance:3.1,               nextSlot:'Tomorrow 10 AM',yearsOpen:15 },
  { id:4,  name:'Naturals Luxe',          area:'Whitefield',        address:'Forum Value Mall, L1',        rating:4.7, reviews:519,  priceLevel:3, tags:['Hair','Keratin','Spa'],        services:['Hair Cut','Keratin Treatment','Hair Spa'],openNow:false, image:'',               lat:12.9698,lng:77.7499,distance:8.6,               nextSlot:'Tomorrow 11 AM',yearsOpen:6 },
  { id:5,  name:'Enrich Salon',           area:'HSR Layout',        address:'Sector 2, 27th Main',         rating:4.6, reviews:738,  priceLevel:3, tags:['Colour','Wax','Facial'],       services:['Hair Colour','Waxing','Facial'],         openNow:true,  image:'',badge:'New',    lat:12.9082,lng:77.6476,distance:4.2,               nextSlot:'Today 6:00 PM', yearsOpen:2 },
  { id:6,  name:'YLG Salon',              area:'Jayanagar',         address:'4th Block, 11th Main',        rating:4.6, reviews:944,  priceLevel:2, tags:['Hair','Threading','Nails'],    services:['Hair Cut','Eyebrow Threading','Manicure'],openNow:true, image:'',               lat:12.9255,lng:77.5845,distance:5.7,               nextSlot:'Today 4:15 PM', yearsOpen:9 },
  { id:7,  name:'Green Trends',           area:'Marathahalli',      address:'Outer Ring Road, SJR Park',   rating:4.5, reviews:412,  priceLevel:2, tags:['Hair','Colour','Wax'],         services:['Hair Cut','Hair Colour','Waxing'],       openNow:true,  image:'',               lat:12.9591,lng:77.6972,distance:6.9,               nextSlot:'Today 5:00 PM', yearsOpen:5 },
  { id:8,  name:'BBLUNT',                 area:'Indiranagar',       address:'100 Feet Rd, Domlur',         rating:4.8, reviews:583,  priceLevel:4, tags:['Hair','Colour','Styling'],     services:['Hair Cut','Balayage','Smoothening'],    openNow:false, image:'',badge:'Trending',lat:12.9612,lng:77.6387,distance:2.8,               nextSlot:'Tomorrow 9 AM', yearsOpen:7 },
  { id:9,  name:'Affinity Salon',         area:'Koramangala',       address:'1st Block, Sarjapur Rd',      rating:4.5, reviews:329,  priceLevel:3, tags:['Hair','Skin','Bridal'],        services:['Hair Cut','Facial','Bridal Makeup'],    openNow:true,  image:'',               lat:12.9342,lng:77.6201,distance:1.8,               nextSlot:'Today 2:30 PM', yearsOpen:4 },
  { id:10, name:'Jawed Habib',            area:'Malleshwaram',      address:'8th Cross, Sampige Rd',       rating:4.4, reviews:677,  priceLevel:2, tags:['Hair','Men\'s','Threading'],   services:['Hair Cut','Head Massage','Eyebrow Threading'],openNow:true,image:'',             lat:13.0033,lng:77.5713,distance:7.3,               nextSlot:'Today 3:30 PM', yearsOpen:11 },
  { id:11, name:'Looks Salon',            area:'Hebbal',            address:'Outer Ring Road, Esteem Mall', rating:4.5, reviews:291,  priceLevel:3, tags:['Hair','Bridal','Skin'],       services:['Hair Cut','Bridal Makeup','Facial'],    openNow:true,  image:'',               lat:13.0358,lng:77.5970,distance:9.1,               nextSlot:'Tomorrow 12 PM',yearsOpen:3 },
  { id:12, name:'Studio 11 Salon & Spa',  area:'Bannerghatta Road', address:'JP Nagar, Phase 1',           rating:4.6, reviews:445,  priceLevel:3, tags:['Spa','Hair','Facial'],         services:['Hair Spa','Facial','Manicure','Pedicure'],openNow:false,image:'',               lat:12.8997,lng:77.5964,distance:10.2,              nextSlot:'Tomorrow 10 AM',yearsOpen:6 },
];