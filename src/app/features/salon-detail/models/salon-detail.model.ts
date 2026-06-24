export interface StylistModel {
  id: number;
  name: string;
  role: string;
  experience: number;
  rating: number;
  reviews: number;
  specialities: string[];
  avatar: string;
}

export interface ServiceItem {
  id: number;
  name: string;
  duration: number;
  price: number;
  description: string;
  popular?: boolean;
}

export interface ServiceCategory {
  id: string;
  label: string;
  services: ServiceItem[];
}

export interface TimeSlot {
  time: string;
  available: boolean;
  peak?: boolean;
}

export interface ReviewModel {
  id: number;
  author: string;
  area: string;
  rating: number;
  date: string;
  text: string;
  service: string;
  stylist?: string;
  helpful: number;
}

export interface HoursEntry {
  day: string;
  open: string;
  close: string;
  closed?: boolean;
}

export interface SalonDetail {
  id: number;
  name: string;
  tagline: string;
  description: string;
  area: string;
  address: string;
  phone: string;
  email: string;
  rating: number;
  reviews: number;
  priceLevel: number;
  openNow: boolean;
  yearsOpen: number;
  badge?: string;
  specialities: string[];
  awards: string[];
  instagram?: string;
  images: string[];
  stylists: StylistModel[];
  serviceCategories: ServiceCategory[];
  hours: HoursEntry[];
  lat: number;
  lng: number;
  parking: boolean;
  wifi: boolean;
  reviewList: ReviewModel[];
}

// ── Shared hours templates ───────────────────────────
const STANDARD_HOURS: HoursEntry[] = [
  { day: 'Monday',    open: '10:00 AM', close: '8:00 PM' },
  { day: 'Tuesday',   open: '10:00 AM', close: '8:00 PM' },
  { day: 'Wednesday', open: '10:00 AM', close: '8:00 PM' },
  { day: 'Thursday',  open: '10:00 AM', close: '9:00 PM' },
  { day: 'Friday',    open: '10:00 AM', close: '9:00 PM' },
  { day: 'Saturday',  open: '9:00 AM',  close: '9:00 PM' },
  { day: 'Sunday',    open: '10:00 AM', close: '7:00 PM' },
];

const EXTENDED_HOURS: HoursEntry[] = [
  { day: 'Monday',    open: '9:00 AM',  close: '9:00 PM' },
  { day: 'Tuesday',   open: '9:00 AM',  close: '9:00 PM' },
  { day: 'Wednesday', open: '9:00 AM',  close: '9:00 PM' },
  { day: 'Thursday',  open: '9:00 AM',  close: '9:00 PM' },
  { day: 'Friday',    open: '9:00 AM',  close: '10:00 PM' },
  { day: 'Saturday',  open: '8:30 AM',  close: '10:00 PM' },
  { day: 'Sunday',    open: '9:00 AM',  close: '8:00 PM' },
];

// ── Mock data ────────────────────────────────────────

// 1 — Toni & Guy (unchanged)
export const MOCK_SALON_DETAIL: SalonDetail = {
  id: 1,
  name: 'Toni & Guy',
  tagline: 'Where precision meets artistry',
  description: 'Toni & Guy Koramangala is Bangalore\'s flagship luxury hair studio, offering world-class cutting, colouring, and styling services. With over 8 years of excellence in the heart of Koramangala, our London-trained stylists bring global trends to Bangalore with a personalised touch.',
  area: 'Koramangala',
  address: '5th Block, 80 Feet Road, Koramangala, Bangalore — 560095',
  phone: '+91 98765 43210',
  email: 'koramangala@toniandguy.in',
  rating: 4.9,
  reviews: 842,
  priceLevel: 4,
  openNow: true,
  yearsOpen: 8,
  badge: 'Top Rated',
  specialities: ['Balayage', 'Keratin', 'Bridal Styling', 'Colour Correction', 'Hair Spa', 'Precision Cut'],
  awards: ['Best Luxury Salon Bangalore 2023', 'Vogue Beauty Award 2022'],
  instagram: '@toniandguy_blr',
  images: ['salon1a.jpg', 'salon1b.jpg', 'salon1c.jpg', 'salon1d.jpg', 'salon1e.jpg'],
  lat: 12.9352, lng: 77.6245,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Priya Sharma',  role: 'Senior Stylist',     experience: 9,  rating: 4.9, reviews: 312, specialities: ['Balayage', 'Colour'],            avatar: 'P' },
    { id: 2, name: 'Rahul Menon',   role: 'Master Colourist',   experience: 12, rating: 4.8, reviews: 278, specialities: ['Colour Correction', 'Ombre'],     avatar: 'R' },
    { id: 3, name: 'Divya Nair',    role: 'Bridal Specialist',  experience: 7,  rating: 4.9, reviews: 195, specialities: ['Bridal', 'Updo', 'Makeup'],       avatar: 'D' },
    { id: 4, name: 'Karan Sethi',   role: 'Hair Technician',    experience: 5,  rating: 4.7, reviews: 143, specialities: ['Keratin', 'Smoothening'],         avatar: 'K' },
    { id: 5, name: 'Anjali Reddy',  role: 'Skin & Hair Expert', experience: 6,  rating: 4.8, reviews: 167, specialities: ['Facial', 'Hair Spa'],             avatar: 'A' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1,  name: 'Signature Cut & Blow Dry', duration: 60,  price: 1200,  description: 'Precision cut with luxe blow-dry finish', popular: true },
        { id: 2,  name: 'Full Head Balayage',        duration: 180, price: 6500,  description: 'Hand-painted natural-looking colour',     popular: true },
        { id: 3,  name: 'Global Colour',             duration: 120, price: 3500,  description: 'Full head single-process colour' },
        { id: 4,  name: 'Keratin Treatment',         duration: 150, price: 5000,  description: 'Smoothening + frizz control, lasts 4–6 months', popular: true },
        { id: 5,  name: 'Hair Spa Ritual',           duration: 60,  price: 1800,  description: 'Deep conditioning + scalp massage' },
        { id: 6,  name: 'Smoothening Treatment',     duration: 180, price: 7000,  description: 'Permanent straightening system' },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 7,  name: 'Luxury Facial',   duration: 75, price: 2500, description: 'Custom facial with premium serums', popular: true },
        { id: 8,  name: 'Gold Facial',     duration: 90, price: 3500, description: '24K gold infusion brightening treatment' },
        { id: 9,  name: 'Cleanup & Glow', duration: 45, price: 1200, description: 'Express cleanup with vitamin C serum' },
        { id: 10, name: 'Eyebrow Shaping', duration: 20, price: 400,  description: 'Expert thread + wax sculpting' },
      ],
    },
    {
      id: 'bridal', label: 'Bridal',
      services: [
        { id: 11, name: 'Bridal Makeup',         duration: 120, price: 15000, description: 'Full bridal glam with airbrush finish',       popular: true },
        { id: 12, name: 'Bridal Hair Styling',   duration: 90,  price: 8000,  description: 'Updo or open style with extensions option' },
        { id: 13, name: 'Bridal Package',        duration: 300, price: 25000, description: 'Makeup + hair + trial + touch-up kit',        popular: true },
        { id: 14, name: 'Mehendi & Accessories', duration: 60,  price: 3500,  description: 'Coordinated bridal jewellery styling' },
      ],
    },
    {
      id: 'mens', label: "Men's",
      services: [
        { id: 15, name: "Gentlemen's Cut",      duration: 45, price: 800,  description: 'Classic or modern cut with finish', popular: true },
        { id: 16, name: 'Beard Styling & Trim', duration: 30, price: 500,  description: 'Expert beard sculpt with hot towel' },
        { id: 17, name: 'Head Massage',         duration: 30, price: 600,  description: 'Deep scalp massage with oils' },
        { id: 18, name: "Men's Facial",         duration: 60, price: 1800, description: 'Oil-control + deep cleanse facial' },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Ananya S.',  area: 'Koramangala', rating: 5, date: 'Dec 2023', text: 'The balayage turned out absolutely stunning. Priya understood exactly what I wanted — the colour is natural yet transformative. Will never go anywhere else.', service: 'Full Head Balayage',        stylist: 'Priya Sharma', helpful: 24 },
    { id: 2, author: 'Meera T.',   area: 'Indiranagar', rating: 5, date: 'Nov 2023', text: 'Bridal package was worth every rupee. Divya is an absolute genius with bridal styling. I felt like a queen on my wedding day.',                              service: 'Bridal Package',             stylist: 'Divya Nair',   helpful: 31 },
    { id: 3, author: 'Rohini K.',  area: 'HSR Layout',  rating: 5, date: 'Nov 2023', text: 'Keratin treatment was phenomenal. Zero frizz for 5 months and counting. The experience from start to finish felt incredibly luxurious.',                     service: 'Keratin Treatment',          stylist: 'Karan Sethi',  helpful: 18 },
    { id: 4, author: 'Shreya N.',  area: 'Whitefield',  rating: 4, date: 'Oct 2023', text: 'Lovely ambience and professional staff. The hair spa was relaxing and my hair feels incredible. Slightly long wait time but worth it.',                      service: 'Hair Spa Ritual',                             helpful: 12 },
    { id: 5, author: 'Kavitha B.', area: 'MG Road',     rating: 5, date: 'Oct 2023', text: 'The gold facial left my skin glowing for a week. Anjali was so knowledgeable about skincare. Already booked my next appointment.',                          service: 'Gold Facial',                stylist: 'Anjali Reddy', helpful: 19 },
    { id: 6, author: 'Pooja L.',   area: 'Jayanagar',   rating: 5, date: 'Sep 2023', text: 'Came in for a cut and blowdry — walked out feeling like a different person. The precision and attention to detail is unmatched in Bangalore.',             service: 'Signature Cut & Blow Dry',                    helpful: 9  },
  ],
};

