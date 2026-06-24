export type TrendCategory = 'all' | 'hair' | 'skin' | 'nails' | 'bridal' | 'wellness';

export interface TrendTag {
  label: string;
  color?: string;
}

export interface Trend {
  id: number;
  title: string;
  subtitle: string;
  category: TrendCategory;
  tags: TrendTag[];
  salonCount: number;       // how many salons offer this
  bookingsThisWeek: number; // social proof
  isHot: boolean;
  isFeatured: boolean;
  badge?: string;           // 'TRENDING' | 'NEW' | 'VIRAL' | 'SEASONAL'
  gradient: string;         // card accent gradient
  icon: string;             // emoji / symbol
  description: string;
  avgPrice: string;
  timeRequired: string;
  salonNames: string[];     // top 3 salons offering it
}

export interface TrendFilterState {
  category: TrendCategory;
  search: string;
  showHotOnly: boolean;
}

export const TREND_CATEGORIES: { value: TrendCategory; label: string; icon: string }[] = [
  { value: 'all',      label: 'All Trends',  icon: '✦' },
  { value: 'hair',     label: 'Hair',        icon: '✂' },
  { value: 'skin',     label: 'Skin & Face', icon: '◈' },
  { value: 'nails',    label: 'Nails',       icon: '◆' },
  { value: 'bridal',   label: 'Bridal',      icon: '◇' },
  { value: 'wellness', label: 'Wellness',    icon: '◉' },
];

