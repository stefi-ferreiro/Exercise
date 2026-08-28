export type MvBlurTone = 'light' | 'dark';

export interface MvBlurScale {
  readonly id: 'sm' | 'md' | 'lg' | 'xl';
  readonly name: 'SM' | 'MD' | 'LG' | 'XL';
  readonly radius: number;
}

export interface MvBlurToken {
  readonly id: string;
  readonly label: string;
  readonly scale: MvBlurScale['id'];
  readonly tone: MvBlurTone;
  readonly radius: number;
}

export const MATHVOICE_BLUR_SCALES: readonly MvBlurScale[] = [
  { id: 'sm', name: 'SM', radius: 8 },
  { id: 'md', name: 'MD', radius: 16 },
  { id: 'lg', name: 'LG', radius: 24 },
  { id: 'xl', name: 'XL', radius: 40 },
] as const;

export const MATHVOICE_BLURS: readonly MvBlurToken[] = MATHVOICE_BLUR_SCALES.flatMap((scale) => [
  {
    id: `${scale.id}-light`,
    label: `${scale.name} light`,
    scale: scale.id,
    tone: 'light',
    radius: scale.radius,
  },
  {
    id: `${scale.id}-dark`,
    label: `${scale.name} dark`,
    scale: scale.id,
    tone: 'dark',
    radius: scale.radius,
  },
]);
