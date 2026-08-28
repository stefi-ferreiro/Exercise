import { MATHVOICE_SHADOWS } from './shadows';

describe('MathVoice shadow tokens', () => {
  it('exposes all seven documented elevations', () => {
    expect(MATHVOICE_SHADOWS.map(({ name }) => name)).toEqual([
      'shadow-xs',
      'shadow-sm',
      'shadow-md',
      'shadow-lg',
      'shadow-xl',
      'shadow-2xl',
      'shadow-3xl',
    ]);
  });
});