// 2 — Jean-Claude Biguine
const SALON_2: SalonDetail = {
  id: 2,
  name: 'Jean-Claude Biguine',
  tagline: 'Parisian elegance, Bangalore soul',
  description: 'Jean-Claude Biguine brings the iconic French salon experience to Indiranagar. Known for cutting-edge hair techniques, advanced skin treatments, and a nail bar that sets trends across the city. Our Paris-certified stylists deliver impeccable results every visit.',
  area: 'Indiranagar',
  address: '12th Main, 100 Feet Road, Indiranagar, Bangalore — 560038',
  phone: '+91 98234 56789',
  email: 'indiranagar@jcbiguine.in',
  rating: 4.8,
  reviews: 631,
  priceLevel: 4,
  openNow: true,
  yearsOpen: 12,
  badge: 'Premium',
  specialities: ['French Techniques', 'Skin Treatments', 'Nail Art', 'Hair Colour', 'Facial', 'Manicure'],
  awards: ['Best International Salon Bangalore 2023', 'Elle Beauty Award 2022'],
  instagram: '@jcbiguine_blr',
  images: ['salon2a.jpg', 'salon2b.jpg', 'salon2c.jpg', 'salon2d.jpg'],
  lat: 12.9784, lng: 77.6408,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Sophie Laurent',  role: 'Creative Director',   experience: 15, rating: 4.9, reviews: 289, specialities: ['French Cut', 'Colour'],        avatar: 'S' },
    { id: 2, name: 'Vikram Das',      role: 'Senior Colourist',    experience: 10, rating: 4.8, reviews: 201, specialities: ['Highlights', 'Balayage'],      avatar: 'V' },
    { id: 3, name: 'Nisha Kapoor',    role: 'Skin Therapist',      experience: 8,  rating: 4.9, reviews: 174, specialities: ['Facial', 'Skin Treatments'],   avatar: 'N' },
    { id: 4, name: 'Arun Pillai',     role: 'Nail Artist',         experience: 6,  rating: 4.8, reviews: 132, specialities: ['Nail Art', 'Gel', 'Chrome'],   avatar: 'A' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'French Cut & Style',    duration: 75,  price: 1500, description: 'Iconic Parisian cut tailored to your face shape',       popular: true },
        { id: 2, name: 'Highlights & Lowlights', duration: 150, price: 5500, description: 'Multi-tonal dimension for depth and movement',          popular: true },
        { id: 3, name: 'Colour Melt',           duration: 120, price: 4500, description: 'Seamless root-to-tip colour transition' },
        { id: 4, name: 'Keratin Liss Extreme',  duration: 150, price: 5500, description: 'Professional smoothening with zero damage',              popular: true },
        { id: 5, name: 'Scalp Ritual',          duration: 60,  price: 2000, description: 'Detox scalp treatment with hot oil massage' },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 6, name: 'Hydrafacial',      duration: 60,  price: 3500, description: 'Clinically proven 3-step hydration treatment',  popular: true },
        { id: 7, name: 'Anti-Aging Lift',  duration: 90,  price: 5000, description: 'Firming and contouring facial with peptide mask' },
        { id: 8, name: 'Glass Skin Facial', duration: 75,  price: 4000, description: 'Korean-inspired luminosity treatment',          popular: true },
        { id: 9, name: 'Brightening Peel', duration: 45,  price: 2500, description: 'Gentle chemical exfoliation for even skin tone' },
      ],
    },
    {
      id: 'nails', label: 'Nails',
      services: [
        { id: 10, name: 'Gel Manicure',     duration: 60,  price: 1200, description: 'Long-lasting gel polish with cuticle care',    popular: true },
        { id: 11, name: 'Chrome Ombre',     duration: 75,  price: 1800, description: 'Holographic chrome over gradient gel',         popular: true },
        { id: 12, name: 'Nail Art Session', duration: 90,  price: 2500, description: 'Bespoke nail art — any design, any occasion' },
        { id: 13, name: 'Spa Pedicure',     duration: 75,  price: 1500, description: 'Relaxing foot soak + scrub + gel polish' },
      ],
    },
  ],
  hours: EXTENDED_HOURS,
  reviewList: [
    { id: 1, author: 'Preethi M.',  area: 'Indiranagar', rating: 5, date: 'Dec 2023', text: 'Sophie is an absolute wizard with the scissors. The French cut she gave me is the best haircut I\'ve had in years. Gets better every visit.', service: 'French Cut & Style',   stylist: 'Sophie Laurent', helpful: 33 },
    { id: 2, author: 'Lakshmi R.',  area: 'Koramangala', rating: 5, date: 'Nov 2023', text: 'The hydrafacial left my skin absolutely glowing. Nisha recommended the perfect treatment for my skin type. Highly recommend.', service: 'Hydrafacial', stylist: 'Nisha Kapoor', helpful: 27 },
    { id: 3, author: 'Tanya B.',    area: 'Whitefield',  rating: 5, date: 'Nov 2023', text: 'Chrome ombre nails — everyone keeps asking where I got them done! Arun is incredibly talented and so precise.', service: 'Chrome Ombre', stylist: 'Arun Pillai', helpful: 21 },
    { id: 4, author: 'Shreya K.',   area: 'HSR Layout',  rating: 4, date: 'Oct 2023', text: 'Beautiful salon with a Parisian vibe. The colour melt Vikram did was exactly what I envisioned. Will return for sure.', service: 'Colour Melt', stylist: 'Vikram Das', helpful: 15 },
  ],
};

