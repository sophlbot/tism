// Metal RWA Icons - Pixel Art Bars, Ores, Nuggets, Crystals

interface IconProps {
  size?: number;
  color?: string;
  className?: string;
}

// ==================== PRECIOUS METALS ====================

// Gold - Classic trapezoid bar
export function GoldIcon({ size = 24, color = '#D4AF37', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Trapezoid gold bar */}
      <rect x="4" y="14" width="16" height="6" fill={color}/>
      <rect x="6" y="10" width="12" height="4" fill={color}/>
      <rect x="8" y="6" width="8" height="4" fill={color}/>
      {/* Highlight */}
      <rect x="9" y="7" width="3" height="2" fill="rgba(255,255,255,0.4)"/>
      <rect x="5" y="15" width="4" height="2" fill="rgba(255,255,255,0.25)"/>
      {/* Shadow */}
      <rect x="14" y="15" width="5" height="4" fill="rgba(0,0,0,0.15)"/>
    </svg>
  );
}

// Silver - Rounded bar with shine
export function SilverIcon({ size = 24, color = '#C0C0C0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Silver bar */}
      <rect x="3" y="8" width="18" height="10" fill={color}/>
      <rect x="4" y="9" width="16" height="8" fill={color}/>
      {/* Top bevel */}
      <rect x="3" y="8" width="18" height="2" fill="rgba(255,255,255,0.3)"/>
      {/* Shine streak */}
      <rect x="5" y="10" width="2" height="6" fill="rgba(255,255,255,0.35)"/>
      <rect x="8" y="11" width="1" height="4" fill="rgba(255,255,255,0.2)"/>
      {/* Shadow */}
      <rect x="15" y="14" width="5" height="3" fill="rgba(0,0,0,0.12)"/>
    </svg>
  );
}

