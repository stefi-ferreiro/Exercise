export interface MvColorToken {
  readonly step: string;
  readonly value: `#${string}`;
}

export interface MvColorPalette {
  readonly id: string;
  readonly title: string;
  readonly label: string;
  readonly description: string;
  readonly colors: readonly MvColorToken[];
}

export interface MvGradientToken {
  readonly id: string;
  readonly label: string;
  readonly from: MvColorToken;
  readonly to: MvColorToken;
  readonly direction: 'horizontal' | 'vertical';
}

export const MATHVOICE_COLOR_PALETTES: readonly MvColorPalette[] = [
  {
    id: 'primary',
    title: 'Brand',
    label: 'Primary',
    description:
      'The brand color is your primary color, and is used across interactive elements such as buttons, links and inputs.',
    colors: [
      { step: '25', value: '#F9F7FF' },
      { step: '50', value: '#EFEAFF' },
      { step: '75', value: '#D5CCFF' },
      { step: '100', value: '#AB99FF' },
      { step: '200', value: '#8166FF' },
      { step: '300', value: '#6A4AFF' },
      { step: '400', value: '#5634FF' },
      { step: '500', value: '#4B2EDC' },
      { step: '600', value: '#4129B9' },
      { step: '700', value: '#362395' },
      { step: '800', value: '#2C1D72' },
      { step: '900', value: '#21184F' },
    ],
  },
  {
    id: 'secondary',
    title: 'Brand',
    label: 'Secondary',
    description:
      'The secondary color complements the primary color and is used to highlight supporting elements such as backgrounds, icons and accent details.',
    colors: [
      { step: '25', value: '#FFFBFF' },
      { step: '50', value: '#FDEBFF' },
      { step: '100', value: '#FAD0FF' },
      { step: '200', value: '#F4A1FE' },
      { step: '300', value: '#EF72FE' },
      { step: '400', value: '#E943FD' },
      { step: '500', value: '#E414FD' },
      { step: '600', value: '#C702DF' },
      { step: '700', value: '#A402B7' },
      { step: '800', value: '#800190' },
      { step: '900', value: '#5D0168' },
    ],
  },
  {
    id: 'neutral',
    title: 'Gray',
    label: 'Neutral',
    description:
      'Gray is a neutral color and is the foundation of the color system. Almost everything in UI design uses gray for text, form fields, backgrounds and dividers.',
    colors: [
      { step: '0', value: '#FFFFFF' },
      { step: '25', value: '#FAFAFB' },
      { step: '50', value: '#F4F4F6' },
      { step: '100', value: '#E9E9EB' },
      { step: '200', value: '#CCCCCE' },
      { step: '300', value: '#AFAFB0' },
      { step: '400', value: '#929293' },
      { step: '500', value: '#757576' },
      { step: '600', value: '#575758' },
      { step: '700', value: '#3A3A3B' },
      { step: '800', value: '#1D1D1D' },
      { step: '900', value: '#000000' },
    ],
  },
  {
    id: 'error',
    title: 'Error',
    label: 'Red',
    description:
      'Error colors are used across error states and destructive actions. They communicate a destructive or negative action.',
    colors: [
      { step: '25', value: '#FFFBFA' },
      { step: '50', value: '#FEF3F2' },
      { step: '100', value: '#FEE4E2' },
      { step: '200', value: '#FECDCA' },
      { step: '300', value: '#FDA29B' },
      { step: '400', value: '#F97066' },
      { step: '500', value: '#F04438' },
      { step: '600', value: '#D92D20' },
      { step: '700', value: '#B42318' },
      { step: '800', value: '#912018' },
      { step: '900', value: '#7A271A' },
    ],
  },
  {
    id: 'warning',
    title: 'Warning',
    label: 'Yellow',
    description:
      'Warning colors communicate that an action is potentially destructive or on hold. These colors are commonly used in confirmations or to grab attention.',
    colors: [
      { step: '25', value: '#FFFCF5' },
      { step: '50', value: '#FFFAEB' },
      { step: '100', value: '#FEF0C7' },
      { step: '200', value: '#FEDF89' },
      { step: '300', value: '#FEC84B' },
      { step: '400', value: '#FDB022' },
      { step: '500', value: '#F79009' },
      { step: '600', value: '#DC6803' },
      { step: '700', value: '#B54708' },
      { step: '800', value: '#93370D' },
      { step: '900', value: '#7A2E0E' },
    ],
  },
  {
    id: 'success',
    title: 'Success',
    label: 'Green',
    description:
      'Success colors communicate a positive action, positive trend or successful confirmation.',
    colors: [
      { step: '25', value: '#F6FEF9' },
      { step: '50', value: '#ECFDF3' },
      { step: '100', value: '#D1FADF' },
      { step: '200', value: '#A6F4C5' },
      { step: '300', value: '#6CE9A6' },
      { step: '400', value: '#32D583' },
      { step: '500', value: '#12B76A' },
      { step: '600', value: '#039855' },
      { step: '700', value: '#027A48' },
      { step: '800', value: '#05603A' },
      { step: '900', value: '#054F31' },
    ],
  },
] as const;

export const MATHVOICE_GRADIENTS: readonly MvGradientToken[] = [
  {
    id: 'brand-primary',
    label: 'Primary 400 → Secondary 500',
    from: { step: '400', value: '#5634FF' },
    to: { step: '500', value: '#E414FD' },
    direction: 'horizontal',
  },
  {
    id: 'primary-soft',
    label: 'Primary 400 → Primary 75',
    from: { step: '400', value: '#5634FF' },
    to: { step: '75', value: '#D5CCFF' },
    direction: 'vertical',
  },
  {
    id: 'secondary-soft',
    label: 'Secondary 400 → Secondary 100',
    from: { step: '400', value: '#E943FD' },
    to: { step: '100', value: '#FAD0FF' },
    direction: 'vertical',
  },
] as const;
