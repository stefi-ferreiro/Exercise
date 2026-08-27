import { MATHVOICE_BLURS, MATHVOICE_BLUR_SCALES } from './blurs';

describe('MathVoice blur tokens', () => {
  it('exposes SM, MD, LG and XL radii from Figma', () => {
    expect(MATHVOICE_BLUR_SCALES.map(({ radius }) => radius)).toEqual([8, 16, 24, 40]);
  });

  it('pairs each scale with light and dark overlays', () => {
    expect(MATHVOICE_BLURS).toHaveLength(8);
    expect(MATHVOICE_BLURS.filter(({ tone }) => tone === 'light')).toHaveLength(4);
    expect(MATHVOICE_BLURS.filter(({ tone }) => tone === 'dark')).toHaveLength(4);
  });
});
