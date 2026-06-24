export interface OwnerSalon {
  id:          number;
  name:        string;
  area:        string;
  address:     string;
  phone:       string;
  email:       string;
  description: string;
  priceLevel:  number;
  lat:         number;
  lng:         number;
  parking:     boolean;
  wifi:        boolean;
  status:      'draft' | 'pending' | 'live';
  ownerId:     number;
  createdAt:   string;
}

export interface OwnerBooking {
  id:         string;
  clientName: string;
  service:    string;
  stylist:    string;
  date:       string;
  time:       string;
  amount:     number;
  status:     'upcoming' | 'completed' | 'cancelled';
}

export interface OwnerStylist {
  id:           number;
  name:         string;
  role:         string;
  experience:   number;
  specialities: string[];
  available:    boolean;
  avatar:       string;
}

export interface OwnerService {
  id:          number;
  name:        string;
  category:    string;
  duration:    number;
  price:       number;
  description: string;
  available:   boolean;
}

export interface SalonRegistrationForm {
  // Step 1
  salonName:   string;
  area:        string;
  address:     string;
  phone:       string;
  email:       string;
  description: string;
  priceLevel:  number;
  // Step 2
  services:    OwnerService[];
  // Step 3
  photos:      string[];
  // Step 4
  hours:       { day: string; open: string; close: string; closed: boolean }[];
}

export const EMPTY_REGISTRATION: SalonRegistrationForm = {
  salonName:   '',
  area:        '',
  address:     '',
  phone:       '',
  email:       '',
  description: '',
  priceLevel:  3,
  services:    [],
  photos:      [],
  hours: [
    { day: 'Monday',    open: '10:00', close: '20:00', closed: false },
    { day: 'Tuesday',   open: '10:00', close: '20:00', closed: false },
    { day: 'Wednesday', open: '10:00', close: '20:00', closed: false },
    { day: 'Thursday',  open: '10:00', close: '20:00', closed: false },
    { day: 'Friday',    open: '10:00', close: '21:00', closed: false },
    { day: 'Saturday',  open: '09:00', close: '21:00', closed: false },
    { day: 'Sunday',    open: '10:00', close: '19:00', closed: false },
  ],
};

// Mock data for owner dashboard
export const MOCK_OWNER_BOOKINGS: OwnerBooking[] = [
  { id: 'LXB001', clientName: 'Ananya Sharma',  service: 'Full Head Balayage', stylist: 'Priya Sharma',  date: 'Today',    time: '3:00 PM',  amount: 6500,  status: 'upcoming'   },
  { id: 'LXB002', clientName: 'Meera Nair',     service: 'Bridal Package',     stylist: 'Divya Nair',    date: 'Today',    time: '5:00 PM',  amount: 25000, status: 'upcoming'   },
  { id: 'LXB003', clientName: 'Priya Reddy',    service: 'Keratin Treatment',  stylist: 'Karan Sethi',   date: 'Yesterday', time: '11:00 AM', amount: 5000,  status: 'completed'  },
  { id: 'LXB004', clientName: 'Sunita Rao',     service: 'Gold Facial',        stylist: 'Anjali Reddy',  date: 'Yesterday', time: '2:00 PM',  amount: 3500,  status: 'completed'  },
  { id: 'LXB005', clientName: 'Kavitha B.',     service: 'Signature Cut',      stylist: 'Priya Sharma',  date: 'Dec 10',   time: '10:00 AM', amount: 1200,  status: 'cancelled'  },
];

export const MOCK_OWNER_STYLISTS: OwnerStylist[] = [
  { id: 1, name: 'Priya Sharma',  role: 'Senior Stylist',     experience: 9,  specialities: ['Balayage', 'Colour'],      available: true,  avatar: 'P' },
  { id: 2, name: 'Rahul Menon',   role: 'Master Colourist',   experience: 12, specialities: ['Colour Correction'],       available: true,  avatar: 'R' },
  { id: 3, name: 'Divya Nair',    role: 'Bridal Specialist',  experience: 7,  specialities: ['Bridal', 'Updo'],          available: false, avatar: 'D' },
  { id: 4, name: 'Karan Sethi',   role: 'Hair Technician',    experience: 5,  specialities: ['Keratin', 'Smoothening'],  available: true,  avatar: 'K' },
  { id: 5, name: 'Anjali Reddy',  role: 'Skin & Hair Expert', experience: 6,  specialities: ['Facial', 'Hair Spa'],      available: true,  avatar: 'A' },
];

export const MOCK_OWNER_SERVICES: OwnerService[] = [
  { id: 1,  name: 'Signature Cut & Blow Dry',  category: 'Hair',   duration: 60,  price: 1200,  description: 'Precision cut with luxe blow-dry', available: true  },
  { id: 2,  name: 'Full Head Balayage',         category: 'Hair',   duration: 180, price: 6500,  description: 'Hand-painted natural colour',       available: true  },
  { id: 3,  name: 'Keratin Treatment',          category: 'Hair',   duration: 150, price: 5000,  description: 'Smoothening, lasts 4-6 months',     available: true  },
  { id: 4,  name: 'Luxury Facial',              category: 'Skin',   duration: 75,  price: 2500,  description: 'Custom facial with premium serums',  available: true  },
  { id: 5,  name: 'Gold Facial',                category: 'Skin',   duration: 90,  price: 3500,  description: '24K gold brightening treatment',     available: false },
  { id: 6,  name: 'Bridal Makeup',              category: 'Bridal', duration: 120, price: 15000, description: 'Full bridal glam with airbrush',     available: true  },
  { id: 7,  name: 'Bridal Package',             category: 'Bridal', duration: 300, price: 25000, description: 'Makeup + hair + trial',              available: true  },
  { id: 8,  name: "Gentlemen's Cut",            category: "Men's",  duration: 45,  price: 800,   description: 'Classic or modern cut with finish',  available: true  },
];