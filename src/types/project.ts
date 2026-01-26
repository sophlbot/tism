// Metal types for RWA tokenization - Extended list

export type MetalType = 
  // Precious metals
  | 'gold'
  | 'silver'
  | 'platinum'
  | 'palladium'
  | 'rhodium'
  | 'iridium'
  | 'osmium'
  | 'ruthenium'
  // Gold variants
  | 'white_gold'
  | 'rose_gold'
  | 'green_gold'
  | 'electrum'
  // Base metals
  | 'copper'
  | 'bronze'
  | 'brass'
  | 'aluminum'
  | 'zinc'
  | 'tin'
  | 'lead'
  | 'nickel'
  | 'iron'
  | 'steel'
  | 'stainless_steel'
  | 'cast_iron'
  // Industrial metals
  | 'titanium'
  | 'tungsten'
  | 'cobalt'
  | 'molybdenum'
  | 'tantalum'
  | 'niobium'
  | 'vanadium'
  | 'chromium'
  | 'manganese'
  | 'zirconium'
  // Rare earth metals
  | 'neodymium'
  | 'scandium'
  | 'yttrium'
  | 'lanthanum'
  | 'cerium'
  | 'praseodymium'
  | 'europium'
  | 'terbium'
  | 'dysprosium'
  // Strategic metals
  | 'lithium'
  | 'beryllium'
  | 'magnesium'
  | 'gallium'
  | 'germanium'
  | 'indium'
  | 'tellurium'
  | 'bismuth'
  | 'antimony'
  | 'rhenium'
  // Meme minerals (real minerals with funny names)
  | 'cummingtonite'
  | 'analcime'
  | 'dickite'
  | 'arsenic'
  | 'uraninite'
  | 'fukalite'
  | 'cubanite'
  | 'clintonite'
  | 'mordenite'
  | 'erectorite'
  | 'fukuchilite'
  | 'bastnasite'
  | 'hookerite'
  | 'kunzite'
  | 'pectolite'
  | 'phosgenite'
  | 'crocidolite'
  | 'mimetite'
  | 'orpiment'
  | 'realgar';

export interface MetalInfo {
  name: string;
  symbol: string;
  description: string;
  color: string;
  colorDark: string;
  pricePerOz: string;
  category: 'precious' | 'base' | 'industrial' | 'rare_earth' | 'strategic' | 'alloy' | 'meme';
}