// 3 — Lakmé Salon Luxe
const SALON_3: SalonDetail = {
  id: 3,
  name: 'Lakmé Salon Luxe',
  tagline: 'India\'s most trusted beauty destination',
  description: 'Lakmé Salon Luxe on MG Road is Bangalore\'s premium flagship of India\'s most celebrated beauty brand. With 15 years of expertise, our certified artists deliver flawless bridal makeup, expert facials, and professional styling using exclusive Lakmé products.',
  area: 'MG Road',
  address: 'Brigade Road, Level 2, MG Road, Bangalore — 560001',
  phone: '+91 80 4112 3456',
  email: 'mgroad@lakme-salon.com',
  rating: 4.7,
  reviews: 1203,
  priceLevel: 3,
  openNow: true,
  yearsOpen: 15,
  badge: undefined,
  specialities: ['Bridal Makeup', 'Facial', 'Waxing', 'Hair Colour', 'Nail Art', 'Eyebrows'],
  awards: ['Best Bridal Salon Bangalore 2023', 'Times Beauty Award 2021', 'Lakmé Gold Salon 2022'],
  instagram: '@lakme_mgroad_blr',
  images: ['salon3a.jpg', 'salon3b.jpg', 'salon3c.jpg', 'salon3d.jpg'],
  lat: 12.9757, lng: 77.6011,
  parking: false, wifi: true,
  stylists: [
    { id: 1, name: 'Rekha Iyer',     role: 'Bridal Makeup Artist',  experience: 14, rating: 4.9, reviews: 412, specialities: ['Bridal', 'Airbrush', 'HD Makeup'], avatar: 'R' },
    { id: 2, name: 'Sunita Verma',   role: 'Senior Skin Therapist', experience: 11, rating: 4.8, reviews: 298, specialities: ['Facial', 'Waxing', 'Cleanup'],     avatar: 'S' },
    { id: 3, name: 'Pooja Menon',    role: 'Hair Colour Expert',    experience: 9,  rating: 4.7, reviews: 231, specialities: ['Hair Colour', 'Highlights'],       avatar: 'P' },
    { id: 4, name: 'Deepa Rao',      role: 'Nail Technician',       experience: 6,  rating: 4.8, reviews: 178, specialities: ['Nail Art', 'Gel', 'Extensions'],   avatar: 'D' },
  ],
  serviceCategories: [
    {
      id: 'bridal', label: 'Bridal',
      services: [
        { id: 1, name: 'Lakmé Bridal Signature',  duration: 180, price: 18000, description: 'Full bridal glam with HD + airbrush combo',          popular: true },
        { id: 2, name: 'Engagement Makeup',        duration: 120, price: 8000,  description: 'Fresh dewy look for engagement ceremonies',          popular: true },
        { id: 3, name: 'Mehendi Makeup',           duration: 90,  price: 5000,  description: 'Vibrant ethnic look for mehendi functions' },
        { id: 4, name: 'Bridal Hair & Makeup Pkg', duration: 300, price: 28000, description: 'Complete bridal transformation with trial',          popular: true },
      ],
    },
    {
      id: 'skin', label: 'Skin & Face',
      services: [
        { id: 5,  name: 'Lakmé Absolute Facial', duration: 75,  price: 2200, description: 'Signature glow facial with Lakmé pro products',       popular: true },
        { id: 6,  name: 'De-Tan Treatment',      duration: 45,  price: 1200, description: 'Instant tan removal with brightening mask' },
        { id: 7,  name: 'Fruit Facial',          duration: 60,  price: 1500, description: 'Vitamin-rich brightening and hydration facial' },
        { id: 8,  name: 'Eyebrow Threading',     duration: 20,  price: 150,  description: 'Expert precision threading and shaping',              popular: true },
        { id: 9,  name: 'Upper Lip & Chin',      duration: 10,  price: 80,   description: 'Quick and precise hair removal' },
      ],
    },
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 10, name: 'Cut & Blow Dry',        duration: 60,  price: 900,  description: 'Precision cut styled to perfection',                  popular: true },
        { id: 11, name: 'Global Hair Colour',    duration: 120, price: 2800, description: 'Full head colour with Lakmé Absolute Argan Oil' },
        { id: 12, name: 'Highlights',            duration: 120, price: 3500, description: 'Foil highlights for dimension and shine' },
        { id: 13, name: 'Hair Spa',              duration: 60,  price: 1400, description: 'Nourishing treatment for damaged hair' },
      ],
    },
    {
      id: 'waxing', label: 'Waxing',
      services: [
        { id: 14, name: 'Full Arms Wax',         duration: 30,  price: 400,  description: 'Smooth skin with Rica or chocolate wax' },
        { id: 15, name: 'Full Legs Wax',         duration: 45,  price: 600,  description: 'Long-lasting smoothness with premium wax',            popular: true },
        { id: 16, name: 'Full Body Wax',         duration: 120, price: 2000, description: 'Complete body waxing with soothing aloe finish' },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Meghna S.',  area: 'MG Road',     rating: 5, date: 'Dec 2023', text: 'Rekha did my bridal makeup and I have never felt more beautiful. The airbrush finish was flawless and lasted all day and night. Absolutely worth it.',  service: 'Lakmé Bridal Signature', stylist: 'Rekha Iyer',   helpful: 45 },
    { id: 2, author: 'Divya P.',   area: 'Koramangala', rating: 5, date: 'Nov 2023', text: 'The Lakmé Absolute Facial is my go-to monthly ritual. Sunita always customises it to my skin. My skin has genuinely transformed over 6 months.',       service: 'Lakmé Absolute Facial', stylist: 'Sunita Verma',  helpful: 29 },
    { id: 3, author: 'Archana K.', area: 'Jayanagar',   rating: 4, date: 'Nov 2023', text: 'Great service for eyebrow threading — the shape was perfect. Wait times can be long on weekends. Recommend booking in advance.',                       service: 'Eyebrow Threading',                              helpful: 14 },
    { id: 4, author: 'Nandini T.', area: 'Whitefield',  rating: 5, date: 'Oct 2023', text: 'Pooja gave me the most beautiful highlights. I wanted something subtle and she nailed it. Very professional and thorough.',                              service: 'Highlights',            stylist: 'Pooja Menon',   helpful: 22 },
  ],
};

// 4 — Naturals Luxe
const SALON_4: SalonDetail = {
  id: 4,
  name: 'Naturals Luxe',
  tagline: 'Nature-inspired luxury for your hair and skin',
  description: 'Naturals Luxe at Forum Value Mall brings the trusted Naturals experience to Whitefield with a luxury twist. Specialising in keratin, hair spa, and holistic beauty treatments using natural and organic product lines.',
  area: 'Whitefield',
  address: 'Forum Value Mall, Level 1, Whitefield, Bangalore — 560066',
  phone: '+91 98456 12345',
  email: 'whitefield@naturals-luxe.com',
  rating: 4.7,
  reviews: 519,
  priceLevel: 3,
  openNow: false,
  yearsOpen: 6,
  badge: undefined,
  specialities: ['Keratin Treatment', 'Hair Spa', 'Organic Facials', 'Smoothening', 'Hair Colour'],
  awards: ['Best Organic Salon East Bangalore 2023'],
  instagram: '@naturals_whitefield',
  images: ['salon4a.jpg', 'salon4b.jpg', 'salon4c.jpg'],
  lat: 12.9698, lng: 77.7499,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Kavitha Rajan',  role: 'Senior Hair Stylist',   experience: 10, rating: 4.8, reviews: 224, specialities: ['Keratin', 'Hair Spa', 'Colour'],   avatar: 'K' },
    { id: 2, name: 'Madhuri Pai',    role: 'Skin & Wellness Expert', experience: 7,  rating: 4.7, reviews: 168, specialities: ['Organic Facial', 'De-Tan'],        avatar: 'M' },
    { id: 3, name: 'Suresh Kumar',   role: 'Colour Technician',      experience: 6,  rating: 4.6, reviews: 127, specialities: ['Global Colour', 'Highlights'],     avatar: 'S' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Cysteine Keratin',       duration: 150, price: 4500, description: 'Formaldehyde-free smoothening, lasts 5 months',   popular: true },
        { id: 2, name: 'Organic Hair Spa',       duration: 75,  price: 2000, description: 'Deep nourishing mask with Argan and Keratin oils', popular: true },
        { id: 3, name: 'Hair Cut & Style',       duration: 60,  price: 800,  description: 'Modern cuts tailored to your lifestyle' },
        { id: 4, name: 'Ammonia-Free Colour',    duration: 120, price: 3000, description: 'Gentle colour with zero ammonia damage',           popular: true },
        { id: 5, name: 'Scalp Detox Treatment',  duration: 60,  price: 1800, description: 'Charcoal cleanse + botanical oil massage' },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 6, name: 'Organic Glow Facial', duration: 75,  price: 2000, description: 'Plant-based brightening facial', popular: true },
        { id: 7, name: 'De-Tan & Brightening', duration: 45,  price: 1000, description: 'Natural tan removal with turmeric & honey mask' },
        { id: 8, name: 'Anti-Pigmentation Facial', duration: 90, price: 3000, description: 'Targeted treatment for dark spots and uneven tone' },
      ],
    },
  ],
  hours: [
    { day: 'Monday',    open: '10:00 AM', close: '9:00 PM' },
    { day: 'Tuesday',   open: '10:00 AM', close: '9:00 PM' },
    { day: 'Wednesday', open: '10:00 AM', close: '9:00 PM' },
    { day: 'Thursday',  open: '10:00 AM', close: '9:00 PM' },
    { day: 'Friday',    open: '10:00 AM', close: '9:00 PM' },
    { day: 'Saturday',  open: '10:00 AM', close: '9:00 PM' },
    { day: 'Sunday',    open: '11:00 AM', close: '8:00 PM' },
  ],
  reviewList: [
    { id: 1, author: 'Roshni A.',  area: 'Whitefield',  rating: 5, date: 'Dec 2023', text: 'The cysteine keratin treatment was life-changing. My hair is frizz-free even in monsoon. Kavitha was incredibly thorough and explained every step.', service: 'Cysteine Keratin', stylist: 'Kavitha Rajan', helpful: 28 },
    { id: 2, author: 'Shalini B.', area: 'Marathahalli', rating: 5, date: 'Nov 2023', text: 'Organic facial was so relaxing and my skin looked radiant for a week. Love that they use natural products — no harsh chemicals.', service: 'Organic Glow Facial', stylist: 'Madhuri Pai', helpful: 19 },
    { id: 3, author: 'Geetha K.',  area: 'Whitefield',  rating: 4, date: 'Oct 2023', text: 'Good salon with friendly staff. The hair spa was lovely. Parking is easy at Forum Mall. Slightly pricey but the quality is worth it.', service: 'Organic Hair Spa', helpful: 11 },
  ],
};

