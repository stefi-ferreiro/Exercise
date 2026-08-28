import {
  MATHVOICE_PRIMITIVE_TOKENS,
  MATHVOICE_SEMANTIC_TOKENS,
  tokensByGroup,
} from './tokens';

describe('MathVoice primitive and semantic tokens', () => {
  it('records every Primitive variable from Figma', () => {
    expect(MATHVOICE_PRIMITIVE_TOKENS).toHaveLength(131);
    expect(MATHVOICE_PRIMITIVE_TOKENS.every((token) => token.collection === 'primitive')).toBe(
      true,
    );
  });

  it('records every Semantic variable from Figma', () => {
    expect(MATHVOICE_SEMANTIC_TOKENS).toHaveLength(458);
    expect(MATHVOICE_SEMANTIC_TOKENS.every((token) => token.collection === 'semantic')).toBe(true);
  });

  it('keeps primitive colors aligned with Figma values', () => {
    const primary400 = MATHVOICE_PRIMITIVE_TOKENS.find(
      (token) => token.name === 'Color/Primary/400',
    );
    const neutral700 = MATHVOICE_PRIMITIVE_TOKENS.find(
      (token) => token.name === 'Color/Neutral/700',
    );

    expect(primary400?.cssVar).toBe('--mv-color-primary-400');
    expect(primary400?.value).toBe('#5634ff');
    expect(neutral700?.value).toBe('#34343b');
  });

  it('aliases semantic button tokens to primitive colors', () => {
    const background = MATHVOICE_SEMANTIC_TOKENS.find(
      (token) => token.name === 'Button/Primary/Background/Default',
    );

    expect(background?.aliasOf).toBe('Color/Primary/400');
    expect(background?.cssValue).toBe('var(--mv-color-primary-400)');
    expect(background?.cssVar).toBe('--mv-button-primary-background-default');
  });

  it('groups tokens by the Figma collection folders', () => {
    expect(tokensByGroup(MATHVOICE_PRIMITIVE_TOKENS, 'Spacing')).toHaveLength(19);
    expect(tokensByGroup(MATHVOICE_SEMANTIC_TOKENS, 'Button').length).toBeGreaterThan(0);
  });
});