export const METAL_INFO: Record<MetalType, MetalInfo> = {
  // === PRECIOUS METALS ===
  gold: {
    name: 'Gold',
    symbol: 'XAU',
    description: 'The ultimate store of value',
    color: '#D4AF37',
    colorDark: '#B8860B',
    pricePerOz: '$2,045',
    category: 'precious'
  },
  silver: {
    name: 'Silver',
    symbol: 'XAG',
    description: 'Industrial and monetary metal',
    color: '#C0C0C0',
    colorDark: '#A8A8A8',
    pricePerOz: '$23.50',
    category: 'precious'
  },
  platinum: {
    name: 'Platinum',
    symbol: 'XPT',
    description: 'Rare precious metal',
    color: '#E5E4E2',
    colorDark: '#C9C9C7',
    pricePerOz: '$920',
    category: 'precious'
  },
  palladium: {
    name: 'Palladium',
    symbol: 'XPD',
    description: 'Industrial precious metal',
    color: '#CED0CE',
    colorDark: '#B0B2B0',
    pricePerOz: '$1,050',
    category: 'precious'
  },
  rhodium: {
    name: 'Rhodium',
    symbol: 'XRH',
    description: 'Rarest precious metal',
    color: '#E8E8E8',
    colorDark: '#D0D0D0',
    pricePerOz: '$4,550',
    category: 'precious'
  },
  iridium: {
    name: 'Iridium',
    symbol: 'XIR',
    description: 'Densest stable element',
    color: '#D9D9D9',
    colorDark: '#B8B8B8',
    pricePerOz: '$4,150',
    category: 'precious'
  },
  osmium: {
    name: 'Osmium',
    symbol: 'XOS',
    description: 'Densest natural element',
    color: '#8B98A5',
    colorDark: '#6B7B8A',
    pricePerOz: '$1,500',
    category: 'precious'
  },
  ruthenium: {
    name: 'Ruthenium',
    symbol: 'XRU',
    description: 'Platinum group metal',
    color: '#A5A5A5',
    colorDark: '#858585',
    pricePerOz: '$450',
    category: 'precious'
  },

  // === GOLD VARIANTS ===
  white_gold: {
    name: 'White Gold',
    symbol: 'WGD',
    description: 'Gold-nickel alloy',
    color: '#F5F5F5',
    colorDark: '#E0E0E0',
    pricePerOz: '$1,850',
    category: 'alloy'
  },
  rose_gold: {
    name: 'Rose Gold',
    symbol: 'RGD',
    description: 'Gold-copper alloy',
    color: '#E8B4B8',
    colorDark: '#D4979C',
    pricePerOz: '$1,750',
    category: 'alloy'
  },
  green_gold: {
    name: 'Green Gold',
    symbol: 'GGD',
    description: 'Gold-silver alloy',
    color: '#BDDA57',
    colorDark: '#A5C239',
    pricePerOz: '$1,680',
    category: 'alloy'
  },
  electrum: {
    name: 'Electrum',
    symbol: 'ELT',
    description: 'Natural gold-silver alloy',
    color: '#E6D690',
    colorDark: '#D4C270',
    pricePerOz: '$1,200',
    category: 'alloy'
  },

  // === BASE METALS ===
  copper: {
    name: 'Copper',
    symbol: 'XCU',
    description: 'Essential industrial metal',
    color: '#B87333',
    colorDark: '#A05A2C',
    pricePerOz: '$3.85',
    category: 'base'
  },
  bronze: {
    name: 'Bronze',
    symbol: 'XBZ',
    description: 'Copper-tin alloy',
    color: '#CD7F32',
    colorDark: '#8B5A2B',
    pricePerOz: '$4.20',
    category: 'alloy'
  },
  brass: {
    name: 'Brass',
    symbol: 'XBR',
    description: 'Copper-zinc alloy',
    color: '#E1C16E',
    colorDark: '#C9A94E',
    pricePerOz: '$2.10',
    category: 'alloy'
  },
  aluminum: {
    name: 'Aluminum',
    symbol: 'XAL',
    description: 'Lightweight versatile metal',
    color: '#D6D6D6',
    colorDark: '#BEBEBE',
    pricePerOz: '$0.85',
    category: 'base'
  },
  zinc: {
    name: 'Zinc',
    symbol: 'XZN',
    description: 'Galvanization essential',
    color: '#B4C7DC',
    colorDark: '#96AFCC',
    pricePerOz: '$1.15',
    category: 'base'
  },
  tin: {
    name: 'Tin',
    symbol: 'XSN',
    description: 'Corrosion-resistant coating',
    color: '#A8A8A8',
    colorDark: '#909090',
    pricePerOz: '$12.50',
    category: 'base'
  },
  lead: {
    name: 'Lead',
    symbol: 'XPB',
    description: 'Dense shielding metal',
    color: '#6B6B6B',
    colorDark: '#4B4B4B',
    pricePerOz: '$0.95',
    category: 'base'
  },
  nickel: {
    name: 'Nickel',
    symbol: 'XNI',
    description: 'Stainless steel component',
    color: '#A0A0A0',
    colorDark: '#808080',
    pricePerOz: '$7.80',
    category: 'base'
  },
  iron: {
    name: 'Iron',
    symbol: 'XFE',
    description: 'Most used metal globally',
    color: '#5C5C5C',
    colorDark: '#3C3C3C',
    pricePerOz: '$0.05',
    category: 'base'
  },
  steel: {
    name: 'Steel',
    symbol: 'STL',
    description: 'Iron-carbon alloy',
    color: '#71797E',
    colorDark: '#515960',
    pricePerOz: '$0.35',
    category: 'alloy'
  },
  stainless_steel: {
    name: 'Stainless Steel',
    symbol: 'SST',
    description: 'Corrosion-resistant steel',
    color: '#8A9A9A',
    colorDark: '#6A7A7A',
    pricePerOz: '$1.20',
    category: 'alloy'
  },
  cast_iron: {
    name: 'Cast Iron',
    symbol: 'CFE',
    description: 'High-carbon iron alloy',
    color: '#484848',
    colorDark: '#282828',
    pricePerOz: '$0.25',
    category: 'alloy'
  },

  // === INDUSTRIAL METALS ===
  titanium: {
    name: 'Titanium',
    symbol: 'XTI',
    description: 'Aerospace-grade strength',
    color: '#878681',
    colorDark: '#676661',
    pricePerOz: '$6.50',
    category: 'industrial'
  },
  tungsten: {
    name: 'Tungsten',
    symbol: 'XW',
    description: 'Highest melting point metal',
    color: '#5A5A5A',
    colorDark: '#3A3A3A',
    pricePerOz: '$1.50',
    category: 'industrial'
  },
  cobalt: {
    name: 'Cobalt',
    symbol: 'XCO',
    description: 'Battery essential metal',
    color: '#0047AB',
    colorDark: '#00338B',
    pricePerOz: '$15.20',
    category: 'industrial'
  },
  molybdenum: {
    name: 'Molybdenum',
    symbol: 'XMO',
    description: 'High-strength alloy metal',
    color: '#8C8C8C',
    colorDark: '#6C6C6C',
    pricePerOz: '$0.95',
    category: 'industrial'
  },
  tantalum: {
    name: 'Tantalum',
    symbol: 'XTA',
    description: 'Capacitor essential',
    color: '#9DA0A2',
    colorDark: '#7D8082',
    pricePerOz: '$75.00',
    category: 'industrial'
  },
  niobium: {
    name: 'Niobium',
    symbol: 'XNB',
    description: 'Superconductor material',
    color: '#9CADB7',
    colorDark: '#7C8D97',
    pricePerOz: '$18.50',
    category: 'industrial'
  },
  vanadium: {
    name: 'Vanadium',
    symbol: 'XV',
    description: 'Steel strengthener',
    color: '#7B7B7B',
    colorDark: '#5B5B5B',
    pricePerOz: '$12.00',
    category: 'industrial'
  },
  chromium: {
    name: 'Chromium',
    symbol: 'XCR',
    description: 'Chrome plating metal',
    color: '#DBE0E4',
    colorDark: '#BBC0C4',
    pricePerOz: '$4.50',
    category: 'industrial'
  },
  manganese: {
    name: 'Manganese',
    symbol: 'XMN',
    description: 'Steel production essential',
    color: '#8B8B8B',
    colorDark: '#6B6B6B',
    pricePerOz: '$0.85',
    category: 'industrial'
  },
  zirconium: {
    name: 'Zirconium',
    symbol: 'XZR',
    description: 'Nuclear reactor cladding',
    color: '#AEB5B7',
    colorDark: '#8E9597',
    pricePerOz: '$22.00',
    category: 'industrial'
  },

  // === RARE EARTH METALS ===
  neodymium: {
    name: 'Neodymium',
    symbol: 'XND',
    description: 'Strongest magnet material',
    color: '#C4D4E0',
    colorDark: '#A4B4C0',
    pricePerOz: '$42.00',
    category: 'rare_earth'
  },
  scandium: {
    name: 'Scandium',
    symbol: 'XSC',
    description: 'Aerospace alloy additive',
    color: '#E0E0E0',
    colorDark: '#C0C0C0',
    pricePerOz: '$1,400',
    category: 'rare_earth'
  },
  yttrium: {
    name: 'Yttrium',
    symbol: 'XY',
    description: 'LED and laser component',
    color: '#D0D0D0',
    colorDark: '#B0B0B0',
    pricePerOz: '$35.00',
    category: 'rare_earth'
  },
  lanthanum: {
    name: 'Lanthanum',
    symbol: 'XLA',
    description: 'Hybrid car batteries',
    color: '#F0F0F0',
    colorDark: '#D0D0D0',
    pricePerOz: '$2.80',
    category: 'rare_earth'
  },
  cerium: {
    name: 'Cerium',
    symbol: 'XCE',
    description: 'Catalytic converters',
    color: '#FAFAC8',
    colorDark: '#DADAA8',
    pricePerOz: '$2.20',
    category: 'rare_earth'
  },
  praseodymium: {
    name: 'Praseodymium',
    symbol: 'XPR',
    description: 'Aircraft engine alloys',
    color: '#C8D8C8',
    colorDark: '#A8B8A8',
    pricePerOz: '$38.00',
    category: 'rare_earth'
  },
  europium: {
    name: 'Europium',
    symbol: 'XEU',
    description: 'Red phosphor in displays',
    color: '#F5E6D3',
    colorDark: '#D5C6B3',
    pricePerOz: '$95.00',
    category: 'rare_earth'
  },
  terbium: {
    name: 'Terbium',
    symbol: 'XTB',
    description: 'Green phosphor material',
    color: '#C8D8C8',
    colorDark: '#A8B8A8',
    pricePerOz: '$420',
    category: 'rare_earth'
  },
  dysprosium: {
    name: 'Dysprosium',
    symbol: 'XDY',
    description: 'High-temp magnets',
    color: '#D0D8E0',
    colorDark: '#B0B8C0',
    pricePerOz: '$165',
    category: 'rare_earth'
  },

  // === STRATEGIC METALS ===
  lithium: {
    name: 'Lithium',
    symbol: 'XLI',
    description: 'EV battery essential',
    color: '#DCDCDC',
    colorDark: '#BCBCBC',
    pricePerOz: '$8.50',
    category: 'strategic'
  },
  beryllium: {
    name: 'Beryllium',
    symbol: 'XBE',
    description: 'Aerospace lightweight',
    color: '#A9A9A9',
    colorDark: '#898989',
    pricePerOz: '$450',
    category: 'strategic'
  },
  magnesium: {
    name: 'Magnesium',
    symbol: 'XMG',
    description: 'Ultra-lightweight metal',
    color: '#E8E8E8',
    colorDark: '#C8C8C8',
    pricePerOz: '$1.85',
    category: 'strategic'
  },
  gallium: {
    name: 'Gallium',
    symbol: 'XGA',
    description: 'Semiconductor essential',
    color: '#A0B0C0',
    colorDark: '#8090A0',
    pricePerOz: '$125',
    category: 'strategic'
  },
  germanium: {
    name: 'Germanium',
    symbol: 'XGE',
    description: 'Fiber optics material',
    color: '#B8B8B8',
    colorDark: '#989898',
    pricePerOz: '$550',
    category: 'strategic'
  },
  indium: {
    name: 'Indium',
    symbol: 'XIN',
    description: 'LCD screen coating',
    color: '#B0C4DE',
    colorDark: '#90A4BE',
    pricePerOz: '$150',
    category: 'strategic'
  },
  tellurium: {
    name: 'Tellurium',
    symbol: 'XTE',
    description: 'Solar panel material',
    color: '#C0C0C0',
    colorDark: '#A0A0A0',
    pricePerOz: '$35.00',
    category: 'strategic'
  },
  bismuth: {
    name: 'Bismuth',
    symbol: 'XBI',
    description: 'Lead-free solder',
    color: '#9F8170',
    colorDark: '#7F6150',
    pricePerOz: '$5.50',
    category: 'strategic'
  },
  antimony: {
    name: 'Antimony',
    symbol: 'XSB',
    description: 'Flame retardant',
    color: '#9C9C9C',
    colorDark: '#7C7C7C',
    pricePerOz: '$5.20',
    category: 'strategic'
  },
  rhenium: {
    name: 'Rhenium',
    symbol: 'XRE',
    description: 'Jet engine superalloys',
    color: '#B8C0C8',
    colorDark: '#98A0A8',
    pricePerOz: '$1,450',
    category: 'strategic'
  },

  // === MEME MINERALS (Real minerals with funny names) ===
  cummingtonite: {
    name: 'Cummingtonite',
    symbol: 'CUM',
    description: 'Magnesium-iron silicate from Cummington, MA',
    color: '#8B7355',
    colorDark: '#6B5335',
    pricePerOz: '$25',
    category: 'meme'
  },
  analcime: {
    name: 'Analcime',
    symbol: 'ANAL',
    description: 'Zeolite mineral, hydrated sodium aluminum silicate',
    color: '#F5F5DC',
    colorDark: '#D5D5BC',
    pricePerOz: '$15',
    category: 'meme'
  },
  dickite: {
    name: 'Dickite',
    symbol: 'DICK',
    description: 'Clay mineral named after Allan Dick',
    color: '#E8E8E8',
    colorDark: '#C8C8C8',
    pricePerOz: '$8',
    category: 'meme'
  },
  arsenic: {
    name: 'Arsenic',
    symbol: 'ASS',
    description: 'Toxic metalloid, poison of choice for royalty',
    color: '#4A4A4A',
    colorDark: '#2A2A2A',
    pricePerOz: '$1.50',
    category: 'meme'
  },
  uraninite: {
    name: 'Uraninite',
    symbol: 'URAN',
    description: 'Primary uranium ore, radioactive mineral',
    color: '#2F4F2F',
    colorDark: '#1F3F1F',
    pricePerOz: '$45',
    category: 'meme'
  },
  fukalite: {
    name: 'Fukalite',
    symbol: 'FUKA',
    description: 'Rare mineral from Fuka, Japan',
    color: '#FFFAF0',
    colorDark: '#E5E0D6',
    pricePerOz: '$120',
    category: 'meme'
  },
  cubanite: {
    name: 'Cubanite',
    symbol: 'CUBA',
    description: 'Copper-iron sulfide, named after Cuba',
    color: '#B8860B',
    colorDark: '#986B0B',
    pricePerOz: '$35',
    category: 'meme'
  },
  clintonite: {
    name: 'Clintonite',
    symbol: 'CLIT',
    description: 'Calcium aluminum silicate mica',
    color: '#90EE90',
    colorDark: '#70CE70',
    pricePerOz: '$55',
    category: 'meme'
  },
  mordenite: {
    name: 'Mordenite',
    symbol: 'MORD',
    description: 'Zeolite from Morden, Nova Scotia',
    color: '#F0FFF0',
    colorDark: '#D0E5D0',
    pricePerOz: '$18',
    category: 'meme'
  },
  erectorite: {
    name: 'Erectorite',
    symbol: 'EREC',
    description: 'Rare sodium lithium silicate mineral',
    color: '#FFB6C1',
    colorDark: '#E596A1',
    pricePerOz: '$200',
    category: 'meme'
  },
  fukuchilite: {
    name: 'Fukuchilite',
    symbol: 'FUKC',
    description: 'Copper sulfide from Fukuchi mine, Japan',
    color: '#2F2F2F',
    colorDark: '#1F1F1F',
    pricePerOz: '$85',
    category: 'meme'
  },
  bastnasite: {
    name: 'Bastnäsite',
    symbol: 'BAST',
    description: 'Rare earth carbonate, major REE ore',
    color: '#DAA520',
    colorDark: '#BA8500',
    pricePerOz: '$65',
    category: 'meme'
  },
  hookerite: {
    name: 'Hookerite',
    symbol: 'HOOK',
    description: 'Green copper silicate mineral',
    color: '#228B22',
    colorDark: '#186B18',
    pricePerOz: '$40',
    category: 'meme'
  },
  kunzite: {
    name: 'Kunzite',
    symbol: 'KUNZ',
    description: 'Pink spodumene variety, gemstone',
    color: '#E6A8D7',
    colorDark: '#C688B7',
    pricePerOz: '$150',
    category: 'meme'
  },
  pectolite: {
    name: 'Pectolite',
    symbol: 'PECT',
    description: 'Larimar variety is blue gemstone',
    color: '#ADD8E6',
    colorDark: '#8DB8C6',
    pricePerOz: '$75',
    category: 'meme'
  },
  phosgenite: {
    name: 'Phosgenite',
    symbol: 'PHOS',
    description: 'Lead chlorocarbonate, toxic but pretty',
    color: '#FAFAD2',
    colorDark: '#DADAB2',
    pricePerOz: '$95',
    category: 'meme'
  },
  crocidolite: {
    name: 'Crocidolite',
    symbol: 'CROC',
    description: 'Blue asbestos, tiger eye base',
    color: '#4169E1',
    colorDark: '#2149C1',
    pricePerOz: '$30',
    category: 'meme'
  },
  mimetite: {
    name: 'Mimetite',
    symbol: 'MIME',
    description: 'Lead arsenate, mimics pyromorphite',
    color: '#FFD700',
    colorDark: '#D4B700',
    pricePerOz: '$45',
    category: 'meme'
  },
  orpiment: {
    name: 'Orpiment',
    symbol: 'ORP',
    description: 'Arsenic sulfide, ancient gold pigment',
    color: '#FFD700',
    colorDark: '#E5C100',
    pricePerOz: '$20',
    category: 'meme'
  },
  realgar: {
    name: 'Realgar',
    symbol: 'REAL',
    description: 'Red arsenic sulfide, royal red',
    color: '#FF4500',
    colorDark: '#D53500',
    pricePerOz: '$22',
    category: 'meme'
  },
};