// 5 — Enrich Salon
const SALON_5: SalonDetail = {
  id: 5,
  name: 'Enrich Salon',
  tagline: 'Enriching lives, one look at a time',
  description: 'Enrich Salon in HSR Layout brings professional beauty services with a warm, welcoming atmosphere. Known for excellent hair colour, waxing, and facials at competitive prices. A favourite among HSR\'s young professional crowd.',
  area: 'HSR Layout',
  address: 'Sector 2, 27th Main, HSR Layout, Bangalore — 560102',
  phone: '+91 98120 67890',
  email: 'hsrlayout@enrich.in',
  rating: 4.6,
  reviews: 738,
  priceLevel: 3,
  openNow: true,
  yearsOpen: 2,
  badge: 'New',
  specialities: ['Hair Colour', 'Waxing', 'Facial', 'Balayage', 'Manicure', 'Pedicure'],
  awards: ['Best New Salon HSR Layout 2023'],
  instagram: '@enrich_hsr',
  images: ['salon5a.jpg', 'salon5b.jpg', 'salon5c.jpg'],
  lat: 12.9082, lng: 77.6476,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Ritu Sharma',   role: 'Senior Hair Colourist', experience: 8,  rating: 4.8, reviews: 198, specialities: ['Balayage', 'Colour', 'Highlights'], avatar: 'R' },
    { id: 2, name: 'Smitha Nair',   role: 'Skin Specialist',       experience: 6,  rating: 4.7, reviews: 154, specialities: ['Facial', 'Waxing', 'Cleanup'],      avatar: 'S' },
    { id: 3, name: 'Tarun Bhat',    role: 'Hair Stylist',          experience: 4,  rating: 4.6, reviews: 112, specialities: ['Hair Cut', 'Styling'],              avatar: 'T' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Hair Cut & Blow Dry',  duration: 60,  price: 700,  description: 'Fresh cut with professional finish',               popular: true },
        { id: 2, name: 'Balayage',             duration: 180, price: 5500, description: 'Sun-kissed hand-painted colour',                   popular: true },
        { id: 3, name: 'Global Colour',        duration: 120, price: 2500, description: 'Full head colour with premium dye' },
        { id: 4, name: 'Highlights',           duration: 90,  price: 3000, description: 'Dimensional foil highlights' },
        { id: 5, name: 'Keratin Treatment',    duration: 150, price: 4000, description: 'Smooth, frizz-free hair for 4 months',            popular: true },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 6, name: 'Classic Facial',    duration: 60,  price: 1500, description: 'Customised facial for your skin type',             popular: true },
        { id: 7, name: 'Vitamin C Facial',  duration: 75,  price: 2000, description: 'Brightening and glow-boosting treatment' },
        { id: 8, name: 'Cleanup',           duration: 30,  price: 600,  description: 'Express skin cleanup with scrub and mask' },
      ],
    },
    {
      id: 'waxing', label: 'Waxing & Nails',
      services: [
        { id: 9,  name: 'Full Arms Wax',   duration: 30,  price: 350,  description: 'Smooth wax with soothing lotion',                  popular: true },
        { id: 10, name: 'Full Legs Wax',   duration: 45,  price: 500,  description: 'Long-lasting leg waxing' },
        { id: 11, name: 'Gel Manicure',    duration: 60,  price: 900,  description: 'Gel polish manicure with nail shaping',            popular: true },
        { id: 12, name: 'Spa Pedicure',    duration: 60,  price: 900,  description: 'Relaxing foot treatment with gel polish' },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Aditi K.',   area: 'HSR Layout',  rating: 5, date: 'Dec 2023', text: 'Ritu did the most beautiful balayage on my dark hair. The transition is so natural. Great price point for the quality you get.', service: 'Balayage', stylist: 'Ritu Sharma', helpful: 22 },
    { id: 2, author: 'Bhavna R.',  area: 'Koramangala', rating: 4, date: 'Nov 2023', text: 'Lovely new salon with a fresh vibe. Facials are excellent and the staff are very friendly. A bit of a wait on Saturdays.', service: 'Classic Facial', helpful: 13 },
    { id: 3, author: 'Poorna T.',  area: 'HSR Layout',  rating: 5, date: 'Oct 2023', text: 'My go-to for gel nails in HSR. The manicure lasts over 3 weeks. Smitha does an incredible job on waxing too.', service: 'Gel Manicure', stylist: 'Smitha Nair', helpful: 17 },
  ],
};

