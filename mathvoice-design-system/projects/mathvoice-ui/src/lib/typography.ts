export type MvFontWeightName = 'Regular' | 'Medium' | 'Semibold' | 'Bold';

export interface MvFontWeight {
  readonly name: MvFontWeightName;
  readonly value: 400 | 500 | 600 | 700;
}

export interface MvTypeScale {
  readonly id: string;
  readonly name: string;
  readonly fontSize: number;
  readonly lineHeight: number;
  readonly letterSpacing?: string;
}

export const MATHVOICE_FONT_FAMILY = 'Inter' as const;

export const MATHVOICE_FONT_WEIGHTS: readonly MvFontWeight[] = [
  { name: 'Regular', value: 400 },
  { name: 'Medium', value: 500 },
  { name: 'Semibold', value: 600 },
  { name: 'Bold', value: 700 },
] as const;

export const MATHVOICE_TYPE_SCALE: readonly MvTypeScale[] = [
  {
    id: 'display-lg',
    name: 'Display Lg',
    fontSize: 36,
    lineHeight: 44,
    letterSpacing: '-0.02em',
  },
  { id: 'display-md', name: 'Display Md', fontSize: 30, lineHeight: 38 },
  { id: 'display-sm', name: 'Display Sm', fontSize: 24, lineHeight: 32 },
  { id: 'text-xl', name: 'Text XL', fontSize: 20, lineHeight: 30 },
  { id: 'text-lg', name: 'Text Lg', fontSize: 18, lineHeight: 28 },
  { id: 'text-md', name: 'Text Md', fontSize: 16, lineHeight: 24 },
  { id: 'text-sm', name: 'Text Sm', fontSize: 14, lineHeight: 20 },
  { id: 'text-xs', name: 'Text XS', fontSize: 12, lineHeight: 18 },
] as const;