export const MOCK_TRENDS: Trend[] = [
  {
    id: 1,
    title: 'Balayage Sunlit Blonde',
    subtitle: 'The effortless sun-kissed look dominating Bangalore salons',
    category: 'hair',
    tags: [{ label: 'Colour' }, { label: 'Balayage' }, { label: 'Blonde' }],
    salonCount: 9,
    bookingsThisWeek: 142,
    isHot: true,
    isFeatured: true,
    badge: 'TRENDING',
    gradient: 'linear-gradient(135deg, #1a1206 0%, #2a1f08 100%)',
    icon: '✦',
    description: 'A seamless blend of warm gold and caramel tones painted freehand for a natural, dimensional finish. Perfect for Bangalore\'s warm climate.',
    avgPrice: '₹4,500 – ₹8,000',
    timeRequired: '3–4 hrs',
    salonNames: ['Toni & Guy', 'BBLUNT', 'Jean-Claude Biguine'],
  },
  {
    id: 2,
    title: 'Glass Skin Facial',
    subtitle: 'Korean-inspired luminous skin treatment taking over the city',
    category: 'skin',
    tags: [{ label: 'Facial' }, { label: 'Korean' }, { label: 'Glow' }],
    salonCount: 7,
    bookingsThisWeek: 118,
    isHot: true,
    isFeatured: true,
    badge: 'VIRAL',
    gradient: 'linear-gradient(135deg, #0a1a1a 0%, #0d2a2a 100%)',
    icon: '◈',
    description: 'Multi-step hydration and brightening treatment using hyaluronic acid, niacinamide and peptide serums for a mirror-like finish.',
    avgPrice: '₹2,800 – ₹5,500',
    timeRequired: '90 min',
    salonNames: ['Jean-Claude Biguine', 'Lakmé Salon Luxe', 'Enrich Salon'],
  },
  {
    id: 3,
    title: 'Bridal Mehendi Artistry',
    subtitle: 'Intricate rajasthani and arabic fusion designs for modern brides',
    category: 'bridal',
    tags: [{ label: 'Mehendi' }, { label: 'Bridal' }, { label: 'Traditional' }],
    salonCount: 5,
    bookingsThisWeek: 63,
    isHot: false,
    isFeatured: true,
    badge: 'SEASONAL',
    gradient: 'linear-gradient(135deg, #1a0d00 0%, #2a1500 100%)',
    icon: '◇',
    description: 'Bespoke henna artistry blending rajasthani motifs with delicate arabic patterns. Includes bridal consultation and natural henna paste.',
    avgPrice: '₹3,000 – ₹12,000',
    timeRequired: '4–8 hrs',
    salonNames: ['Lakmé Salon Luxe', 'Toni & Guy', 'Affinity Salon'],
  },
  {
    id: 4,
    title: 'Nail Chrome Ombre',
    subtitle: 'Holographic chrome powder over gradient gel — instant obsession',
    category: 'nails',
    tags: [{ label: 'Nails' }, { label: 'Chrome' }, { label: 'Gel' }],
    salonCount: 6,
    bookingsThisWeek: 89,
    isHot: true,
    isFeatured: false,
    badge: 'NEW',
    gradient: 'linear-gradient(135deg, #0d0d1a 0%, #12122a 100%)',
    icon: '◆',
    description: 'Gel base with hand-blended ombre, finished with holographic chrome powder that shifts between silver, pink and gold in different light.',
    avgPrice: '₹1,200 – ₹2,800',
    timeRequired: '75 min',
    salonNames: ['Jean-Claude Biguine', 'YLG Salon', 'Enrich Salon'],
  },
  {
    id: 5,
    title: 'Scalp Detox Ritual',
    subtitle: 'Deep cleansing scalp treatment for city-stressed hair',
    category: 'wellness',
    tags: [{ label: 'Scalp' }, { label: 'Detox' }, { label: 'Hair Spa' }],
    salonCount: 8,
    bookingsThisWeek: 97,
    isHot: true,
    isFeatured: false,
    badge: 'TRENDING',
    gradient: 'linear-gradient(135deg, #0a1a0d 0%, #0d2410 100%)',
    icon: '◉',
    description: 'Activated charcoal scalp scrub followed by a botanical oil massage and protein mask. Restores scalp pH and eliminates buildup from Bangalore\'s hard water.',
    avgPrice: '₹1,800 – ₹3,500',
    timeRequired: '60 min',
    salonNames: ['Naturals Luxe', 'Studio 11', 'Looks Salon'],
  },
  {
    id: 6,
    title: 'Curtain Bangs & Shag',
    subtitle: 'The retro-revival cut that flatters every face shape',
    category: 'hair',
    tags: [{ label: 'Hair Cut' }, { label: 'Bangs' }, { label: 'Layered' }],
    salonCount: 10,
    bookingsThisWeek: 134,
    isHot: true,
    isFeatured: false,
    badge: 'VIRAL',
    gradient: 'linear-gradient(135deg, #1a0a00 0%, #241200 100%)',
    icon: '✂',
    description: 'Soft, face-framing curtain bangs paired with long layers and a feathered shag. Effortless movement styled with a round brush or air-dried.',
    avgPrice: '₹800 – ₹2,500',
    timeRequired: '45–60 min',
    salonNames: ['Toni & Guy', 'Green Trends', 'Jawed Habib'],
  },
  {
    id: 7,
    title: 'Hydra-Glow Cleanup',
    subtitle: 'Express 30-min glow treatment for busy professionals',
    category: 'skin',
    tags: [{ label: 'Facial' }, { label: 'Express' }, { label: 'Hydration' }],
    salonCount: 11,
    bookingsThisWeek: 201,
    isHot: true,
    isFeatured: false,
    badge: 'TRENDING',
    gradient: 'linear-gradient(135deg, #0d1520 0%, #101e2d 100%)',
    icon: '◈',
    description: 'Steam cleanse, vitamin C brightening serum, jade roller massage and SPF finish in 30 minutes. Perfect pre-event skin prep.',
    avgPrice: '₹600 – ₹1,500',
    timeRequired: '30 min',
    salonNames: ['Lakmé Salon Luxe', 'Enrich Salon', 'YLG Salon'],
  },
  {
    id: 8,
    title: 'Bridal Airbrush Makeup',
    subtitle: 'Flawless 24-hour finish with HD airbrush technology',
    category: 'bridal',
    tags: [{ label: 'Makeup' }, { label: 'Airbrush' }, { label: 'HD' }],
    salonCount: 4,
    bookingsThisWeek: 47,
    isHot: false,
    isFeatured: false,
    badge: 'NEW',
    gradient: 'linear-gradient(135deg, #1a0d1a 0%, #241224 100%)',
    icon: '◇',
    description: 'Professional airbrush foundation system delivering a skin-blurring, transfer-proof finish. Includes pre-bridal skin consultation and trial session.',
    avgPrice: '₹8,000 – ₹18,000',
    timeRequired: '2–3 hrs',
    salonNames: ['Lakmé Salon Luxe', 'Jean-Claude Biguine', 'Toni & Guy'],
  },
  {
    id: 9,
    title: 'Keratin Smoothening 2.0',
    subtitle: 'Formaldehyde-free formula for frizz-free monsoon hair',
    category: 'hair',
    tags: [{ label: 'Keratin' }, { label: 'Smoothening' }, { label: 'Anti-frizz' }],
    salonCount: 8,
    bookingsThisWeek: 76,
    isHot: false,
    isFeatured: false,
    badge: 'SEASONAL',
    gradient: 'linear-gradient(135deg, #12100a 0%, #1c180d 100%)',
    icon: '✦',
    description: 'Next-gen keratin treatment using cysteine complex — zero formaldehyde, 100% safer and equally effective. Lasts 4–6 months through Bangalore\'s monsoon season.',
    avgPrice: '₹3,500 – ₹7,000',
    timeRequired: '2.5–3.5 hrs',
    salonNames: ['Naturals Luxe', 'BBLUNT', 'Affinity Salon'],
  },
];