// 6 — YLG Salon
const SALON_6: SalonDetail = {
  id: 6,
  name: 'YLG Salon',
  tagline: 'You Look Good — always',
  description: 'YLG Salon in Jayanagar is one of Bangalore\'s most popular neighbourhood salons. With 9 years of community trust, YLG offers exceptional haircuts, precision threading, and nail services at accessible prices without compromising on quality.',
  area: 'Jayanagar',
  address: '4th Block, 11th Main, Jayanagar, Bangalore — 560011',
  phone: '+91 99000 45678',
  email: 'jayanagar@ylgsalon.com',
  rating: 4.6,
  reviews: 944,
  priceLevel: 2,
  openNow: true,
  yearsOpen: 9,
  badge: undefined,
  specialities: ['Hair Cut', 'Eyebrow Threading', 'Manicure', 'Pedicure', 'Facial', 'Waxing'],
  awards: ['Most Loved Salon Jayanagar 2022', 'Customer Choice Award 2021'],
  instagram: '@ylg_jayanagar',
  images: ['salon6a.jpg', 'salon6b.jpg', 'salon6c.jpg'],
  lat: 12.9255, lng: 77.5845,
  parking: false, wifi: true,
  stylists: [
    { id: 1, name: 'Latha Krishnan', role: 'Senior Stylist',         experience: 12, rating: 4.8, reviews: 321, specialities: ['Hair Cut', 'Threading', 'Styling'], avatar: 'L' },
    { id: 2, name: 'Preethi Shetty', role: 'Nail & Beauty Expert',   experience: 7,  rating: 4.7, reviews: 243, specialities: ['Manicure', 'Pedicure', 'Facial'],   avatar: 'P' },
    { id: 3, name: 'Mohan Das',      role: 'Hair Colour Specialist',  experience: 6,  rating: 4.6, reviews: 189, specialities: ['Colour', 'Highlights'],             avatar: 'M' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Ladies Cut & Blow Dry', duration: 60,  price: 500,  description: 'Classic cut with professional styling',            popular: true },
        { id: 2, name: "Men's Hair Cut",         duration: 30,  price: 250,  description: 'Clean, modern cut for gentlemen',                  popular: true },
        { id: 3, name: 'Hair Colour',            duration: 120, price: 2000, description: 'Full head colour with quality dye' },
        { id: 4, name: 'Highlights',             duration: 90,  price: 2500, description: 'Foil highlights for shine and dimension' },
        { id: 5, name: 'Hair Spa',               duration: 60,  price: 1000, description: 'Conditioning treatment with hot oil massage' },
      ],
    },
    {
      id: 'nails', label: 'Nails',
      services: [
        { id: 6,  name: 'Regular Manicure',  duration: 40,  price: 350,  description: 'Nail shaping, cuticle care, polish',                popular: true },
        { id: 7,  name: 'Gel Manicure',      duration: 60,  price: 700,  description: 'Long-lasting gel polish with UV finish',            popular: true },
        { id: 8,  name: 'Regular Pedicure',  duration: 45,  price: 450,  description: 'Foot soak, scrub, and polish' },
        { id: 9,  name: 'Spa Pedicure',      duration: 60,  price: 800,  description: 'Premium pedicure with mask and massage' },
      ],
    },
    {
      id: 'skin', label: 'Threading & Skin',
      services: [
        { id: 10, name: 'Eyebrow Threading', duration: 10,  price: 80,   description: 'Expert precision threading',                       popular: true },
        { id: 11, name: 'Full Face Threading', duration: 25, price: 200,  description: 'Complete facial hair threading' },
        { id: 12, name: 'Classic Facial',    duration: 60,  price: 1200, description: 'Refreshing facial for healthy skin' },
        { id: 13, name: 'Cleanup',           duration: 30,  price: 500,  description: 'Express skin cleanup and glow' },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Sangeetha M.', area: 'Jayanagar',   rating: 5, date: 'Dec 2023', text: 'Latha aunty has been doing my eyebrows for 5 years. Nobody else gets the shape as perfect as she does. This place feels like home.',  service: 'Eyebrow Threading', stylist: 'Latha Krishnan', helpful: 38 },
    { id: 2, author: 'Rashmi P.',    area: 'Banashankari', rating: 5, date: 'Nov 2023', text: 'Best gel nails for the price in South Bangalore. Preethi is so meticulous. The polish lasts nearly a month without chipping.',         service: 'Gel Manicure',      stylist: 'Preethi Shetty', helpful: 24 },
    { id: 3, author: 'Usha D.',      area: 'Jayanagar',   rating: 4, date: 'Oct 2023', text: 'Great neighbourhood salon with consistent quality. Hair spa left my hair silky. Can get crowded on weekends — book ahead.',            service: 'Hair Spa',                                     helpful: 16 },
  ],
};

// 7 — Green Trends
const SALON_7: SalonDetail = {
  id: 7,
  name: 'Green Trends',
  tagline: 'Trending styles at honest prices',
  description: 'Green Trends on Outer Ring Road brings contemporary hair and beauty trends to Marathahalli at accessible prices. Known for consistent quality hair colour and waxing services, this salon caters to Bangalore\'s tech-savvy working professionals.',
  area: 'Marathahalli',
  address: 'Outer Ring Road, SJR Park, Marathahalli, Bangalore — 560037',
  phone: '+91 97400 23456',
  email: 'marathahalli@greentrends.in',
  rating: 4.5,
  reviews: 412,
  priceLevel: 2,
  openNow: true,
  yearsOpen: 5,
  badge: undefined,
  specialities: ['Hair Cut', 'Hair Colour', 'Waxing', 'Facial', 'Balayage'],
  awards: [],
  instagram: '@greentrends_marathahalli',
  images: ['salon7a.jpg', 'salon7b.jpg'],
  lat: 12.9591, lng: 77.6972,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Anitha R.',    role: 'Senior Hair Stylist',  experience: 8,  rating: 4.6, reviews: 187, specialities: ['Hair Cut', 'Colour', 'Balayage'], avatar: 'A' },
    { id: 2, name: 'Sindhu M.',    role: 'Beauty Specialist',    experience: 5,  rating: 4.5, reviews: 143, specialities: ['Waxing', 'Facial', 'Threading'],  avatar: 'S' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Hair Cut',          duration: 45,  price: 400,  description: 'Stylish cut for any hair type',   popular: true },
        { id: 2, name: 'Global Colour',     duration: 120, price: 2000, description: 'Full head colour with ammonia-free dye' },
        { id: 3, name: 'Balayage',          duration: 180, price: 4500, description: 'Freehand painted highlights',     popular: true },
        { id: 4, name: 'Wax Smoothening',   duration: 120, price: 3500, description: 'Temporary straightening treatment' },
      ],
    },
    {
      id: 'skin', label: 'Skin & Waxing',
      services: [
        { id: 5, name: 'Facial',          duration: 60,  price: 1000, description: 'Refreshing facial with herbal products', popular: true },
        { id: 6, name: 'Waxing - Arms',   duration: 30,  price: 280,  description: 'Smooth arms with Rica wax' },
        { id: 7, name: 'Waxing - Legs',   duration: 40,  price: 400,  description: 'Full leg waxing',                       popular: true },
        { id: 8, name: 'Threading',       duration: 10,  price: 70,   description: 'Precision eyebrow and face threading' },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Tejal S.',   area: 'Marathahalli', rating: 5, date: 'Dec 2023', text: 'Got a balayage here and was blown away by the result. Anitha is very skilled and understood my reference pictures perfectly. Great value.', service: 'Balayage', stylist: 'Anitha R.', helpful: 18 },
    { id: 2, author: 'Neha B.',    area: 'Whitefield',   rating: 4, date: 'Nov 2023', text: 'My regular spot for waxing. Sindhu is quick, thorough, and very gentle. Never had any irritation. Consistent quality every time.', service: 'Waxing - Legs', stylist: 'Sindhu M.', helpful: 12 },
    { id: 3, author: 'Priya T.',   area: 'Marathahalli', rating: 4, date: 'Oct 2023', text: 'Good salon for the price. Hair cut was clean and they have a nice selection of services. Parking is convenient on ORR.', service: 'Hair Cut', helpful: 8 },
  ],
};

// 8 — BBLUNT
const SALON_8: SalonDetail = {
  id: 8,
  name: 'BBLUNT',
  tagline: 'Be bold. Be blunt. Be you.',
  description: 'BBLUNT on 100 Feet Road brings Bollywood-favourite hair expertise to Indiranagar. Known for cutting-edge colour techniques, expert smoothening, and styles that keep you camera-ready. Every stylist is BBLUNT-certified with training from Mumbai\'s top fashion weeks.',
  area: 'Indiranagar',
  address: '100 Feet Road, Domlur, Indiranagar, Bangalore — 560071',
  phone: '+91 96780 34567',
  email: 'indiranagar@bblunt.com',
  rating: 4.8,
  reviews: 583,
  priceLevel: 4,
  openNow: false,
  yearsOpen: 7,
  badge: 'Trending',
  specialities: ['Balayage', 'Smoothening', 'Hair Cut', 'Colour', 'Styling', 'Olaplex'],
  awards: ['Best Hair Salon Indiranagar 2023', 'Grazia Beauty Award 2022'],
  instagram: '@bblunt_indiranagar',
  images: ['salon8a.jpg', 'salon8b.jpg', 'salon8c.jpg', 'salon8d.jpg'],
  lat: 12.9612, lng: 77.6387,
  parking: false, wifi: true,
  stylists: [
    { id: 1, name: 'Radhika Menon',  role: 'Creative Director',    experience: 13, rating: 4.9, reviews: 267, specialities: ['Balayage', 'Olaplex', 'Cuts'],        avatar: 'R' },
    { id: 2, name: 'Dev Sharma',     role: 'Senior Colourist',     experience: 9,  rating: 4.8, reviews: 198, specialities: ['Colour Correction', 'Bleach', 'Toner'], avatar: 'D' },
    { id: 3, name: 'Keerthi Bose',   role: 'Smoothening Expert',   experience: 7,  rating: 4.7, reviews: 156, specialities: ['Smoothening', 'Keratin', 'Botox Hair'], avatar: 'K' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'BBLUNT Signature Cut',    duration: 60,  price: 1400, description: 'Precision cut by a BBLUNT-certified stylist',    popular: true },
        { id: 2, name: 'Balayage',                duration: 180, price: 7000, description: 'Freehand painted colour with Olaplex bonding',   popular: true },
        { id: 3, name: 'Colour Correction',       duration: 240, price: 9000, description: 'Expert colour fix for previous colour disasters', popular: true },
        { id: 4, name: 'Brazilian Blowout',       duration: 120, price: 6000, description: 'Keratin-infused smoothening for 3–4 months' },
        { id: 5, name: 'Olaplex Treatment',       duration: 90,  price: 3500, description: 'Bond repair treatment for damaged hair',          popular: true },
        { id: 6, name: 'Hair Botox',              duration: 120, price: 5000, description: 'Deep conditioning filler for frizz-free volume' },
      ],
    },
    {
      id: 'styling', label: 'Styling',
      services: [
        { id: 7, name: 'Blow Dry & Style',     duration: 45,  price: 800,  description: 'Salon-finish blow dry with styling products',      popular: true },
        { id: 8, name: 'Occasion Updo',        duration: 60,  price: 2000, description: 'Elegant updo for events and functions' },
        { id: 9, name: 'Hair Extensions',      duration: 120, price: 8000, description: 'Clip-in or tape-in extensions for volume & length' },
      ],
    },
  ],
  hours: EXTENDED_HOURS,
  reviewList: [
    { id: 1, author: 'Kamya S.',   area: 'Indiranagar', rating: 5, date: 'Dec 2023', text: 'Radhika is the only person I trust with my hair. The balayage she did with Olaplex has made my hair the healthiest it\'s ever been. Worth every rupee.', service: 'Balayage', stylist: 'Radhika Menon', helpful: 41 },
    { id: 2, author: 'Tanvi R.',   area: 'Koramangala', rating: 5, date: 'Nov 2023', text: 'Came in for colour correction after a disaster elsewhere. Dev worked magic — you can\'t tell I ever had a bad colour job. Absolute professional.', service: 'Colour Correction', stylist: 'Dev Sharma', helpful: 36 },
    { id: 3, author: 'Manya K.',   area: 'Whitefield',  rating: 5, date: 'Nov 2023', text: 'Brazilian blowout by Keerthi — my hair has been silky and frizz-free for 4 months. I travel specifically to BBLUNT for this.', service: 'Brazilian Blowout', stylist: 'Keerthi Bose', helpful: 29 },
    { id: 4, author: 'Raveena T.', area: 'Hebbal',      rating: 4, date: 'Oct 2023', text: 'Great salon but parking on 100 Feet Road is a challenge. The Olaplex treatment made my dry hair feel like silk. Would come back.',  service: 'Olaplex Treatment', helpful: 14 },
  ],
};

