import { MATHVOICE_FONT_FAMILY, MATHVOICE_FONT_WEIGHTS, MATHVOICE_TYPE_SCALE } from './typography';

describe('MathVoice typography tokens', () => {
  it('uses Inter with the documented weights', () => {
    expect(MATHVOICE_FONT_FAMILY).toBe('Inter');
    expect(MATHVOICE_FONT_WEIGHTS.map(({ value }) => value)).toEqual([400, 500, 600, 700]);
  });

  it('preserves the complete Figma type scale', () => {
    expect(MATHVOICE_TYPE_SCALE.map(({ id }) => id)).toEqual([
      'display-lg',
      'display-md',
      'display-sm',
      'text-xl',
      'text-lg',
      'text-md',
      'text-sm',
      'text-xs',
    ]);
  });

  it('preserves font sizes and line heights', () => {
    expect(MATHVOICE_TYPE_SCALE.map(({ fontSize, lineHeight }) => [fontSize, lineHeight])).toEqual([
      [36, 44],
      [30, 38],
      [24, 32],
      [20, 30],
      [18, 28],
      [16, 24],
      [14, 20],
      [12, 18],
    ]);
  });
});