// Get metals by category
export function getMetalsByCategory(category: MetalInfo['category']): MetalType[] {
  return (Object.entries(METAL_INFO) as [MetalType, MetalInfo][])
    .filter(([_, info]) => info.category === category)
    .map(([type]) => type);
}

export const METAL_CATEGORIES = [
  { id: 'precious', name: 'Precious Metals', icon: '💎' },
  { id: 'alloy', name: 'Alloys', icon: '⚗️' },
  { id: 'base', name: 'Base Metals', icon: '🔩' },
  { id: 'industrial', name: 'Industrial Metals', icon: '🏭' },
  { id: 'rare_earth', name: 'Rare Earth', icon: '🌍' },
  { id: 'strategic', name: 'Strategic Metals', icon: '🔋' },
  { id: 'meme', name: 'Meme Minerals', icon: '😏' },
] as const;

export type PurityLevel = '999.9' | '999' | '995' | '950' | '925' | '900';

export const PURITY_INFO: Record<PurityLevel, { name: string; description: string }> = {
  '999.9': { name: '999.9 Fine', description: 'Investment grade (24K)' },
  '999': { name: '999 Fine', description: 'Bullion standard' },
  '995': { name: '995 Fine', description: 'Good delivery' },
  '950': { name: '950 Fine', description: 'High purity' },
  '925': { name: '925 Sterling', description: 'Sterling silver' },
  '900': { name: '900 Fine', description: 'Coin standard' },
};