// 9 — Affinity Salon
const SALON_9: SalonDetail = {
  id: 9,
  name: 'Affinity Salon',
  tagline: 'Beauty with a personal touch',
  description: 'Affinity Salon in Koramangala is a warm, boutique salon experience offering personalised hair and skin care. Known for its attentive service, skilled bridal team, and consistent quality, Affinity has built a loyal following in the Sarjapur Road corridor.',
  area: 'Koramangala',
  address: '1st Block, Sarjapur Road, Koramangala, Bangalore — 560034',
  phone: '+91 95670 89012',
  email: 'koramangala@affinitysalon.com',
  rating: 4.5,
  reviews: 329,
  priceLevel: 3,
  openNow: true,
  yearsOpen: 4,
  badge: undefined,
  specialities: ['Hair Cut', 'Bridal Makeup', 'Facial', 'Hair Colour', 'Waxing'],
  awards: [],
  instagram: '@affinity_krmgl',
  images: ['salon9a.jpg', 'salon9b.jpg'],
  lat: 12.9342, lng: 77.6201,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Pallavi Singh',  role: 'Senior Stylist & Bridal Artist', experience: 9,  rating: 4.7, reviews: 156, specialities: ['Bridal Makeup', 'Hair', 'Styling'], avatar: 'P' },
    { id: 2, name: 'Rahul Kumar',    role: 'Hair Colourist',                 experience: 6,  rating: 4.5, reviews: 112, specialities: ['Colour', 'Highlights', 'Cut'],       avatar: 'R' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Hair Cut & Style', duration: 60,  price: 600,  description: 'Tailored cut with blow-dry finish',         popular: true },
        { id: 2, name: 'Hair Colour',      duration: 120, price: 2200, description: 'Full head global colour' },
        { id: 3, name: 'Highlights',       duration: 90,  price: 2800, description: 'Foil or freehand highlights' },
        { id: 4, name: 'Hair Spa',         duration: 60,  price: 1200, description: 'Deep nourishing treatment' },
      ],
    },
    {
      id: 'bridal', label: 'Bridal',
      services: [
        { id: 5, name: 'Bridal Makeup',      duration: 120, price: 10000, description: 'Professional bridal glam',                popular: true },
        { id: 6, name: 'Engagement Makeup',  duration: 90,  price: 5000,  description: 'Radiant look for your engagement day' },
        { id: 7, name: 'Reception Look',     duration: 90,  price: 6000,  description: 'Glamorous reception makeup & styling',    popular: true },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 8,  name: 'Classic Facial',  duration: 60,  price: 1200, description: 'Cleansing and hydrating facial',            popular: true },
        { id: 9,  name: 'De-Tan Facial',   duration: 45,  price: 900,  description: 'Tan removal with brightening mask' },
        { id: 10, name: 'Waxing - Arms',   duration: 30,  price: 300,  description: 'Smooth waxing with soothing finish' },
        { id: 11, name: 'Waxing - Legs',   duration: 40,  price: 450,  description: 'Full leg waxing',                          popular: true },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Anu S.',    area: 'Koramangala', rating: 5, date: 'Dec 2023', text: 'Pallavi did my bridal makeup and I was absolutely thrilled. She listened to everything I wanted and added her own magic. Perfect for my wedding day.', service: 'Bridal Makeup', stylist: 'Pallavi Singh', helpful: 26 },
    { id: 2, author: 'Varsha M.', area: 'HSR Layout',  rating: 4, date: 'Nov 2023', text: 'Nice boutique-feel salon. My hair colour came out exactly as I wanted. Rahul was patient and took his time. Will return for highlights.', service: 'Hair Colour', stylist: 'Rahul Kumar', helpful: 11 },
    { id: 3, author: 'Sadhana P.', area: 'Sarjapur',  rating: 5, date: 'Oct 2023', text: 'My neighbourhood gem. The facial is so relaxing and my skin always looks great after. Love the personal attention you get here.', service: 'Classic Facial', helpful: 9 },
  ],
};