// Platinum - Hexagonal ingot
export function PlatinumIcon({ size = 24, color = '#E5E4E2', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Hexagonal bar */}
      <polygon points="6,6 18,6 21,12 18,18 6,18 3,12" fill={color}/>
      {/* Inner detail */}
      <polygon points="8,8 16,8 18,12 16,16 8,16 6,12" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
      {/* Highlight */}
      <polygon points="6,6 12,6 10,10 4,10" fill="rgba(255,255,255,0.3)"/>
      {/* Shadow */}
      <polygon points="18,12 18,18 14,18 16,14" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Palladium - Square ingot with stamp
export function PalladiumIcon({ size = 24, color = '#CED0CE', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Square ingot */}
      <rect x="4" y="6" width="16" height="12" fill={color}/>
      {/* Stamp indent */}
      <rect x="8" y="9" width="8" height="6" fill="rgba(0,0,0,0.08)"/>
      <rect x="9" y="10" width="6" height="4" fill="rgba(0,0,0,0.05)"/>
      {/* Highlight */}
      <rect x="5" y="7" width="6" height="2" fill="rgba(255,255,255,0.35)"/>
      {/* Edge shadow */}
      <rect x="18" y="8" width="1" height="9" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Rhodium - Diamond-cut bar (rarest)
export function RhodiumIcon({ size = 24, color = '#E8E8E8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Diamond cut shape */}
      <polygon points="12,3 20,8 20,16 12,21 4,16 4,8" fill={color}/>
      {/* Facets */}
      <polygon points="12,3 4,8 12,10" fill="rgba(255,255,255,0.35)"/>
      <polygon points="12,3 20,8 12,10" fill="rgba(255,255,255,0.2)"/>
      <polygon points="12,10 4,8 4,16 12,14" fill="rgba(0,0,0,0.05)"/>
      <polygon points="12,10 20,8 20,16 12,14" fill="rgba(0,0,0,0.1)"/>
      {/* Center line */}
      <line x1="12" y1="10" x2="12" y2="21" stroke="rgba(0,0,0,0.08)" strokeWidth="1"/>
    </svg>
  );
}

// Iridium - Dense cube ingot
export function IridiumIcon({ size = 24, color = '#D9D9D9', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* 3D cube */}
      <polygon points="12,4 20,8 20,16 12,20 4,16 4,8" fill={color}/>
      {/* Top face */}
      <polygon points="12,4 20,8 12,12 4,8" fill="rgba(255,255,255,0.25)"/>
      {/* Left face */}
      <polygon points="4,8 12,12 12,20 4,16" fill="rgba(0,0,0,0.05)"/>
      {/* Right face */}
      <polygon points="20,8 12,12 12,20 20,16" fill="rgba(0,0,0,0.12)"/>
      {/* Highlight */}
      <rect x="6" y="6" width="3" height="2" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Osmium - Layered crystal (densest)
export function OsmiumIcon({ size = 24, color = '#8B98A5', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Crystal layers */}
      <polygon points="12,2 19,7 19,17 12,22 5,17 5,7" fill={color}/>
      {/* Layer lines */}
      <line x1="5" y1="9" x2="19" y2="9" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
      <line x1="5" y1="12" x2="19" y2="12" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
      <line x1="5" y1="15" x2="19" y2="15" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
      {/* Highlight facet */}
      <polygon points="12,2 5,7 7,8 12,4" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Ruthenium - Small granules/pellets
export function RutheniumIcon({ size = 24, color = '#A5A5A5', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Multiple small pellets */}
      <circle cx="8" cy="8" r="3" fill={color}/>
      <circle cx="16" cy="8" r="3" fill={color}/>
      <circle cx="12" cy="12" r="3" fill={color}/>
      <circle cx="6" cy="16" r="3" fill={color}/>
      <circle cx="14" cy="16" r="3" fill={color}/>
      <circle cx="18" cy="14" r="2" fill={color}/>
      {/* Highlights */}
      <circle cx="7" cy="7" r="1" fill="rgba(255,255,255,0.4)"/>
      <circle cx="15" cy="7" r="1" fill="rgba(255,255,255,0.4)"/>
      <circle cx="11" cy="11" r="1" fill="rgba(255,255,255,0.4)"/>
    </svg>
  );
}

// ==================== GOLD VARIANTS ====================

// White Gold - Bright white bar
export function WhiteGoldIcon({ size = 24, color = '#F5F5F5', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rectangular bar */}
      <rect x="3" y="8" width="18" height="10" fill={color}/>
      {/* Bright shine */}
      <rect x="4" y="9" width="3" height="8" fill="rgba(255,255,255,0.5)"/>
      <rect x="8" y="10" width="1" height="6" fill="rgba(255,255,255,0.3)"/>
      {/* Subtle edge */}
      <rect x="19" y="9" width="1" height="8" fill="rgba(0,0,0,0.08)"/>
      <rect x="4" y="16" width="15" height="1" fill="rgba(0,0,0,0.06)"/>
    </svg>
  );
}

// Rose Gold - Pinkish bar
export function RoseGoldIcon({ size = 24, color = '#E8B4B8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Curved top bar */}
      <rect x="4" y="10" width="16" height="8" fill={color}/>
      <ellipse cx="12" cy="10" rx="8" ry="3" fill={color}/>
      {/* Highlight */}
      <ellipse cx="9" cy="9" rx="3" ry="1.5" fill="rgba(255,255,255,0.35)"/>
      <rect x="5" y="12" width="3" height="4" fill="rgba(255,255,255,0.2)"/>
      {/* Shadow */}
      <rect x="14" y="14" width="5" height="3" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Green Gold - Greenish tint bar
export function GreenGoldIcon({ size = 24, color = '#BDDA57', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Octagonal bar */}
      <polygon points="7,5 17,5 21,9 21,15 17,19 7,19 3,15 3,9" fill={color}/>
      {/* Inner border */}
      <polygon points="8,7 16,7 19,10 19,14 16,17 8,17 5,14 5,10" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
      {/* Highlight */}
      <polygon points="7,5 12,5 10,8 5,8" fill="rgba(255,255,255,0.35)"/>
      {/* Shadow */}
      <polygon points="17,13 21,15 17,19 15,17" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Electrum - Natural alloy nugget
export function ElectrumIcon({ size = 24, color = '#E6D690', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Irregular nugget shape */}
      <polygon points="6,8 10,4 16,5 20,9 19,15 14,19 8,18 4,13" fill={color}/>
      {/* Texture bumps */}
      <circle cx="10" cy="9" r="2" fill="rgba(255,255,255,0.25)"/>
      <circle cx="14" cy="13" r="2" fill="rgba(0,0,0,0.08)"/>
      {/* Highlight */}
      <polygon points="10,4 14,5 12,8 8,7" fill="rgba(255,255,255,0.35)"/>
    </svg>
  );
}

// ==================== BASE METALS ====================

// Copper - Orange-red bar with patina hints
export function CopperIcon({ size = 24, color = '#B87333', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rectangular bar */}
      <rect x="3" y="7" width="18" height="11" fill={color}/>
      {/* Top bevel */}
      <rect x="3" y="7" width="18" height="3" fill="rgba(255,255,255,0.2)"/>
      {/* Highlight streak */}
      <rect x="5" y="9" width="2" height="7" fill="rgba(255,255,255,0.25)"/>
      {/* Shadow */}
      <rect x="16" y="13" width="4" height="4" fill="rgba(0,0,0,0.12)"/>
      {/* Patina hint */}
      <rect x="17" y="8" width="3" height="2" fill="rgba(100,180,150,0.2)"/>
    </svg>
  );
}

// Bronze - Darker copper tone bar
export function BronzeIcon({ size = 24, color = '#CD7F32', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Shield-shaped ingot */}
      <polygon points="6,4 18,4 20,10 12,20 4,10" fill={color}/>
      {/* Inner detail */}
      <polygon points="8,6 16,6 17,10 12,17 7,10" stroke="rgba(0,0,0,0.12)" strokeWidth="1" fill="none"/>
      {/* Highlight */}
      <polygon points="6,4 12,4 11,7 5,7" fill="rgba(255,255,255,0.3)"/>
      {/* Shadow */}
      <polygon points="12,14 17,10 20,10 12,20" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Brass - Yellow-gold tone bar
export function BrassIcon({ size = 24, color = '#E1C16E', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rounded rectangle bar */}
      <rect x="3" y="8" width="18" height="9" rx="2" fill={color}/>
      {/* Top highlight */}
      <rect x="4" y="9" width="16" height="2" fill="rgba(255,255,255,0.3)"/>
      {/* Shine */}
      <rect x="6" y="10" width="2" height="5" fill="rgba(255,255,255,0.2)"/>
      {/* Shadow */}
      <rect x="15" y="13" width="5" height="3" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Aluminum - Light silvery bar
export function AluminumIcon({ size = 24, color = '#D6D6D6', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Thin rectangular sheet */}
      <rect x="2" y="9" width="20" height="7" fill={color}/>
      {/* Bright shine */}
      <rect x="3" y="10" width="8" height="2" fill="rgba(255,255,255,0.45)"/>
      <rect x="4" y="11" width="2" height="4" fill="rgba(255,255,255,0.25)"/>
      {/* Edge detail */}
      <rect x="20" y="10" width="1" height="5" fill="rgba(0,0,0,0.08)"/>
    </svg>
  );
}

// Zinc - Bluish-grey ingot
export function ZincIcon({ size = 24, color = '#B4C7DC', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Trapezoidal ingot */}
      <polygon points="5,16 7,6 17,6 19,16" fill={color}/>
      {/* Top face */}
      <rect x="7" y="6" width="10" height="2" fill="rgba(255,255,255,0.3)"/>
      {/* Highlight */}
      <polygon points="7,6 9,6 8,12 6,12" fill="rgba(255,255,255,0.25)"/>
      {/* Shadow */}
      <polygon points="15,10 19,16 17,16 14,12" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Tin - Silvery white bars
export function TinIcon({ size = 24, color = '#A8A8A8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Stacked small bars */}
      <rect x="4" y="14" width="16" height="5" fill={color}/>
      <rect x="5" y="9" width="14" height="5" fill={color}/>
      <rect x="6" y="4" width="12" height="5" fill={color}/>
      {/* Highlights */}
      <rect x="7" y="5" width="4" height="2" fill="rgba(255,255,255,0.35)"/>
      <rect x="6" y="10" width="4" height="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="5" y="15" width="4" height="2" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

// Lead - Dark heavy ingot
export function LeadIcon({ size = 24, color = '#6B6B6B', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Heavy block */}
      <rect x="4" y="6" width="16" height="13" fill={color}/>
      {/* Dull highlight */}
      <rect x="5" y="7" width="5" height="3" fill="rgba(255,255,255,0.15)"/>
      {/* Dark areas */}
      <rect x="14" y="12" width="5" height="6" fill="rgba(0,0,0,0.15)"/>
      {/* Weight lines */}
      <rect x="4" y="11" width="16" height="1" fill="rgba(0,0,0,0.1)"/>
      <rect x="4" y="15" width="16" height="1" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Nickel - Silvery cube
export function NickelIcon({ size = 24, color = '#A0A0A0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Cube shape */}
      <polygon points="12,3 21,8 21,16 12,21 3,16 3,8" fill={color}/>
      {/* Top face */}
      <polygon points="12,3 21,8 12,11 3,8" fill="rgba(255,255,255,0.25)"/>
      {/* Left face */}
      <polygon points="3,8 12,11 12,21 3,16" fill={color}/>
      {/* Right face shadow */}
      <polygon points="21,8 12,11 12,21 21,16" fill="rgba(0,0,0,0.12)"/>
      {/* Highlight */}
      <polygon points="12,3 6,6 8,7 12,5" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Iron - Dark raw ore chunk
export function IronIcon({ size = 24, color = '#5C5C5C', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rough ore shape */}
      <polygon points="5,10 8,4 14,3 20,7 21,14 17,20 9,21 4,16" fill={color}/>
      {/* Ore texture */}
      <polygon points="10,7 14,6 16,9 13,11 9,10" fill="rgba(139,69,19,0.3)"/>
      <polygon points="7,14 11,13 12,17 8,18" fill="rgba(139,69,19,0.2)"/>
      {/* Highlight */}
      <polygon points="8,4 12,4 11,7 7,8" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

// Steel - Refined shiny bar
export function SteelIcon({ size = 24, color = '#71797E', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* I-beam shape */}
      <rect x="4" y="4" width="16" height="4" fill={color}/>
      <rect x="9" y="8" width="6" height="8" fill={color}/>
      <rect x="4" y="16" width="16" height="4" fill={color}/>
      {/* Highlights */}
      <rect x="5" y="5" width="6" height="2" fill="rgba(255,255,255,0.3)"/>
      <rect x="5" y="17" width="6" height="2" fill="rgba(255,255,255,0.25)"/>
      <rect x="10" y="9" width="2" height="6" fill="rgba(255,255,255,0.15)"/>
    </svg>
  );
}

// Stainless Steel - Very shiny bar
export function StainlessSteelIcon({ size = 24, color = '#8A9A9A', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Polished bar */}
      <rect x="3" y="8" width="18" height="9" fill={color}/>
      {/* Mirror shine */}
      <rect x="4" y="9" width="4" height="7" fill="rgba(255,255,255,0.4)"/>
      <rect x="9" y="10" width="2" height="5" fill="rgba(255,255,255,0.25)"/>
      <rect x="12" y="11" width="1" height="4" fill="rgba(255,255,255,0.15)"/>
      {/* Reflection */}
      <rect x="16" y="12" width="4" height="4" fill="rgba(200,220,220,0.2)"/>
    </svg>
  );
}

// Cast Iron - Rough textured bar
export function CastIronIcon({ size = 24, color = '#484848', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Heavy rough bar */}
      <rect x="3" y="7" width="18" height="11" fill={color}/>
      {/* Texture */}
      <rect x="5" y="9" width="2" height="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="9" y="12" width="2" height="2" fill="rgba(255,255,255,0.08)"/>
      <rect x="14" y="10" width="2" height="2" fill="rgba(255,255,255,0.1)"/>
      <rect x="17" y="14" width="2" height="2" fill="rgba(0,0,0,0.15)"/>
      {/* Dull highlight */}
      <rect x="4" y="8" width="5" height="2" fill="rgba(255,255,255,0.12)"/>
    </svg>
  );
}

// ==================== INDUSTRIAL METALS ====================

// Titanium - Sleek aerospace bar
export function TitaniumIcon({ size = 24, color = '#878681', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Angular bar */}
      <polygon points="4,8 20,6 21,16 5,18" fill={color}/>
      {/* Top surface */}
      <polygon points="4,8 20,6 20,9 4,11" fill="rgba(255,255,255,0.25)"/>
      {/* Highlight */}
      <polygon points="5,9 10,8 10,11 5,12" fill="rgba(255,255,255,0.2)"/>
      {/* Shadow */}
      <polygon points="16,12 21,16 17,17 14,14" fill="rgba(0,0,0,0.12)"/>
    </svg>
  );
}

// Tungsten - Dense heavy cube
export function TungstenIcon({ size = 24, color = '#5A5A5A', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Heavy square */}
      <rect x="4" y="4" width="16" height="16" fill={color}/>
      {/* Weight indicator lines */}
      <rect x="4" y="8" width="16" height="1" fill="rgba(0,0,0,0.15)"/>
      <rect x="4" y="12" width="16" height="1" fill="rgba(0,0,0,0.15)"/>
      <rect x="4" y="16" width="16" height="1" fill="rgba(0,0,0,0.15)"/>
      {/* Subtle highlight */}
      <rect x="5" y="5" width="4" height="2" fill="rgba(255,255,255,0.15)"/>
    </svg>
  );
}

// Cobalt - Blue-tinted crystal
export function CobaltIcon({ size = 24, color = '#0047AB', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Crystal formation */}
      <polygon points="12,2 18,7 18,17 12,22 6,17 6,7" fill={color}/>
      {/* Facets */}
      <polygon points="12,2 6,7 12,9" fill="rgba(255,255,255,0.3)"/>
      <polygon points="12,2 18,7 12,9" fill="rgba(255,255,255,0.15)"/>
      {/* Crystal shine */}
      <polygon points="8,8 10,7 10,11 8,12" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

// Molybdenum - Silvery rod
export function MolybdenumIcon({ size = 24, color = '#8C8C8C', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rod/cylinder shape */}
      <rect x="8" y="3" width="8" height="18" fill={color}/>
      {/* Top cap */}
      <ellipse cx="12" cy="4" rx="4" ry="2" fill="rgba(255,255,255,0.3)"/>
      {/* Side highlight */}
      <rect x="9" y="5" width="2" height="14" fill="rgba(255,255,255,0.2)"/>
      {/* Shadow side */}
      <rect x="14" y="6" width="1" height="13" fill="rgba(0,0,0,0.15)"/>
    </svg>
  );
}

// Tantalum - Dark dense bar
export function TantalumIcon({ size = 24, color = '#9DA0A2', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rectangle with chamfer */}
      <polygon points="6,5 18,5 20,7 20,17 18,19 6,19 4,17 4,7" fill={color}/>
      {/* Inner line */}
      <polygon points="7,7 17,7 18,8 18,16 17,17 7,17 6,16 6,8" stroke="rgba(0,0,0,0.1)" strokeWidth="1" fill="none"/>
      {/* Highlight */}
      <polygon points="6,5 12,5 11,8 5,8" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

// Niobium - Iridescent bar
export function NiobiumIcon({ size = 24, color = '#9CADB7', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Bar with color hints */}
      <rect x="4" y="7" width="16" height="10" fill={color}/>
      {/* Iridescent colors */}
      <rect x="5" y="8" width="4" height="3" fill="rgba(200,150,255,0.25)"/>
      <rect x="10" y="9" width="4" height="4" fill="rgba(100,200,255,0.2)"/>
      <rect x="15" y="11" width="4" height="4" fill="rgba(255,200,150,0.2)"/>
      {/* Highlight */}
      <rect x="5" y="8" width="6" height="2" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Vanadium - V-shaped ingot
export function VanadiumIcon({ size = 24, color = '#7B7B7B', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* V-shaped bar */}
      <polygon points="3,5 8,5 12,17 16,5 21,5 21,9 14,21 10,21 3,9" fill={color}/>
      {/* Highlight */}
      <polygon points="3,5 8,5 9,8 4,8" fill="rgba(255,255,255,0.3)"/>
      <polygon points="16,5 21,5 20,8 17,8" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

// Chromium - Mirror shine bar
export function ChromiumIcon({ size = 24, color = '#DBE0E4', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Highly polished bar */}
      <rect x="3" y="8" width="18" height="8" fill={color}/>
      {/* Chrome reflections */}
      <rect x="4" y="9" width="5" height="6" fill="rgba(255,255,255,0.5)"/>
      <rect x="10" y="10" width="2" height="4" fill="rgba(255,255,255,0.3)"/>
      <rect x="14" y="11" width="1" height="3" fill="rgba(255,255,255,0.2)"/>
      {/* Mirror effect */}
      <rect x="16" y="12" width="4" height="3" fill="rgba(180,200,220,0.3)"/>
    </svg>
  );
}

// Manganese - Brittle chunks
export function ManganeseIcon({ size = 24, color = '#8B8B8B', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Irregular chunks */}
      <polygon points="5,8 9,4 15,5 19,10 18,16 13,19 7,18 4,13" fill={color}/>
      {/* Fracture lines */}
      <line x1="9" y1="6" x2="12" y2="12" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
      <line x1="15" y1="9" x2="14" y2="16" stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
      {/* Highlight */}
      <polygon points="9,4 14,5 12,8 8,7" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

// Zirconium - Crystal bar
export function ZirconiumIcon({ size = 24, color = '#AEB5B7', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Crystal bar */}
      <polygon points="8,3 16,3 19,6 19,18 16,21 8,21 5,18 5,6" fill={color}/>
      {/* Facet highlights */}
      <polygon points="8,3 16,3 15,6 9,6" fill="rgba(255,255,255,0.35)"/>
      <polygon points="5,6 9,6 9,18 5,18" fill="rgba(255,255,255,0.15)"/>
      {/* Shadow facet */}
      <polygon points="19,6 15,6 15,18 19,18" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// ==================== RARE EARTH METALS ====================

// Neodymium - Magnet bar (red/silver)
export function NeodymiumIcon({ size = 24, color = '#C4D4E0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Two-tone bar */}
      <rect x="4" y="7" width="8" height="10" fill="#CC3333"/>
      <rect x="12" y="7" width="8" height="10" fill={color}/>
      {/* Highlight */}
      <rect x="5" y="8" width="3" height="3" fill="rgba(255,255,255,0.3)"/>
      <rect x="13" y="8" width="3" height="3" fill="rgba(255,255,255,0.35)"/>
      {/* N/S marks */}
      <rect x="7" y="11" width="2" height="3" fill="rgba(255,255,255,0.2)"/>
      <rect x="15" y="11" width="2" height="3" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Scandium - Light silvery crystal
export function ScandiumIcon({ size = 24, color = '#E0E0E0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Pointed crystal */}
      <polygon points="12,2 18,8 16,20 8,20 6,8" fill={color}/>
      {/* Crystal faces */}
      <polygon points="12,2 6,8 12,10" fill="rgba(255,255,255,0.35)"/>
      <polygon points="12,2 18,8 12,10" fill="rgba(255,255,255,0.2)"/>
      {/* Bottom shadow */}
      <polygon points="12,10 16,20 12,18 8,20" fill="rgba(0,0,0,0.08)"/>
    </svg>
  );
}

// Yttrium - Silvery metallic chunks
export function YttriumIcon({ size = 24, color = '#D0D0D0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Metallic chunk */}
      <polygon points="6,6 12,3 18,6 20,12 18,18 12,21 6,18 4,12" fill={color}/>
      {/* Facets */}
      <polygon points="12,3 18,6 14,10 10,10 6,6" fill="rgba(255,255,255,0.3)"/>
      <polygon points="4,12 6,6 10,10 10,14 6,18" fill="rgba(255,255,255,0.15)"/>
      {/* Shadow */}
      <polygon points="20,12 18,18 14,14" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Lanthanum - Silvery white bar
export function LanthanumIcon({ size = 24, color = '#F0F0F0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Soft metal bar */}
      <rect x="4" y="7" width="16" height="10" rx="1" fill={color}/>
      {/* Oxidation hint */}
      <rect x="15" y="8" width="4" height="8" fill="rgba(200,200,180,0.3)"/>
      {/* Highlight */}
      <rect x="5" y="8" width="5" height="3" fill="rgba(255,255,255,0.4)"/>
      <rect x="6" y="10" width="2" height="5" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

// Cerium - Yellowish tint bar
export function CeriumIcon({ size = 24, color = '#FAFAC8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Soft bar */}
      <rect x="4" y="6" width="16" height="12" fill={color}/>
      {/* Cut corner detail */}
      <polygon points="4,6 8,6 4,10" fill="rgba(255,255,255,0.3)"/>
      <polygon points="20,6 20,10 16,6" fill="rgba(255,255,255,0.2)"/>
      {/* Highlight */}
      <rect x="5" y="7" width="4" height="2" fill="rgba(255,255,255,0.35)"/>
      {/* Shadow */}
      <rect x="16" y="14" width="3" height="3" fill="rgba(0,0,0,0.08)"/>
    </svg>
  );
}

// Praseodymium - Green tinted crystal
export function PraseodymiumIcon({ size = 24, color = '#C8D8C8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rectangular crystal */}
      <rect x="5" y="5" width="14" height="14" fill={color}/>
      {/* Green tint overlay */}
      <rect x="7" y="7" width="10" height="10" fill="rgba(100,180,100,0.2)"/>
      {/* Highlight */}
      <rect x="6" y="6" width="5" height="3" fill="rgba(255,255,255,0.35)"/>
      {/* Crystal edge */}
      <rect x="17" y="7" width="1" height="11" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Europium - Soft silvery bar
export function EuropiumIcon({ size = 24, color = '#F5E6D3', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Rounded bar */}
      <rect x="4" y="8" width="16" height="9" rx="1" fill={color}/>
      {/* Top bevel */}
      <rect x="4" y="8" width="16" height="2" fill="rgba(255,255,255,0.35)"/>
      {/* Soft highlight */}
      <rect x="5" y="9" width="3" height="6" fill="rgba(255,255,255,0.2)"/>
      {/* Subtle red hint (for phosphor) */}
      <rect x="14" y="12" width="5" height="4" fill="rgba(255,200,200,0.15)"/>
    </svg>
  );
}

// Terbium - Green-tinted crystal
export function TerbiumIcon({ size = 24, color = '#C8D8C8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Hexagonal crystal */}
      <polygon points="12,3 19,7 19,17 12,21 5,17 5,7" fill={color}/>
      {/* Green glow effect */}
      <polygon points="12,6 16,8 16,16 12,18 8,16 8,8" fill="rgba(100,255,100,0.15)"/>
      {/* Facet highlight */}
      <polygon points="12,3 5,7 8,8 12,5" fill="rgba(255,255,255,0.35)"/>
      {/* Shadow */}
      <polygon points="19,7 16,8 16,16 19,17" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Dysprosium - Silvery bright crystal
export function DysprosiumIcon({ size = 24, color = '#D0D8E0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Double-terminated crystal */}
      <polygon points="12,2 17,6 17,18 12,22 7,18 7,6" fill={color}/>
      {/* Facets */}
      <polygon points="12,2 7,6 12,8" fill="rgba(255,255,255,0.35)"/>
      <polygon points="12,2 17,6 12,8" fill="rgba(255,255,255,0.2)"/>
      <polygon points="12,22 7,18 12,16" fill="rgba(0,0,0,0.08)"/>
      <polygon points="12,22 17,18 12,16" fill="rgba(0,0,0,0.12)"/>
      {/* Center highlight */}
      <rect x="9" y="10" width="2" height="4" fill="rgba(255,255,255,0.15)"/>
    </svg>
  );
}

// ==================== STRATEGIC METALS ====================

// Lithium - Light silvery soft metal
export function LithiumIcon({ size = 24, color = '#DCDCDC', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Very light bar (floats on water) */}
      <rect x="3" y="9" width="18" height="7" fill={color}/>
      {/* Bright shine */}
      <rect x="4" y="10" width="6" height="2" fill="rgba(255,255,255,0.45)"/>
      <rect x="5" y="11" width="2" height="4" fill="rgba(255,255,255,0.3)"/>
      {/* Oxidation */}
      <rect x="16" y="10" width="4" height="5" fill="rgba(180,180,160,0.25)"/>
    </svg>
  );
}

// Beryllium - Hard light grey
export function BerylliumIcon({ size = 24, color = '#A9A9A9', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Hexagonal cross-section */}
      <polygon points="8,4 16,4 20,12 16,20 8,20 4,12" fill={color}/>
      {/* Facet detail */}
      <polygon points="8,4 16,4 14,10 10,10" fill="rgba(255,255,255,0.3)"/>
      <polygon points="4,12 8,4 10,10 8,14" fill="rgba(255,255,255,0.15)"/>
      {/* Shadow */}
      <polygon points="20,12 16,20 14,14" fill="rgba(0,0,0,0.12)"/>
    </svg>
  );
}

// Magnesium - Bright silvery bar
export function MagnesiumIcon({ size = 24, color = '#E8E8E8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Light bar */}
      <rect x="4" y="8" width="16" height="9" fill={color}/>
      {/* Very bright highlight */}
      <rect x="5" y="9" width="4" height="7" fill="rgba(255,255,255,0.5)"/>
      <rect x="10" y="10" width="2" height="5" fill="rgba(255,255,255,0.3)"/>
      {/* Fire/spark hint */}
      <rect x="17" y="9" width="2" height="2" fill="rgba(255,200,150,0.3)"/>
    </svg>
  );
}

// Gallium - Liquid-like metal
export function GalliumIcon({ size = 24, color = '#A0B0C0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Melting/liquid shape */}
      <ellipse cx="12" cy="14" rx="8" ry="5" fill={color}/>
      <path d="M8,8 Q8,14 12,14 Q16,14 16,8 Q16,4 12,4 Q8,4 8,8Z" fill={color}/>
      {/* Liquid shine */}
      <ellipse cx="10" cy="8" rx="2" ry="3" fill="rgba(255,255,255,0.4)"/>
      <ellipse cx="10" cy="13" rx="3" ry="1.5" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

// Germanium - Greyish crystal
export function GermaniumIcon({ size = 24, color = '#B8B8B8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Crystalline structure */}
      <polygon points="12,3 20,9 20,15 12,21 4,15 4,9" fill={color}/>
      {/* Facets */}
      <polygon points="12,3 4,9 12,11" fill="rgba(255,255,255,0.3)"/>
      <polygon points="12,3 20,9 12,11" fill="rgba(255,255,255,0.15)"/>
      {/* Inner glow (semiconductor) */}
      <polygon points="12,11 8,13 12,17 16,13" fill="rgba(100,150,200,0.15)"/>
    </svg>
  );
}

// Indium - Very soft silvery
export function IndiumIcon({ size = 24, color = '#B0C4DE', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Soft rounded bar */}
      <rect x="4" y="7" width="16" height="10" rx="2" fill={color}/>
      {/* Soft shine */}
      <rect x="5" y="8" width="5" height="3" fill="rgba(255,255,255,0.35)"/>
      <rect x="6" y="10" width="2" height="5" fill="rgba(255,255,255,0.2)"/>
      {/* Dent marks (soft metal) */}
      <ellipse cx="15" cy="12" rx="2" ry="1" fill="rgba(0,0,0,0.08)"/>
    </svg>
  );
}

// Tellurium - Brittle silvery crystal
export function TelluriumIcon({ size = 24, color = '#C0C0C0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Brittle crystal chunks */}
      <polygon points="6,8 10,4 16,5 20,10 18,16 12,19 6,16" fill={color}/>
      {/* Fracture lines */}
      <line x1="10" y1="5" x2="14" y2="14" stroke="rgba(0,0,0,0.12)" strokeWidth="1"/>
      <line x1="16" y1="8" x2="10" y2="16" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      {/* Highlight */}
      <polygon points="10,4 14,5 12,8 8,7" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Bismuth - Rainbow crystal steps
export function BismuthIcon({ size = 24, color = '#9F8170', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Stepped crystal structure */}
      <rect x="4" y="4" width="16" height="16" fill={color}/>
      <rect x="6" y="6" width="12" height="12" fill="rgba(200,150,255,0.25)"/>
      <rect x="8" y="8" width="8" height="8" fill="rgba(150,200,255,0.25)"/>
      <rect x="10" y="10" width="4" height="4" fill="rgba(255,200,150,0.25)"/>
      {/* Highlight */}
      <rect x="5" y="5" width="4" height="2" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Antimony - Brittle silvery chunks
export function AntimonyIcon({ size = 24, color = '#9C9C9C', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Brittle crystal */}
      <polygon points="8,4 16,4 20,10 18,18 12,20 6,18 4,10" fill={color}/>
      {/* Facet faces */}
      <polygon points="8,4 16,4 14,9 10,9" fill="rgba(255,255,255,0.3)"/>
      <polygon points="4,10 8,4 10,9 8,14" fill="rgba(255,255,255,0.15)"/>
      {/* Fracture */}
      <line x1="12" y1="8" x2="14" y2="16" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// Rhenium - Dense silvery bar
export function RheniumIcon({ size = 24, color = '#B8C0C8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Dense small bar */}
      <rect x="5" y="6" width="14" height="12" fill={color}/>
      {/* Weight lines */}
      <rect x="5" y="10" width="14" height="1" fill="rgba(0,0,0,0.1)"/>
      <rect x="5" y="14" width="14" height="1" fill="rgba(0,0,0,0.1)"/>
      {/* Highlight */}
      <rect x="6" y="7" width="5" height="2" fill="rgba(255,255,255,0.3)"/>
      {/* Dense shadow */}
      <rect x="15" y="12" width="3" height="5" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// ==================== MEME MINERALS ====================

// Cummingtonite - Brown fibrous crystal
export function CummingtoniteIcon({ size = 24, color = '#8B7355', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Fibrous crystal shape */}
      <polygon points="6,20 4,12 8,4 12,4 16,4 20,12 18,20" fill={color}/>
      {/* Fiber lines */}
      <line x1="8" y1="6" x2="7" y2="18" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
      <line x1="12" y1="5" x2="12" y2="19" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
      <line x1="16" y1="6" x2="17" y2="18" stroke="rgba(0,0,0,0.2)" strokeWidth="1"/>
      {/* Highlight */}
      <polygon points="8,5 12,4 10,10 6,8" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

// Analcime - White cubic crystal
export function AnalcimeIcon({ size = 24, color = '#F5F5DC', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Trapezohedral crystal */}
      <polygon points="12,2 20,6 22,14 16,22 8,22 2,14 4,6" fill={color}/>
      {/* Facets */}
      <polygon points="12,2 4,6 6,10 12,8" fill="rgba(255,255,255,0.3)"/>
      <polygon points="12,2 20,6 18,10 12,8" fill="rgba(255,255,255,0.15)"/>
      {/* Shadow facets */}
      <polygon points="8,22 2,14 6,14 10,20" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Dickite - White clay layered
export function DickiteIcon({ size = 24, color = '#E8E8E8', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Layered clay sheets */}
      <rect x="4" y="4" width="16" height="3" fill={color}/>
      <rect x="5" y="8" width="14" height="3" fill={color}/>
      <rect x="4" y="12" width="16" height="3" fill={color}/>
      <rect x="5" y="16" width="14" height="3" fill={color}/>
      {/* Highlights */}
      <rect x="5" y="4" width="8" height="1" fill="rgba(255,255,255,0.4)"/>
      <rect x="6" y="12" width="6" height="1" fill="rgba(255,255,255,0.4)"/>
    </svg>
  );
}

// Arsenic - Dark metallic chunks
export function ArsenicIcon({ size = 24, color = '#4A4A4A', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Metallic chunks with skull hint */}
      <polygon points="4,18 2,10 6,4 12,2 18,4 22,10 20,18 12,22" fill={color}/>
      {/* Toxic shimmer */}
      <polygon points="12,2 6,4 8,8 12,6 16,8 18,4" fill="rgba(100,255,100,0.15)"/>
      {/* Dark facets */}
      <polygon points="2,10 4,18 8,14 6,8" fill="rgba(0,0,0,0.2)"/>
      <polygon points="22,10 20,18 16,14 18,8" fill="rgba(0,0,0,0.15)"/>
    </svg>
  );
}

// Uraninite - Dark green radioactive ore
export function UraniniteIcon({ size = 24, color = '#2F4F2F', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Dense ore chunk */}
      <polygon points="4,16 2,10 4,4 10,2 18,4 22,10 20,16 14,20 6,20" fill={color}/>
      {/* Radioactive glow spots */}
      <circle cx="10" cy="10" r="2" fill="rgba(50,255,50,0.3)"/>
      <circle cx="15" cy="12" r="1.5" fill="rgba(50,255,50,0.25)"/>
      <circle cx="8" cy="15" r="1" fill="rgba(50,255,50,0.2)"/>
      {/* Dark depth */}
      <polygon points="14,20 20,16 18,14 12,18" fill="rgba(0,0,0,0.2)"/>
    </svg>
  );
}

// Fukalite - Cream white rare crystal
export function FukaliteIcon({ size = 24, color = '#FFFAF0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Prismatic crystal */}
      <polygon points="12,2 18,6 18,18 12,22 6,18 6,6" fill={color}/>
      {/* Crystal facets */}
      <polygon points="12,2 6,6 6,10 12,8" fill="rgba(255,255,255,0.3)"/>
      <polygon points="12,2 18,6 18,10 12,8" fill="rgba(255,220,180,0.2)"/>
      {/* Termination */}
      <line x1="12" y1="8" x2="12" y2="22" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// Cubanite - Bronze-gold sulfide
export function CubaniteIcon({ size = 24, color = '#B8860B', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Elongated crystal */}
      <polygon points="6,20 4,14 6,4 10,2 14,2 18,4 20,14 18,20" fill={color}/>
      {/* Metallic luster */}
      <polygon points="10,2 6,4 6,8 10,6 14,6 18,8 18,4 14,2" fill="rgba(255,255,255,0.25)"/>
      {/* Striations */}
      <line x1="8" y1="8" x2="7" y2="18" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
      <line x1="16" y1="8" x2="17" y2="18" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
    </svg>
  );
}

// Clintonite - Green mica
export function ClintoniteIcon({ size = 24, color = '#90EE90', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Hexagonal mica plate */}
      <polygon points="12,2 20,6 20,18 12,22 4,18 4,6" fill={color}/>
      {/* Pearly layers */}
      <line x1="4" y1="10" x2="20" y2="10" stroke="rgba(255,255,255,0.4)" strokeWidth="2"/>
      <line x1="4" y1="14" x2="20" y2="14" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
      {/* Top highlight */}
      <polygon points="12,2 4,6 8,8 12,4 16,8 20,6" fill="rgba(255,255,255,0.35)"/>
    </svg>
  );
}

// Mordenite - White fibrous zeolite
export function MordeniteIcon({ size = 24, color = '#F0FFF0', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Fibrous spray */}
      <polygon points="12,22 8,20 4,14 4,8 8,4 12,2 16,4 20,8 20,14 16,20" fill={color}/>
      {/* Radiating fibers */}
      <line x1="12" y1="12" x2="6" y2="6" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="12" y1="12" x2="18" y2="6" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="12" y1="12" x2="4" y2="12" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="12" y1="12" x2="20" y2="12" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="12" y1="12" x2="12" y2="4" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// Erectorite - Pink rare mineral
export function ErectoriteIcon({ size = 24, color = '#FFB6C1', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Elongated prism */}
      <polygon points="10,22 8,18 8,4 10,2 14,2 16,4 16,18 14,22" fill={color}/>
      {/* Termination */}
      <polygon points="10,2 8,4 12,6 16,4 14,2" fill="rgba(255,255,255,0.35)"/>
      {/* Side facets */}
      <rect x="8" y="6" width="2" height="12" fill="rgba(255,255,255,0.2)"/>
      <rect x="14" y="6" width="2" height="12" fill="rgba(0,0,0,0.1)"/>
    </svg>
  );
}

// Fukuchilite - Dark copper sulfide
export function FukuchiliteIcon({ size = 24, color = '#2F2F2F', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Massive ore chunk */}
      <polygon points="4,18 2,12 4,6 8,2 16,2 20,6 22,12 20,18 16,22 8,22" fill={color}/>
      {/* Metallic highlights */}
      <polygon points="8,2 4,6 6,8 10,4 14,4 18,8 20,6 16,2" fill="rgba(200,150,50,0.2)"/>
      {/* Depth */}
      <polygon points="8,22 4,18 8,16 12,20" fill="rgba(0,0,0,0.15)"/>
    </svg>
  );
}

// Bastnasite - Golden rare earth
export function BastnasiteIcon({ size = 24, color = '#DAA520', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Hexagonal crystal */}
      <polygon points="12,2 19,6 19,18 12,22 5,18 5,6" fill={color}/>
      {/* Waxy luster */}
      <polygon points="12,2 5,6 7,10 12,6 17,10 19,6" fill="rgba(255,255,255,0.3)"/>
      {/* Layered pattern */}
      <line x1="5" y1="12" x2="19" y2="12" stroke="rgba(0,0,0,0.15)" strokeWidth="1"/>
      <line x1="5" y1="16" x2="19" y2="16" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// Hookerite - Green copper mineral
export function HookeriteIcon({ size = 24, color = '#228B22', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Botryoidal shape */}
      <circle cx="12" cy="12" r="6" fill={color}/>
      <circle cx="7" cy="10" r="4" fill={color}/>
      <circle cx="17" cy="10" r="4" fill={color}/>
      <circle cx="9" cy="16" r="3" fill={color}/>
      <circle cx="15" cy="16" r="3" fill={color}/>
      {/* Highlights */}
      <circle cx="10" cy="10" r="2" fill="rgba(255,255,255,0.25)"/>
      <circle cx="15" cy="8" r="1" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Kunzite - Pink spodumene
export function KunziteIcon({ size = 24, color = '#E6A8D7', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Prismatic crystal */}
      <polygon points="8,22 6,18 6,6 8,2 16,2 18,6 18,18 16,22" fill={color}/>
      {/* Striated faces */}
      <line x1="8" y1="4" x2="8" y2="20" stroke="rgba(255,255,255,0.3)" strokeWidth="2"/>
      <line x1="12" y1="3" x2="12" y2="21" stroke="rgba(255,255,255,0.2)" strokeWidth="1"/>
      {/* Termination */}
      <polygon points="8,2 6,6 12,8 18,6 16,2" fill="rgba(255,255,255,0.35)"/>
    </svg>
  );
}

// Pectolite - Blue Larimar
export function PectoliteIcon({ size = 24, color = '#ADD8E6', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Radiating fibrous */}
      <polygon points="12,2 20,8 18,20 6,20 4,8" fill={color}/>
      {/* Radial fibers */}
      <line x1="12" y1="10" x2="6" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="12" y1="10" x2="18" y2="18" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="12" y1="10" x2="12" y2="19" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="12" y1="10" x2="5" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      <line x1="12" y1="10" x2="19" y2="12" stroke="rgba(255,255,255,0.3)" strokeWidth="1"/>
      {/* Center */}
      <circle cx="12" cy="10" r="2" fill="rgba(255,255,255,0.4)"/>
    </svg>
  );
}

// Phosgenite - Yellow-white lead mineral
export function PhosgeniteIcon({ size = 24, color = '#FAFAD2', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Prismatic crystal */}
      <polygon points="8,20 6,16 6,8 8,4 16,4 18,8 18,16 16,20" fill={color}/>
      {/* Adamantine luster */}
      <polygon points="8,4 6,8 10,10 14,10 18,8 16,4" fill="rgba(255,255,255,0.4)"/>
      {/* Facet lines */}
      <line x1="10" y1="10" x2="10" y2="18" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="14" y1="10" x2="14" y2="18" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// Crocidolite - Blue asbestos fibers
export function CrocidoliteIcon({ size = 24, color = '#4169E1', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Fibrous bundle */}
      <rect x="4" y="4" width="16" height="16" fill={color}/>
      {/* Fiber lines */}
      <line x1="5" y1="5" x2="5" y2="19" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
      <line x1="9" y1="4" x2="9" y2="20" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
      <line x1="13" y1="4" x2="13" y2="20" stroke="rgba(255,255,255,0.2)" strokeWidth="2"/>
      <line x1="17" y1="5" x2="17" y2="19" stroke="rgba(255,255,255,0.15)" strokeWidth="2"/>
      {/* Silky highlight */}
      <rect x="4" y="4" width="16" height="3" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

// Mimetite - Yellow-orange arsenate
export function MimetiteIcon({ size = 24, color = '#FFD700', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Barrel-shaped crystals */}
      <ellipse cx="8" cy="12" rx="4" ry="8" fill={color}/>
      <ellipse cx="16" cy="14" rx="4" ry="6" fill={color}/>
      <ellipse cx="12" cy="16" rx="3" ry="5" fill={color}/>
      {/* Highlights */}
      <ellipse cx="7" cy="9" rx="2" ry="3" fill="rgba(255,255,255,0.3)"/>
      <ellipse cx="15" cy="11" rx="1.5" ry="2" fill="rgba(255,255,255,0.25)"/>
    </svg>
  );
}

// Orpiment - Yellow arsenic sulfide
export function OrpimentIcon({ size = 24, color = '#FFD700', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Foliated layers */}
      <polygon points="3,18 2,14 4,10 8,8 16,8 20,10 22,14 21,18 16,20 8,20" fill={color}/>
      {/* Layer separations */}
      <line x1="4" y1="12" x2="20" y2="12" stroke="rgba(255,200,0,0.5)" strokeWidth="1"/>
      <line x1="3" y1="16" x2="21" y2="16" stroke="rgba(255,200,0,0.5)" strokeWidth="1"/>
      {/* Resinous luster */}
      <polygon points="8,8 4,10 6,12 10,10 14,10 18,12 20,10 16,8" fill="rgba(255,255,255,0.3)"/>
    </svg>
  );
}

// Realgar - Red arsenic sulfide
export function RealgarIcon({ size = 24, color = '#FF4500', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      {/* Prismatic red crystal */}
      <polygon points="8,20 6,16 6,8 8,4 16,4 18,8 18,16 16,20" fill={color}/>
      {/* Resinous shine */}
      <polygon points="8,4 6,8 10,10 14,10 18,8 16,4" fill="rgba(255,255,255,0.25)"/>
      {/* Striated texture */}
      <line x1="8" y1="6" x2="8" y2="18" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="12" y1="5" x2="12" y2="19" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
      <line x1="16" y1="6" x2="16" y2="18" stroke="rgba(0,0,0,0.1)" strokeWidth="1"/>
    </svg>
  );
}

// ==================== UTILITY ICONS ====================

export function VaultIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="2" y="4" width="20" height="16" fill={color}/>
      <rect x="4" y="6" width="16" height="12" fill="var(--color-bg-secondary)"/>
      <circle cx="12" cy="12" r="4" stroke={color} strokeWidth="2" fill="none"/>
      <rect x="11" y="8" width="2" height="4" fill={color}/>
      <rect x="16" y="10" width="2" height="4" fill={color}/>
    </svg>
  );
}

export function ChartIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="18" width="16" height="2" fill={color}/>
      <rect x="4" y="4" width="2" height="14" fill={color}/>
      <rect x="7" y="14" width="3" height="4" fill={color}/>
      <rect x="11" y="10" width="3" height="8" fill={color}/>
      <rect x="15" y="6" width="3" height="12" fill={color}/>
    </svg>
  );
}

export function HomeIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <polygon points="12,2 22,10 22,22 2,22 2,10" fill={color}/>
      <rect x="9" y="14" width="6" height="8" fill="var(--color-bg-secondary)"/>
      <polygon points="12,2 2,10 4,10 12,4 20,10 22,10" fill="rgba(255,255,255,0.2)"/>
    </svg>
  );
}

export function RocketIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <path d="M12 2C12 2 8 6 8 12C8 16 10 18 12 20C14 18 16 16 16 12C16 6 12 2 12 2Z" fill={color}/>
      <circle cx="12" cy="10" r="2" fill="var(--color-bg-secondary)"/>
      <path d="M8 14L4 18L6 14Z" fill={color}/>
      <path d="M16 14L20 18L18 14Z" fill={color}/>
      <rect x="10" y="18" width="4" height="4" fill="#FF6B35"/>
    </svg>
  );
}

export function BookIcon({ size = 24, color = 'currentColor', className }: IconProps) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" className={className}>
      <rect x="4" y="2" width="16" height="20" rx="1" fill={color}/>
      <rect x="6" y="4" width="12" height="16" fill="var(--color-bg-paper)"/>
      <rect x="8" y="6" width="8" height="2" fill={color}/>
      <rect x="8" y="10" width="6" height="1" fill="rgba(0,0,0,0.3)"/>
      <rect x="8" y="12" width="7" height="1" fill="rgba(0,0,0,0.3)"/>
      <rect x="4" y="2" width="3" height="20" fill={color}/>
    </svg>
  );
}

// ==================== ICON MAPPING ====================

import { MetalType } from '../types/project';

export const METAL_ICONS: Record<MetalType, React.FC<IconProps>> = {
  // Precious
  gold: GoldIcon,
  silver: SilverIcon,
  platinum: PlatinumIcon,
  palladium: PalladiumIcon,
  rhodium: RhodiumIcon,
  iridium: IridiumIcon,
  osmium: OsmiumIcon,
  ruthenium: RutheniumIcon,
  // Gold variants
  white_gold: WhiteGoldIcon,
  rose_gold: RoseGoldIcon,
  green_gold: GreenGoldIcon,
  electrum: ElectrumIcon,
  // Base metals
  copper: CopperIcon,
  bronze: BronzeIcon,
  brass: BrassIcon,
  aluminum: AluminumIcon,
  zinc: ZincIcon,
  tin: TinIcon,
  lead: LeadIcon,
  nickel: NickelIcon,
  iron: IronIcon,
  steel: SteelIcon,
  stainless_steel: StainlessSteelIcon,
  cast_iron: CastIronIcon,
  // Industrial
  titanium: TitaniumIcon,
  tungsten: TungstenIcon,
  cobalt: CobaltIcon,
  molybdenum: MolybdenumIcon,
  tantalum: TantalumIcon,
  niobium: NiobiumIcon,
  vanadium: VanadiumIcon,
  chromium: ChromiumIcon,
  manganese: ManganeseIcon,
  zirconium: ZirconiumIcon,
  // Rare earth
  neodymium: NeodymiumIcon,
  scandium: ScandiumIcon,
  yttrium: YttriumIcon,
  lanthanum: LanthanumIcon,
  cerium: CeriumIcon,
  praseodymium: PraseodymiumIcon,
  europium: EuropiumIcon,
  terbium: TerbiumIcon,
  dysprosium: DysprosiumIcon,
  // Strategic
  lithium: LithiumIcon,
  beryllium: BerylliumIcon,
  magnesium: MagnesiumIcon,
  gallium: GalliumIcon,
  germanium: GermaniumIcon,
  indium: IndiumIcon,
  tellurium: TelluriumIcon,
  bismuth: BismuthIcon,
  antimony: AntimonyIcon,
  rhenium: RheniumIcon,
  // Meme minerals
  cummingtonite: CummingtoniteIcon,
  analcime: AnalcimeIcon,
  dickite: DickiteIcon,
  arsenic: ArsenicIcon,
  uraninite: UraniniteIcon,
  fukalite: FukaliteIcon,
  cubanite: CubaniteIcon,
  clintonite: ClintoniteIcon,
  mordenite: MordeniteIcon,
  erectorite: ErectoriteIcon,
  fukuchilite: FukuchiliteIcon,
  bastnasite: BastnasiteIcon,
  hookerite: HookeriteIcon,
  kunzite: KunziteIcon,
  pectolite: PectoliteIcon,
  phosgenite: PhosgeniteIcon,
  crocidolite: CrocidoliteIcon,
  mimetite: MimetiteIcon,
  orpiment: OrpimentIcon,
  realgar: RealgarIcon,
};

export function getMetalIcon(metalType: MetalType, size: number = 24, color?: string) {
  const IconComponent = METAL_ICONS[metalType];
  if (IconComponent) {
    return <IconComponent size={size} color={color} />;
  }
  return <GoldIcon size={size} color={color} />;
}

export default METAL_ICONS;