export type WeightUnit = 'oz' | 'g' | 'kg';

export const WEIGHT_OPTIONS = [
  { value: 1, unit: 'oz' as WeightUnit, label: '1 oz' },
  { value: 10, unit: 'oz' as WeightUnit, label: '10 oz' },
  { value: 100, unit: 'g' as WeightUnit, label: '100g' },
  { value: 1, unit: 'kg' as WeightUnit, label: '1 kg' },
];

export interface MetalAppearance {
  type: MetalType;
  purity: PurityLevel;
  weight: number;
  weightUnit: WeightUnit;
  finish: 'polished' | 'matte' | 'brushed' | 'antique';
  shape: 'bar' | 'coin' | 'round' | 'ingot';
}

export interface MetalToken {
  id: string;
  appearance: MetalAppearance;
  name: string;
  ticker: string;
  description: string;
  totalSupply: number;
  backingRatio: number;
  vaultLocation: string;
  imageData: string;
  tokenAddress?: string;
  createdAt: number;
}

export const VAULT_LOCATIONS = [
  { id: 'zurich', name: 'Zurich, Switzerland', flag: '🇨🇭' },
  { id: 'london', name: 'London, UK', flag: '🇬🇧' },
  { id: 'singapore', name: 'Singapore', flag: '🇸🇬' },
  { id: 'dubai', name: 'Dubai, UAE', flag: '🇦🇪' },
  { id: 'hongkong', name: 'Hong Kong', flag: '🇭🇰' },
  { id: 'newyork', name: 'New York, USA', flag: '🇺🇸' },
  { id: 'tokyo', name: 'Tokyo, Japan', flag: '🇯🇵' },
  { id: 'frankfurt', name: 'Frankfurt, Germany', flag: '🇩🇪' },
];