// 10 — Jawed Habib
const SALON_10: SalonDetail = {
  id: 10,
  name: 'Jawed Habib',
  tagline: 'Master of the art of hair',
  description: 'Jawed Habib in Malleshwaram is part of India\'s most respected hair academy chain. With 11 years of presence in the neighbourhood, this salon is the go-to destination for precision haircuts, expert head massages, and trusted eyebrow threading.',
  area: 'Malleshwaram',
  address: '8th Cross, Sampige Road, Malleshwaram, Bangalore — 560003',
  phone: '+91 98450 78901',
  email: 'malleshwaram@jawedhabib.co.in',
  rating: 4.4,
  reviews: 677,
  priceLevel: 2,
  openNow: true,
  yearsOpen: 11,
  badge: undefined,
  specialities: ['Hair Cut', 'Head Massage', 'Eyebrow Threading', "Men's Grooming", 'Hair Colour'],
  awards: ['Best Family Salon Malleshwaram 2022'],
  instagram: '@jawedhabib_malleshwaram',
  images: ['salon10a.jpg', 'salon10b.jpg'],
  lat: 13.0033, lng: 77.5713,
  parking: false, wifi: false,
  stylists: [
    { id: 1, name: 'Harish Kumar',  role: 'Master Stylist',         experience: 15, rating: 4.6, reviews: 287, specialities: ['Hair Cut', 'Head Massage'],              avatar: 'H' },
    { id: 2, name: 'Savitha Bai',   role: 'Threading Specialist',   experience: 12, rating: 4.7, reviews: 231, specialities: ['Threading', 'Waxing'],                   avatar: 'S' },
    { id: 3, name: 'Naveen R.',     role: "Men's Grooming Expert",  experience: 8,  rating: 4.5, reviews: 159, specialities: ["Men's Cut", 'Beard', 'Facial'],          avatar: 'N' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Ladies Hair Cut',     duration: 45,  price: 400,  description: 'Expert cut tailored to your face shape',    popular: true },
        { id: 2, name: "Men's Hair Cut",      duration: 30,  price: 200,  description: 'Classic or modern precision cut',           popular: true },
        { id: 3, name: 'Hair Colour',         duration: 90,  price: 1500, description: 'Reliable full head colour' },
        { id: 4, name: 'Highlights',          duration: 90,  price: 2000, description: 'Foil highlights for dimension' },
        { id: 5, name: 'Hair Spa',            duration: 60,  price: 800,  description: 'Conditioning treatment with head massage',  popular: true },
      ],
    },
    {
      id: 'mens', label: "Men's",
      services: [
        { id: 6,  name: 'Head Massage',        duration: 30,  price: 350,  description: 'Traditional deep scalp massage with oil',  popular: true },
        { id: 7,  name: 'Beard Trim & Style',  duration: 30,  price: 250,  description: 'Expert beard sculpting with hot towel' },
        { id: 8,  name: "Men's Facial",        duration: 45,  price: 800,  description: 'Oil-control and refreshing facial' },
        { id: 9,  name: 'Shave',               duration: 20,  price: 150,  description: 'Smooth clean shave with razor and cream' },
      ],
    },
    {
      id: 'threading', label: 'Threading & Beauty',
      services: [
        { id: 10, name: 'Eyebrow Threading',   duration: 10,  price: 60,   description: 'Precision threading for perfect brows',   popular: true },
        { id: 11, name: 'Full Face Threading',  duration: 20,  price: 150,  description: 'Complete face threading' },
        { id: 12, name: 'Wax - Arms',          duration: 30,  price: 280,  description: 'Smooth arm waxing' },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Kamala R.',  area: 'Malleshwaram', rating: 5, date: 'Dec 2023', text: 'Harish has been cutting my hair for 7 years. He understands my hair texture perfectly. Never had a bad haircut here. True master of his craft.', service: 'Ladies Hair Cut', stylist: 'Harish Kumar', helpful: 34 },
    { id: 2, author: 'Rajan P.',   area: 'Rajajinagar',  rating: 5, date: 'Nov 2023', text: 'Best head massage in Bangalore — bar none. Harish\'s technique is from another era. Pure bliss for 30 minutes. I come every month.', service: 'Head Massage', stylist: 'Harish Kumar', helpful: 28 },
    { id: 3, author: 'Sudha M.',   area: 'Malleshwaram', rating: 4, date: 'Oct 2023', text: 'Savitha does the best eyebrows in the area. Very precise and quick. The salon is old-school but that\'s part of the charm.', service: 'Eyebrow Threading', stylist: 'Savitha Bai', helpful: 19 },
  ],
};

// 11 — Looks Salon
const SALON_11: SalonDetail = {
  id: 11,
  name: 'Looks Salon',
  tagline: 'Professional beauty, neighbourhood warmth',
  description: 'Looks Salon at Esteem Mall in Hebbal offers professional hair and skin services with a friendly neighbourhood touch. A growing favourite for bridal bookings in North Bangalore, with a skilled team that brings high-quality results at fair prices.',
  area: 'Hebbal',
  address: 'Outer Ring Road, Esteem Mall, Hebbal, Bangalore — 560024',
  phone: '+91 97770 56789',
  email: 'hebbal@looks-salon.in',
  rating: 4.5,
  reviews: 291,
  priceLevel: 3,
  openNow: true,
  yearsOpen: 3,
  badge: undefined,
  specialities: ['Bridal Makeup', 'Facial', 'Hair Cut', 'Hair Spa', 'Waxing'],
  awards: ['Rising Star Salon North Bangalore 2023'],
  instagram: '@looks_hebbal',
  images: ['salon11a.jpg', 'salon11b.jpg'],
  lat: 13.0358, lng: 77.5970,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Neethu Thomas',  role: 'Bridal & Makeup Artist', experience: 8,  rating: 4.7, reviews: 134, specialities: ['Bridal', 'Makeup', 'Hair Styling'],  avatar: 'N' },
    { id: 2, name: 'Lakshmi Devi',   role: 'Senior Skin Therapist',  experience: 7,  rating: 4.6, reviews: 109, specialities: ['Facial', 'De-Tan', 'Waxing'],        avatar: 'L' },
    { id: 3, name: 'Amar Rao',       role: 'Hair Stylist',           experience: 5,  rating: 4.5, reviews: 88,  specialities: ['Hair Cut', 'Colour', 'Hair Spa'],    avatar: 'A' },
  ],
  serviceCategories: [
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 1, name: 'Hair Cut & Style', duration: 60,  price: 650,  description: 'Modern cut with blow-dry',               popular: true },
        { id: 2, name: 'Hair Colour',      duration: 120, price: 2200, description: 'Full head colour with quality dye' },
        { id: 3, name: 'Hair Spa',         duration: 60,  price: 1300, description: 'Deep conditioning and scalp treatment',   popular: true },
        { id: 4, name: 'Smoothening',      duration: 150, price: 4000, description: 'Frizz-control smoothening treatment' },
      ],
    },
    {
      id: 'bridal', label: 'Bridal',
      services: [
        { id: 5, name: 'Bridal Makeup',      duration: 120, price: 12000, description: 'Complete bridal transformation',        popular: true },
        { id: 6, name: 'Engagement Look',    duration: 90,  price: 5500,  description: 'Fresh and radiant engagement makeup' },
        { id: 7, name: 'Bridal Hair Styling', duration: 75, price: 4000,  description: 'Elegant bridal updo or open styling' },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 8,  name: 'Classic Facial',  duration: 60,  price: 1300, description: 'Nourishing and refreshing facial',        popular: true },
        { id: 9,  name: 'De-Tan Pack',     duration: 45,  price: 900,  description: 'Instant tan removal with herbal pack' },
        { id: 10, name: 'Waxing - Legs',   duration: 40,  price: 450,  description: 'Smooth legs with Rica wax',              popular: true },
      ],
    },
  ],
  hours: STANDARD_HOURS,
  reviewList: [
    { id: 1, author: 'Anitha S.',  area: 'Hebbal',       rating: 5, date: 'Dec 2023', text: 'Neethu did an incredible job for my sister\'s wedding. The bridal makeup was exactly what we envisioned and lasted all day beautifully.', service: 'Bridal Makeup', stylist: 'Neethu Thomas', helpful: 23 },
    { id: 2, author: 'Jyothi K.',  area: 'Yelahanka',    rating: 4, date: 'Nov 2023', text: 'Good salon for North Bangalore. Hair spa was very relaxing. Amar was friendly and skilled. My go-to place close to home.', service: 'Hair Spa', stylist: 'Amar Rao', helpful: 14 },
    { id: 3, author: 'Bhargavi R.', area: 'Hebbal',      rating: 5, date: 'Oct 2023', text: 'Lakshmi is a brilliant skin therapist. My skin condition has improved so much since I started coming here monthly.', service: 'Classic Facial', stylist: 'Lakshmi Devi', helpful: 11 },
  ],
};

