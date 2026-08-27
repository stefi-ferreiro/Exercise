import { MATHVOICE_COLOR_PALETTES, MATHVOICE_GRADIENTS } from './colors';

describe('MathVoice color tokens', () => {
  it('exposes all six documented palettes', () => {
    expect(MATHVOICE_COLOR_PALETTES.map(({ id }) => id)).toEqual([
      'primary',
      'secondary',
      'neutral',
      'error',
      'warning',
      'success',
    ]);
  });

  it('preserves the Figma brand colors', () => {
    const primary = MATHVOICE_COLOR_PALETTES.find(({ id }) => id === 'primary');
    const secondary = MATHVOICE_COLOR_PALETTES.find(({ id }) => id === 'secondary');

    expect(primary?.colors.find(({ step }) => step === '400')?.value).toBe('#5634FF');
    expect(secondary?.colors.find(({ step }) => step === '500')?.value).toBe('#E414FD');
  });

  it('exposes the three documented gradients', () => {
    expect(MATHVOICE_GRADIENTS).toHaveLength(3);
  });
});