export const FINISH_OPTIONS = [
  { id: 'polished', name: 'Polished', description: 'Mirror-like shine' },
  { id: 'matte', name: 'Matte', description: 'Non-reflective surface' },
  { id: 'brushed', name: 'Brushed', description: 'Fine parallel lines' },
  { id: 'antique', name: 'Antique', description: 'Aged patina look' },
];

export const SHAPE_OPTIONS = [
  { id: 'bar', name: 'Bar', description: 'Traditional ingot' },
  { id: 'coin', name: 'Coin', description: 'Round collectible' },
  { id: 'round', name: 'Round', description: 'Bullion round' },
  { id: 'ingot', name: 'Ingot', description: 'Poured ingot' },
];

export function formatSupply(supply: number): string {
  if (supply >= 1_000_000_000) {
    return `${(supply / 1_000_000_000).toFixed(0)}B`;
  }
  if (supply >= 1_000_000) {
    return `${(supply / 1_000_000).toFixed(0)}M`;
  }
  if (supply >= 1_000) {
    return `${(supply / 1_000).toFixed(0)}K`;
  }
  return supply.toString();
}

export function getMetalGradient(metal: MetalType): string {
  const info = METAL_INFO[metal];
  return `linear-gradient(135deg, ${info.color} 0%, ${info.colorDark} 100%)`;
}

export function generateRandomStats() {
  return {
    purity: Math.floor(Math.random() * 10) + 90,
    weight: Math.floor(Math.random() * 100) + 1,
    value: Math.floor(Math.random() * 10000) + 1000,
    volume: Math.floor(Math.random() * 1000) + 100,
  };
}