// 12 — Studio 11 Salon & Spa
const SALON_12: SalonDetail = {
  id: 12,
  name: 'Studio 11 Salon & Spa',
  tagline: 'Your sanctuary of wellness and beauty',
  description: 'Studio 11 Salon & Spa in JP Nagar is Bannerghatta Road\'s premier wellness destination. Combining a full-service salon with a tranquil spa offering, Studio 11 lets you enjoy manicures, pedicures, luxury hair spa rituals, and rejuvenating facials all under one roof.',
  area: 'Bannerghatta Road',
  address: 'JP Nagar, Phase 1, Bannerghatta Road, Bangalore — 560078',
  phone: '+91 98340 23456',
  email: 'jpnagar@studio11spa.com',
  rating: 4.6,
  reviews: 445,
  priceLevel: 3,
  openNow: false,
  yearsOpen: 6,
  badge: undefined,
  specialities: ['Hair Spa', 'Facial', 'Manicure', 'Pedicure', 'Body Massage', 'Waxing'],
  awards: ['Best Spa-Salon Combo South Bangalore 2022'],
  instagram: '@studio11_jpnagar',
  images: ['salon12a.jpg', 'salon12b.jpg', 'salon12c.jpg'],
  lat: 12.8997, lng: 77.5964,
  parking: true, wifi: true,
  stylists: [
    { id: 1, name: 'Meghna Bhat',   role: 'Spa & Wellness Director', experience: 11, rating: 4.8, reviews: 198, specialities: ['Body Massage', 'Facial', 'Spa'],     avatar: 'M' },
    { id: 2, name: 'Seema Nair',    role: 'Senior Hair Stylist',     experience: 8,  rating: 4.6, reviews: 165, specialities: ['Hair Spa', 'Cut', 'Colour'],          avatar: 'S' },
    { id: 3, name: 'Divya Kamath',  role: 'Nail & Beauty Expert',    experience: 6,  rating: 4.7, reviews: 134, specialities: ['Manicure', 'Pedicure', 'Nail Art'],   avatar: 'D' },
  ],
  serviceCategories: [
    {
      id: 'spa', label: 'Spa',
      services: [
        { id: 1, name: 'Swedish Body Massage',  duration: 60,  price: 2500, description: 'Full body relaxation massage',                    popular: true },
        { id: 2, name: 'Deep Tissue Massage',   duration: 60,  price: 3000, description: 'Targeted therapy for muscle tension and knots' },
        { id: 3, name: 'Aromatherapy Massage',  duration: 75,  price: 3200, description: 'Essential oil massage for total de-stress',       popular: true },
        { id: 4, name: 'Couple\'s Spa Package', duration: 90,  price: 5500, description: 'Side-by-side massage experience for two' },
      ],
    },
    {
      id: 'hair', label: 'Hair',
      services: [
        { id: 5, name: 'Luxury Hair Spa',  duration: 75,  price: 2000, description: 'Deep conditioning + scalp massage + hot towel',    popular: true },
        { id: 6, name: 'Hair Cut & Style', duration: 60,  price: 600,  description: 'Precision cut with blow-dry' },
        { id: 7, name: 'Hair Colour',      duration: 120, price: 2000, description: 'Full head colour' },
        { id: 8, name: 'Keratin',          duration: 150, price: 4000, description: 'Smoothening for frizz-free hair',                  popular: true },
      ],
    },
    {
      id: 'nails', label: 'Nails',
      services: [
        { id: 9,  name: 'Gel Manicure',      duration: 60,  price: 1000, description: 'Gel polish with cuticle care',                   popular: true },
        { id: 10, name: 'Gel Pedicure',      duration: 60,  price: 1000, description: 'Foot soak, scrub, and gel finish',               popular: true },
        { id: 11, name: 'Mani-Pedi Combo',   duration: 100, price: 1600, description: 'Full mani and pedi at a combo price',            popular: true },
        { id: 12, name: 'Nail Art',          duration: 45,  price: 800,  description: 'Custom nail art designs' },
      ],
    },
    {
      id: 'skin', label: 'Skin',
      services: [
        { id: 13, name: 'Anti-Stress Facial', duration: 60,  price: 1800, description: 'Calming facial with rose and chamomile',         popular: true },
        { id: 14, name: 'Brightening Facial', duration: 75,  price: 2200, description: 'Vitamin C and kojic acid glow treatment' },
        { id: 15, name: 'Waxing - Arms',      duration: 30,  price: 320,  description: 'Smooth wax with soothing lotion' },
        { id: 16, name: 'Waxing - Legs',      duration: 40,  price: 480,  description: 'Full leg waxing',                               popular: true },
      ],
    },
  ],
  hours: EXTENDED_HOURS,
  reviewList: [
    { id: 1, author: 'Kaveri S.',   area: 'JP Nagar',         rating: 5, date: 'Dec 2023', text: 'The aromatherapy massage with Meghna is absolutely divine. I leave feeling like a completely different person. My monthly ritual now.', service: 'Aromatherapy Massage', stylist: 'Meghna Bhat', helpful: 31 },
    { id: 2, author: 'Sunanda P.',  area: 'Bannerghatta Rd',  rating: 5, date: 'Nov 2023', text: 'Came in for the mani-pedi combo and stayed for the facial. Divya is so precise with nail art. The spa vibe makes this place special.', service: 'Mani-Pedi Combo', stylist: 'Divya Kamath', helpful: 24 },
    { id: 3, author: 'Rekha T.',    area: 'Jayanagar',        rating: 4, date: 'Nov 2023', text: 'Luxury hair spa was incredible — my hair felt like silk after. Seema recommended the right treatment for my dry ends. Great experience.', service: 'Luxury Hair Spa', stylist: 'Seema Nair', helpful: 18 },
    { id: 4, author: 'Priya M.',    area: 'BTM Layout',       rating: 5, date: 'Oct 2023', text: 'The couple\'s spa package was the perfect anniversary gift. Both the massages were superb. Clean, calm, and professional throughout.', service: "Couple's Spa Package", helpful: 22 },
  ],
};

// ── Lookup map — keyed by salon id ──────────────────
export const MOCK_SALON_DETAILS: Record<number, SalonDetail> = {
  1:  MOCK_SALON_DETAIL,
  2:  SALON_2,
  3:  SALON_3,
  4:  SALON_4,
  5:  SALON_5,
  6:  SALON_6,
  7:  SALON_7,
  8:  SALON_8,
  9:  SALON_9,
  10: SALON_10,
  11: SALON_11,
  12: SALON_12,
};

// Generate time slots for a given date index (0 = today)
export function generateSlots(dateOffset: number): TimeSlot[] {
  const slots: TimeSlot[] = [];
  const times = [
    '10:00','10:30','11:00','11:30','12:00','12:30',
    '13:00','13:30','14:00','14:30','15:00','15:30',
    '16:00','16:30','17:00','17:30','18:00','18:30','19:00',
  ];
  times.forEach((t, i) => {
    const peak   = (i >= 4 && i <= 7) || (i >= 12 && i <= 15);
    const booked = dateOffset === 0
      ? [0, 1, 4, 5, 8, 12].includes(i)
      : [2, 3, 7, 11, 15].includes(i);
    slots.push({ time: t, available: !booked, peak });
  });
  return slots;
}