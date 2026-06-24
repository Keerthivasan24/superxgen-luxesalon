export type StyleAiView =
  | 'hero'
  | 'upload'
  | 'quiz'
  | 'loading'
  | 'results';

export type FaceShape =
  | 'Oval'
  | 'Round'
  | 'Square'
  | 'Heart'
  | 'Oblong'
  | 'Diamond';

export type HairType = 'Straight' | 'Wavy' | 'Curly' | 'Coily';

export interface StyleRecommendation {
  id:          number;
  name:        string;
  description: string;
  suitedFor:   string;
  duration:    string;
  priceRange:  string;
  tags:        string[];
  matchedSalon:string;
  salonArea:   string;
  salonId:     number;
}

export interface ColourPalette {
  name:  string;
  hex:   string;
  label: string;
}

export interface AiAnalysisResult {
  faceShape:       FaceShape;
  hairType:        HairType;
  skinTone:        string;
  recommendations: StyleRecommendation[];
  colourPalettes:  ColourPalette[];
  personalityNote: string;
  topTip:          string;
}

export interface QuizAnswer {
  questionId: string;
  answer:     string;
}

export interface QuizQuestion {
  id:      string;
  text:    string;
  options: string[];
}

// ── Quiz questions ────────────────────────────────────
export const QUIZ_QUESTIONS: QuizQuestion[] = [
  {
    id:      'face_shape',
    text:    'Which face shape best describes you?',
    options: ['Oval','Round','Square','Heart','Oblong','Not sure'],
  },
  {
    id:      'hair_type',
    text:    'What is your natural hair type?',
    options: ['Straight','Wavy','Curly','Coily','Not sure'],
  },
  {
    id:      'lifestyle',
    text:    'How much time do you spend on hair daily?',
    options: ['Under 5 minutes','5–15 minutes','15–30 minutes','30+ minutes'],
  },
  {
    id:      'vibe',
    text:    'Which style vibe speaks to you?',
    options: ['Natural & effortless','Bold & edgy','Classic & polished','Romantic & soft'],
  },
  {
    id:      'budget',
    text:    'What is your salon budget per visit?',
    options: ['Under ₹1,000','₹1,000–3,000','₹3,000–6,000','₹6,000+'],
  },
];

// ── Mock AI result ────────────────────────────────────
export const MOCK_AI_RESULT: AiAnalysisResult = {
  faceShape: 'Oval',
  hairType:  'Wavy',
  skinTone:  'Warm medium',
  personalityNote: 'Your oval face shape is considered the most versatile — almost every style works beautifully. Your wavy texture adds natural volume and movement, making you an ideal candidate for lived-in, effortless looks.',
  topTip: 'Avoid heavy blunt fringes — they can visually shorten your forehead. Soft, wispy curtain bangs will complement your features perfectly.',
  colourPalettes: [
    { name:'Caramel Balayage', hex:'#C8860A', label:'Perfect for warm skin' },
    { name:'Chocolate Brown',  hex:'#4A2507', label:'Rich & natural' },
    { name:'Honey Blonde',     hex:'#C9A050', label:'Sun-kissed glow' },
    { name:'Chestnut Ombre',   hex:'#7B3F1A', label:'Dimensional depth' },
  ],
  recommendations: [
    {
      id:1,
      name:'Soft Balayage Waves',
      description:'Hand-painted caramel highlights blended seamlessly into your natural wave pattern. Low maintenance, high impact.',
      suitedFor:'Oval face · Wavy hair · Effortless vibe',
      duration:'3 hours',
      priceRange:'₹5,000–8,000',
      tags:['Balayage','Low-maintenance','Trending'],
      matchedSalon:'Toni & Guy',
      salonArea:'Koramangala',
      salonId:1,
    },
    {
      id:2,
      name:'Curtain Bang Transformation',
      description:'Soft, face-framing curtain bangs that enhance your oval shape and add a touch of vintage glamour.',
      suitedFor:'Oval face · Any hair type · Romantic vibe',
      duration:'45 minutes',
      priceRange:'₹800–1,500',
      tags:['Bangs','Face-framing','Trendy'],
      matchedSalon:'Jean-Claude Biguine',
      salonArea:'Indiranagar',
      salonId:2,
    },
    {
      id:3,
      name:'Textured Lob with Volume',
      description:'A collarbone-length lob with internal layers to enhance your natural wave. Versatile and modern.',
      suitedFor:'Oval face · Wavy hair · Classic vibe',
      duration:'1.5 hours',
      priceRange:'₹2,000–4,000',
      tags:['Lob','Layers','Versatile'],
      matchedSalon:'BBLUNT',
      salonArea:'Indiranagar',
      salonId:8,
    },
  ],
};

// ── Gallery looks ─────────────────────────────────────
export interface GalleryLook {
  id:        number;
  title:     string;
  faceShape: string;
  hairType:  string;
  occasion:  string;
  salon:     string;
}

export const GALLERY_LOOKS: GalleryLook[] = [
  { id:1,  title:'Beachy Balayage',      faceShape:'Oval',    hairType:'Wavy',     occasion:'Everyday', salon:'Toni & Guy' },
  { id:2,  title:'Blunt Bob',            faceShape:'Round',   hairType:'Straight', occasion:'Work',     salon:'BBLUNT' },
  { id:3,  title:'Bridal Updo',          faceShape:'Heart',   hairType:'Curly',    occasion:'Bridal',   salon:'Lakmé' },
  { id:4,  title:'Curtain Bangs',        faceShape:'Oval',    hairType:'Wavy',     occasion:'Everyday', salon:'Jean-Claude' },
  { id:5,  title:'Textured Crop',        faceShape:'Square',  hairType:'Straight', occasion:'Work',     salon:'Enrich' },
  { id:6,  title:'Copper Ombre',         faceShape:'Oval',    hairType:'Straight', occasion:'Party',    salon:'Toni & Guy' },
  { id:7,  title:'Natural Afro',         faceShape:'Diamond', hairType:'Coily',    occasion:'Everyday', salon:'Naturals' },
  { id:8,  title:'Sleek Straight',       faceShape:'Round',   hairType:'Wavy',     occasion:'Work',     salon:'YLG' },
];