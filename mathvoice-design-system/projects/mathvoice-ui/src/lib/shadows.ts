export interface MvShadowToken {
  readonly id: string;
  readonly name: string;
  readonly value: string;
}

export const MATHVOICE_SHADOWS: readonly MvShadowToken[] = [
  {
    id: 'xs',
    name: 'shadow-xs',
    value: '0 1px 2px 0 rgb(0 0 0 / 5%)',
  },
  {
    id: 'sm',
    name: 'shadow-sm',
    value: '0 2px 4px 0 rgb(0 0 0 / 7%), 0 1px 2px 0 rgb(0 0 0 / 3%)',
  },
  {
    id: 'md',
    name: 'shadow-md',
    value: '0 6px 10px -2px rgb(0 0 0 / 7%), 0 3px 5px -2px rgb(0 0 0 / 4%)',
  },
  {
    id: 'lg',
    name: 'shadow-lg',
    value: '0 12px 16px -4px rgb(0 0 0 / 7%), 0 4px 6px -2px rgb(0 0 0 / 2%)',
  },
  {
    id: 'xl',
    name: 'shadow-xl',
    value: '0 20px 24px -4px rgb(0 0 0 / 6%), 0 8px 8px -4px rgb(0 0 0 / 2%)',
  },
  {
    id: '2xl',
    name: 'shadow-2xl',
    value: '0 24px 48px -12px rgb(0 0 0 / 12%)',
  },
  {
    id: '3xl',
    name: 'shadow-3xl',
    value: '0 32px 64px -12px rgb(0 0 0 / 14%)',
  },
] as const;
