export interface UserProfile {
  id:         number;
  name:       string;
  email:      string;
  phone:      string;
  avatar:     string;
  memberSince:string;
  loyaltyTier: LoyaltyTier;
  loyaltyPoints: number;
  totalBookings: number;
  totalSpent:    number;
}

export type LoyaltyTier = 'Bronze' | 'Silver' | 'Gold' | 'Platinum';

export interface PastBooking {
  id:          string;
  salonName:   string;
  salonArea:   string;
  serviceName: string;
  stylistName: string | null;
  date:        string;
  time:        string;
  total:       number;
  status:      BookingStatus;
  rating?:     number;
  canRebook:   boolean;
}

export type BookingStatus = 'completed' | 'upcoming' | 'cancelled';

export interface SavedSalon {
  id:         number;
  name:       string;
  area:       string;
  rating:     number;
  priceLevel: number;
  tags:       string[];
  openNow:    boolean;
}

export interface StylePreference {
  id:       string;
  label:    string;
  selected: boolean;
}

export type ProfileTab = 'bookings' | 'saved' | 'preferences';

// ── Loyalty tier config ───────────────────────────────
export const LOYALTY_TIERS: Record<LoyaltyTier, {
  color: string; bg: string; minPoints: number; maxPoints: number; perks: string[];
}> = {
  Bronze:   { color:'#CD7F32', bg:'rgba(205,127,50,.1)',  minPoints:0,    maxPoints:500,  perks:['5% off on weekdays','Birthday discount'] },
  Silver:   { color:'#A8A9AD', bg:'rgba(168,169,173,.1)', minPoints:500,  maxPoints:1500, perks:['8% off all services','Priority booking','Free head massage'] },
  Gold:     { color:'#C9A84C', bg:'rgba(201,168,76,.1)',  minPoints:1500, maxPoints:4000, perks:['12% off all services','Free treatment monthly','VIP slots'] },
  Platinum: { color:'#E5E4E2', bg:'rgba(229,228,226,.1)', minPoints:4000, maxPoints:9999, perks:['20% off all services','Free bridal consultation','Dedicated stylist','Home visits'] },
};

// ── Mock data ─────────────────────────────────────────
export const MOCK_USER: UserProfile = {
  id: 1,
  name: 'Ananya Sharma',
  email: 'ananya.sharma@gmail.com',
  phone: '+91 98765 43210',
  avatar: 'A',
  memberSince: 'January 2022',
  loyaltyTier: 'Gold',
  loyaltyPoints: 2340,
  totalBookings: 18,
  totalSpent: 42500,
};

export const MOCK_BOOKINGS: PastBooking[] = [
  { id:'LXB001', salonName:'Toni & Guy',          salonArea:'Koramangala', serviceName:'Full Head Balayage',        stylistName:'Priya Sharma',  date:'Dec 12, 2023', time:'3:00 PM', total:7670,  status:'upcoming',   canRebook:true },
  { id:'LXB002', salonName:'Jean-Claude Biguine', salonArea:'Indiranagar', serviceName:'Keratin Treatment',         stylistName:'Karan Sethi',   date:'Nov 28, 2023', time:'11:00 AM',total:5900,  status:'completed',  rating:5, canRebook:true },
  { id:'LXB003', salonName:'Lakmé Salon Luxe',    salonArea:'MG Road',     serviceName:'Bridal Makeup',             stylistName:'Divya Nair',    date:'Nov 10, 2023', time:'9:00 AM', total:17700, status:'completed',  rating:5, canRebook:false },
  { id:'LXB004', salonName:'Toni & Guy',          salonArea:'Koramangala', serviceName:'Signature Cut & Blow Dry',  stylistName:'Priya Sharma',  date:'Oct 5, 2023',  time:'2:00 PM', total:1416,  status:'completed',  rating:4, canRebook:true },
  { id:'LXB005', salonName:'YLG Salon',           salonArea:'Jayanagar',   serviceName:'Gold Facial',               stylistName:'Anjali Reddy',  date:'Sep 20, 2023', time:'4:30 PM', total:4130,  status:'completed',  rating:5, canRebook:true },
  { id:'LXB006', salonName:'Naturals Luxe',       salonArea:'Whitefield',  serviceName:'Hair Spa Ritual',           stylistName:null,            date:'Sep 2, 2023',  time:'12:00 PM',total:2124,  status:'cancelled',  canRebook:true },
];

export const MOCK_SAVED_SALONS: SavedSalon[] = [
  { id:1,  name:'Toni & Guy',          area:'Koramangala', rating:4.9, priceLevel:4, tags:['Hair','Bridal','Colour'],    openNow:true  },
  { id:2,  name:'Jean-Claude Biguine', area:'Indiranagar', rating:4.8, priceLevel:4, tags:['Hair','Skin','Nails'],       openNow:true  },
  { id:8,  name:'BBLUNT',              area:'Indiranagar', rating:4.8, priceLevel:4, tags:['Hair','Colour','Styling'],   openNow:false },
  { id:3,  name:'Lakmé Salon Luxe',    area:'MG Road',     rating:4.7, priceLevel:3, tags:['Bridal','Makeup','Facial'], openNow:true  },
];

export const MOCK_PREFERENCES: StylePreference[] = [
  { id:'balayage',   label:'Balayage',         selected:true  },
  { id:'keratin',    label:'Keratin',           selected:true  },
  { id:'bridal',     label:'Bridal Styling',    selected:false },
  { id:'facial',     label:'Facial & Skin',     selected:true  },
  { id:'haircut',    label:'Precision Cut',     selected:true  },
  { id:'colour',     label:'Hair Colour',       selected:false },
  { id:'spa',        label:'Hair Spa',          selected:true  },
  { id:'manicure',   label:'Manicure & Nails',  selected:false },
  { id:'massage',    label:'Head Massage',      selected:false },
  { id:'mens',       label:"Men's Grooming",    selected:false },
];